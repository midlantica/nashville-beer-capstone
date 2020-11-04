import React, { useContext, useEffect, useState } from "react";
import Beers from "./Beers";
import Brewery from "./Brewery";
import FormEditBrewery from "./FormEditBrewery";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { NavLink as RRNavLink, Link, useParams, useHistory } from "react-router-dom";
//import { UserProfileContext } from "../providers/UserProfileProvider";
import { BreweryContext } from "../providers/BreweryProvider";
import { BeerContext } from "../providers/BeerProvider";


export default function Admin() {
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
      console.log("Brewery", brewery)
        history.push("/admin");
  };

  useEffect(() => {
    setUserTypeId(sessionUser.userTypeId)
    getAllBreweries()
  }, [])

  useEffect(() => {
    setBreweryToDelete(brewery)
  }, [brewery])

  if (!brewery) {
    console.log("it's happenning...")
    return null
  }

  return (
    <>
    { userTypeId === 1 ?

      <section>
          <h4>Admin</h4>
          <div className="dh-form-grid">

            <div className="sidebar">
              <div className="dh-brewAdminHead flexRow just-space-between my-2 pr-2">
                <h5>Breweries</h5>
                <div className="dh-add"><Link to="./">+</Link></div>
              </div>

              <ul className="dh-admin-breweries">
                  {breweries.map((i) =>
                  <li key={i.id}>
                    <details>
                        <summary><Link key={i.id} to={`${i.id}`}>{i.title}</Link>

                        <button id={i.id}
                                className="dh-btn-delete"
                                onClick={() => deleteThisBrewery(i.id)}>-
                        </button>

                      </summary>
                      <ul className="dh-admin-beers">
                        {i.beers.map(beer =>
                          <Link key={beer.id} to={beer.id}>
                            <li>{beer.name}</li>
                          </Link>
                        )}
                      </ul>
                      <div className="dh-add-beer"><Link to="AddBeer">Add New Beer</Link></div>
                    </details>
                  </li>
                )}
              </ul>

            </div>

            {/* CONTENT FORM */}
            <div className="content">

              return (

                if(brewery) {
                  <FormEditBrewery />
                }

                {/* else if (y == true) {
                  <FormCreateBrewery />
                }
                */}

                else {
                  <div>
                    <h1>Please select a Brewery of Beer</h1>
                  </div>
                }
              )


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
