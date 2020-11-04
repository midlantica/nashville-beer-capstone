import React, { useContext, useEffect, useState } from "react";
import Beers from "./Beers";
import Brewery from "./Brewery";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { NavLink as RRNavLink, Link, useParams, useHistory } from "react-router-dom";
//import { UserProfileContext } from "../providers/UserProfileProvider";
import { BreweryContext } from "../providers/BreweryProvider";
import { BeerContext } from "../providers/BeerProvider";

export default function FormEditBrewery() {
  const { id } = useParams();
  //const { isLoggedIn, logout } = useContext(UserProfileContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { updateBrewery, brewery, getAllBreweries, getBreweryById, breweries } = useContext(BreweryContext)
  const { getAllBeersFromBrewery, beers } = useContext(BeerContext)
  const sessionUser = JSON.parse(sessionStorage.getItem("userProfile"))
  const [userTypeId, setUserTypeId] = useState()

  const [editedBrewery, setEditedBrewery] = useState({
    id: brewery.id,
    title: brewery.title,
    address: brewery.address,
    website: brewery.website,
    imageUrl: brewery.imageUrl,
    established: brewery.established
  })
  const history = useHistory();

  const [breweryToDelete, setBreweryToDelete] = useState({})

  const handleFieldChange = (e) => {
    const stateToChange = editedBrewery;
    stateToChange[e.target.id] = e.target.value;
    setEditedBrewery(stateToChange);
  };

  const editBrewery = (e) => {
    e.preventDefault()
    const newId = parseInt(id)
    updateBrewery(newId, editedBrewery)
    // history.push(`/admin/brewery/${id}`)
    document.getElementById('breweryForm').reset()
  };

  useEffect(() => {
    setUserTypeId(sessionUser.userTypeId)
    getAllBreweries()
    getBreweryById(id)
  }, [id])

  useEffect(() => {
    setBreweryToDelete(brewery)
  }, [brewery])

  useEffect(() => {
    setEditedBrewery(brewery)
  }, [brewery])

  if (!brewery) {
    return (
      <><h5>Please select a Brewery or Beer</h5></>
    )
  }

  return (
    <>
     { userTypeId === 1 ?

      <section>
        <div className="content">
          <h4>Brewery</h4>
          <Form id="breweryForm" style={{ maxWidth: "600px", minWidth: "300px"}}>

            <FormGroup>
              <Input
                defaultValue={brewery.id}
                name="id"
                id="id"
                type="hidden" />
            </FormGroup>

            <FormGroup>
              <Label for="title">Title</Label>
              <Input type="text"
                onChange={handleFieldChange}
                defaultValue={brewery.title}
                name="title"
                id="title"
                placeholder="title" />
            </FormGroup>

            <FormGroup>
              <Label for="address">Address</Label>
              <Input type="address"
                onChange={handleFieldChange}
                defaultValue={brewery.address}
                name="address"
                id="address"
                placeholder="address" />
            </FormGroup>

            <FormGroup>
              <Label for="website">Website</Label>
              <Input type="website"
                onChange={handleFieldChange}
                defaultValue={brewery.website}
                name="website"
                id="website"
                placeholder="website" />
            </FormGroup>

            <FormGroup>
              <Label for="established">Established</Label>
              <Input type="established"
                onChange={handleFieldChange}
                defaultValue={brewery.established}
                name="established"
                id="established"
                placeholder="established" />
            </FormGroup>

            <FormGroup>
              <Label for="imageUrl">Image Url</Label>
              <Input type="imageUrl"
                onChange={handleFieldChange}
                defaultValue={brewery.imageUrl}
                name="imageUrl"
                id="imageUrl"
                placeholder="imageUrl" />
            </FormGroup>

            <div className="d-flex">
              <Button color="secondary" size="sm">Cancel</Button>
              <Button color="primary ml-3" size="sm" onClick={editBrewery}>Edit Brewery</Button>
            </div>
          </Form>

        </div>
      </section>

      :

      <div>
        <h1>Not Admin</h1>
      </div>
    }
    </>
  )

}
