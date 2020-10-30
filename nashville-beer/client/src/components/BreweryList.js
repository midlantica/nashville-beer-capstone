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

        <section className="gridAuto">
          {breweries.map(b =>
            <Brewery key={b.id} brewery={b} />
          )}
        </section>

      :

        <section className="gridAuto">
          {breweries.map(b =>
            <Brewery key={b.id} brewery={b} />
          )}
        </section>
      }
    </>
  )

}
