import React, { useContext, useEffect, useState } from "react";
import Beers from "./Beers";
import Brewery from "./Brewery";
import { BreweryContext } from "../providers/BreweryProvider";
import { BeerContext } from "../providers/BeerProvider";
import { Link, useParams, useHistory } from "react-router-dom";

export default function BreweryBeersList() {

  const { id } = useParams();
  const [ brewery,setBrewery ] = useState()
  const { breweries, getBreweryById, getAllBreweries } = useContext(BreweryContext)
  const { getAllBeersFromBrewery, beers } = useContext(BeerContext)
  const sessionUser = JSON.parse(sessionStorage.getItem("userProfile"))
  const [userTypeId, setUserTypeId] = useState()

  useEffect(() => {
    setUserTypeId(sessionUser.userTypeId)
    getBreweryById(id)
    getAllBeersFromBrewery(id)
    getAllBreweries()
  }, [])

  useEffect(() => {
    foundBrewery()
  }, [breweries])

  const foundBrewery = () => {
    setBrewery(breweries.find((brewery) => brewery.id == id))
  }

  console.log(brewery, breweries, beers)

  return (
    <>
      { userTypeId === 1 ?
        <div>

          <section className="dh-grid_breweryBeers">
            <div>
              {(brewery !== undefined) &&
                <Brewery key={brewery.id} brewery={brewery} />
              }
            </div>

            <div className="dh-grid_beers">
              {beers.map(b =>
                <Beers key={b.id} beer={b} />
              )}
            </div>

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
