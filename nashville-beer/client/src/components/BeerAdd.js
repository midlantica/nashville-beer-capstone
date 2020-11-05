import React, { useContext, useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { NavLink as RRNavLink, Link, useParams, useHistory } from "react-router-dom";
import { BeerContext } from "../providers/BeerProvider";

export default function BeerAdd() {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { addBeer } = useContext(BeerContext)
  const sessionUser = JSON.parse(sessionStorage.getItem("userProfile"))
  const [userTypeId, setUserTypeId] = useState()
  const [beer, setBeer] = useState({ })
  const history = useHistory();

  const handleFieldChange = (evt) => {
    const stateToChange = beer;
    stateToChange[evt.target.id] = evt.target.value;
    setBeer(stateToChange);
  };

  const makeNewBeer = () => {
    const newBeer = {
      breweryId: parseInt(id),
      name: beer.name,
      type: beer.type,
      ibu: parseInt(beer.ibu),
      abv: parseInt(beer.abv),
      imageUrl: beer.imageUrl
    }
    addBeer(newBeer)
    .then(history.push("/admin"));
  };

  useEffect(() => {
    setUserTypeId(sessionUser.userTypeId)
  }, [])

  return (
    <>
     { userTypeId === 1 ?

      <section className="d-flex w-100 justify-content-center">
        <div className="content">
          <h4>Add Beer</h4>
          <Form style={{ maxWidth: "600px", minWidth: "300px"}}>

            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text"
                onChange={handleFieldChange}
                name="name"
                id="name"
                placeholder="name" />
            </FormGroup>

            <FormGroup>
              <Label for="type">Type</Label>
              <Input type="text"
                onChange={handleFieldChange}
                name="type"
                id="type"
                placeholder="type" />
            </FormGroup>

            <FormGroup>
              <Label for="abv">ABV</Label>
              <Input type="text"
                onChange={handleFieldChange}
                name="abv"
                id="abv"
                placeholder="abv" />
            </FormGroup>

            <FormGroup>
              <Label for="ibu">IBU</Label>
              <Input type="text"
                onChange={handleFieldChange}
                name="ibu"
                id="ibu"
                placeholder="ibu" />
            </FormGroup>

            <FormGroup>
              <Label for="imageUrl">Image Url</Label>
              <Input type="text"
                onChange={handleFieldChange}
                name="imageUrl"
                id="imageUrl"
                placeholder="imageUrl" />
            </FormGroup>

            <div className="d-flex">
              <Button color="secondary" size="sm">Cancel</Button>
              <Button color="primary ml-3" size="sm" onClick={makeNewBeer}>Add Beer</Button>
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
