import React, { useContext, useEffect, useState } from "react";
import Brewery from "./Brewery";
import { BreweryContext } from "../providers/BreweryProvider";
import { Link, useHistory } from "react-router-dom";

export default function BreweryList() {

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
        <div>

          <div className="flexRow marB1">
            <h4 className="marB1 ">{breweries.id}</h4>
            <button className="align-i-flex-end">Admin</button>
          </div>

          <section className="dh-grid_breweries">
            {breweries.map(b =>
              <Brewery key={b.id} brewery={b} />
            )}
          </section>

        </div>

      :

        <section className="gridAuto">
        <p>Breweries - public user</p>
        <div>
          {breweries.map(b =>
            <Brewery key={b.id} brewery={b} />
          )}
        </div>
      </section>
      }
    </>
  )

}
