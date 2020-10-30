import React, { useContext, useEffect, useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import { UserProfileContext } from "../providers/UserProfileProvider";
import Brewery from "./Brewery";
import { BreweryContext } from "../providers/BreweryProvider";
import { Link, useParams, useHistory } from "react-router-dom";

export default function Admin() {
  const { id } = useParams();
  //const { isLoggedIn, logout } = useContext(UserProfileContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { getAllBreweries, breweries } = useContext(BreweryContext)
  const sessionUser = JSON.parse(sessionStorage.getItem("userProfile"))
  const [userTypeId, setUserTypeId] = useState()

  useEffect(() => {
    setUserTypeId(sessionUser.userTypeId)
    getAllBreweries()
  }, [])

  return (
    <>
    { userTypeId === 1 ?

      <section>
          <h3>Admin</h3>
          <div className="gridAuto">

            <div className="sidebar">

              <div className="d-flex mt-4 mb-2">
                <h5>Breweries</h5>
                <Button color="secondary ml-3" size="sm" to="AddBrewery">Add</Button>
              </div>

              <ul>
                <li className="selected">Brewery.title</li>
                <li>Brewery.title</li>
                <li>Brewery.title</li>

                <div className="d-flex mt-4 mb-2">
                  <h5>Beers</h5>
                  <Button color="secondary ml-3" size="sm" to="AddBeer">Add</Button>
                </div>
                <ul>
                  <li>Beer.name</li>
                  <li className="selected">Beer.name</li>
                  <li>Beer.name</li>
                </ul>
              </ul>

            </div>

            <div className="content">
              <h4>Brewery</h4>
              <Form>

                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input type="text" name="name" id="name" placeholder="name" />
                </FormGroup>

                <FormGroup>
                  <Label for="adrress">Address</Label>
                  <Input type="address" name="address" id="address" placeholder="address" />
                </FormGroup>

                <FormGroup>
                  <Label for="established">Established</Label>
                  <Input type="established" name="established" id="established" placeholder="established" />
                </FormGroup>

                <FormGroup>
                  <Label for="imageUrl">Image Url</Label>
                  <Input type="imageUrl" name="imageUrl" id="imageUrl" placeholder="imageUrl" />
                </FormGroup>

                <div className="d-flex">
                  <Button color="danger mr-auto" size="sm">Delete</Button>
                  <Button color="secondary" size="sm">Cancel</Button>
                  <Button color="primary ml-2" size="sm">Submit</Button>
                </div>
              </Form>
            </div>
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
