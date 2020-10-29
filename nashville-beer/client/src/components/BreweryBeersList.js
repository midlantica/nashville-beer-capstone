import React, { useContext, useEffect, useState } from "react";
import Beers from "./Beers";
import { BreweryContext } from "../providers/BreweryProvider";
import { BeerContext } from "../providers/BeerProvider";
import { Link, useParams, useHistory } from "react-router-dom";

export default function BreweryBeersList() {

  const { id } = useParams();
  const { getAllBreweries, breweries } = useContext(BreweryContext)
  const { getAllBeersFromBrewery, beers } = useContext(BeerContext)
  const sessionUser = JSON.parse(sessionStorage.getItem("userProfile"))
  const [userTypeId, setUserTypeId] = useState()

  useEffect(() => {
    setUserTypeId(sessionUser.userTypeId)
    getAllBreweries()
    getAllBeersFromBrewery(id)
  }, [])

  console.log(beers)

  return (
    <>
      { userTypeId === 1 ?
      <div>
        <h2 className="marB1">X Brewery's Beers - Admin</h2>
        <section className="dh-grid_brew_beers">
          {beers.map(b =>
            <Beers key={b.id} beer={b} />
          )}
        </section>
      </div>

        :

      <section className="dh-grid_brew_beers">
        <p>Breweries - Public user</p>
        <div>
          {beers.map(b =>
            <Beers key={b.id} beers={b} />
          )}
        </div>
      </section>
      }
    </>
  )

}
