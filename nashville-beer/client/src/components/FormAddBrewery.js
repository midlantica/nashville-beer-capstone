import React, { useContext, useEffect, useState } from "react";
import Beers from "./Beers";
import Brewery from "./Brewery";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { NavLink as RRNavLink, Link, useParams, useHistory } from "react-router-dom";
//import { UserProfileContext } from "../providers/UserProfileProvider";
import { BreweryContext } from "../providers/BreweryProvider";
import { BeerContext } from "../providers/BeerProvider";


export default function FormAddBrewery() {
  const { id } = useParams();
  //const { isLoggedIn, logout } = useContext(UserProfileContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { getAllBreweries, getBreweryById, breweries } = useContext(BreweryContext)
  const { getAllBeersFromBrewery, beers } = useContext(BeerContext)
  const sessionUser = JSON.parse(sessionStorage.getItem("userProfile"))
  const [userTypeId, setUserTypeId] = useState()

  const [brewery, setBrewery] = useState({ name: "", beers:[] })
  const { addBrewery, deleteThisBrewery } = useContext(BreweryContext);
  const history = useHistory();

  const [breweryToDelete, setBreweryToDelete] = useState({})

  const handleFieldChange = (evt) => {
    const stateToChange = brewery;
    stateToChange[evt.target.id] = evt.target.value;
    setBrewery(stateToChange);
  };

  const makeNewBrewery = () => {
    addBrewery(brewery)
    //console.log("Brewery", brewery)
    .then(history.push("/admin"));
  };

  useEffect(() => {
    setUserTypeId(sessionUser.userTypeId)
    getAllBreweries()
  }, [])

  useEffect(() => {
    setBreweryToDelete(brewery)
  }, [brewery])

  if (!brewery) {
    return null
  }

  return (
    <>
     { userTypeId === 1 ?

      <section>
        <div className="content">
          <h4>Brewery</h4>
          <Form style={{ maxWidth: "600px", minWidth: "300px"}}>

            <FormGroup>
              <Label for="title">Title</Label>
              <Input type="text"
                onChange={handleFieldChange}
                name="title"
                id="title"
                placeholder="title" />
            </FormGroup>

            <FormGroup>
              <Label for="address">Address</Label>
              <Input type="address"
                onChange={handleFieldChange}
                name="address"
                id="address"
                placeholder="address" />
            </FormGroup>

            <FormGroup>
              <Label for="website">Website</Label>
              <Input type="website"
                onChange={handleFieldChange}
                name="website"
                id="website"
                placeholder="website" />
            </FormGroup>

            <FormGroup>
              <Label for="established">Established</Label>
              <Input type="established"
                onChange={handleFieldChange}
                name="established"
                id="established"
                placeholder="established" />
            </FormGroup>

            <FormGroup>
              <Label for="imageUrl">Image Url</Label>
              <Input type="imageUrl"
                onChange={handleFieldChange}
                name="imageUrl"
                id="imageUrl"
                placeholder="imageUrl" />
            </FormGroup>

            <div className="d-flex">
              <Button color="secondary" size="sm">Cancel</Button>
              <Button color="primary ml-3" size="sm" onClick={makeNewBrewery}>Add New Brewery</Button>
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
