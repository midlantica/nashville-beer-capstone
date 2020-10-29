import React, { useContext, useEffect, useState } from "react";
import Brewery from "./Brewery";
import { BreweryContext } from "../providers/BreweryProvider";
import { BeerContext } from "../providers/BeerProvider";
import { Link, useHistory } from "react-router-dom";

export default function BreweryBeersList() {

  const { getAllBreweries, breweries } = useContext(BreweryContext)
  const { getAllBeersFromBrewery, beers, Beers } = useContext(BeerContext)
  const sessionUser = JSON.parse(sessionStorage.getItem("userProfile"))
  const [userTypeId, setUserTypeId] = useState()

  useEffect(() => {
    setUserTypeId(sessionUser.userTypeId)
    getAllBreweries()
    getAllBeersFromBrewery()
  }, [])

  return (
    <>
      { userTypeId === 1 ?
      <div>
        <h2 className="marB1">X Brewery's Beers - Admin</h2>
        <section className="dh-grid_brew_beers">
          {beers.filter(b =>
            <Beers key={b.id} beers={b} />
          )}
        </section>
      </div>

        :

      <section className="dh-grid_brew_beers">
        <p>Breweries - Public user</p>
        <div>
          {breweries.map(b =>
            <Beers key={b.id} beers={b} />
          )}
        </div>
      </section>
      }
    </>
  )

}
