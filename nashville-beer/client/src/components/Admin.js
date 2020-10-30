import React, { useContext, useEffect, useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Button, Form, FormGroup, Label, Input, FormText, Badge
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
          <h4>Admin</h4>
          <div className="dh-form-grid">

            <div className="sidebar">

              <ul className="dh-admin-breweries">
                <div className="d-flex mt-3">
                  <h6 className="mb-1">Breweries</h6>
                  <Badge color="secondary dh-add" size="sm" to="AddBrewery">＋</Badge>
                </div>
                <li><Link to="#">Brewery.title</Link></li>
                <li className="selected">
                  <div className="d-flex mt-1">
                    <Link to="#">Brewery.title</Link>
                    <Badge color="secondary dh-add" size="sm" to="AddBeer">＋</Badge>
                  </div>
                </li>
                <ul className="dh-admin-beers">
                  <li><Link to="#">Beer.name</Link></li>
                  <li className="selected"><Link to="#">Beer.name</Link></li>
                  <li><Link to="#">Beer.name</Link></li>
                </ul>
                <li><Link to="#">Brewery.title</Link></li>

              </ul>

            </div>

            <div className="content">
              <h4>Brewery</h4>
              <Form style={{ maxWidth: "600px", minWidth: "300px"}}>

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
