import React, { useContext, useEffect, useState } from "react";
import Beers from "./Beers";
import Brewery from "./Brewery";
import FormEditBrewery from "./FormEditBrewery";
import FormAddBrewery from "./FormAddBrewery";
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

  // const makeNewBrewery = () => {
  //   addBrewery(brewery)
  //     console.log("Brewery", brewery)
  //       history.push("/admin");
  // };

  useEffect(() => {
    setUserTypeId(sessionUser.userTypeId)
    getAllBreweries()
    //getBreweryById(id)
  }, [id])

  // useEffect(() => {
  //   setBreweryToDelete(brewery)
  // }, [brewery])

  // if (!brewery) {
  //   //console.log("it's happenning...")
  //   return null
  // }

  return (
    <>
    { userTypeId === 1 ?

      <section>
          <h4>Admin</h4>
          <div className="dh-form-grid">

            <div className="sidebar">
              <div className="dh-brewAdminHead flexRow just-space-between my-2 pr-2">
                <h5>Breweries</h5>
                <div className="dh-add"><Link to="/admin/brewery/new">+</Link></div>
              </div>

              <ul className="dh-admin-breweries">
                  {breweries.map((i) =>
                  <li key={i.id}>
                    <details>
                        <summary><Link key={i.id} to={`/admin/brewery/${i.id}`}>{i.title}</Link>

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
                        <div className="dh-add-beer"><Link to={`/admin/brewery/${i.id}/addNew`}>Add New Beer</Link></div>
                    </details>
                  </li>
                )}
              </ul>

            </div>

            {/* CONTENT PANEL */}
            <div className="content">

              {
                window.location.pathname === `/admin/brewery/new` ?
                <FormAddBrewery />
                :
                window.location.pathname === `/admin/brewery/${id}`?
                <FormEditBrewery />
                :
                <div className="border panel panel-default d-flex align-items-center justify-content-center h-100">
                  <h4>Please select a Brewery or Beer</h4>
                </div>
              }

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
