import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const BeerContext = React.createContext();

export const BeerProvider = (props) => {
  const apiUrl = "/api/beers";
  const { getToken } = useContext(UserProfileContext);

  const [beers, setBeers] = useState([]);
  const [beer, setBeer] = useState({});

  const getAllBeers = () => {
    getToken().then((token) =>
      fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(resp => resp.json())
        .then(setBeers));
  };

  const getAllBeersFromBrewery = (id) => {
    return getToken().then((token) =>
      fetch(`/api/beer/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((resp) => resp.json())
        .then(setBeers));
  }

    const getAllBeersByUser = (id) => {
    return getToken().then((token) =>
      fetch(`/api/beer/beer/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((resp) => resp.json())
        .then(setBeers));
  }

  const getById = (id) => {
    getToken().then((token) =>
      fetch(`/api/beer/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })).then((resp) => resp.json())
      .then(setBeer);
  };

  const addBeer = (beer) => {
    return getToken().then((token) =>
      fetch("/api/beer", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(beer)
      }).then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        throw new Error("Unauthorized");
      }))
  };

  const updateBeer = (id, beer) => {
    return getToken().then((token) =>
      fetch(`/api/beer/edit/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(beer)
      }))
  };

  const deleteBeer = (id) =>
    getToken().then((token) =>
      fetch(`/api/beer/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },

      }))

  return (
    <BeerContext.Provider value={{
      beer, beers, getAllBeers, getAllBeersFromBrewery, getById, addBeer, updateBeer, deleteBeer, setBeer, getAllBeersByUser
    }}>
      {props.children}
    </BeerContext.Provider>
  );

}
