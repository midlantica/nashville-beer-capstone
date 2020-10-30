import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const BreweryContext = React.createContext();

export const BreweryProvider = (props) => {
  const apiUrl = "/api/brewery";
  const { getToken } = useContext(UserProfileContext);

  const [breweries, setBreweries] = useState([]);
  const [brewery, setBrewery] = useState({});

  const getAllBreweries = () => {
    getToken().then((token) =>
      fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(resp => resp.json())
        .then(setBreweries));
  };

  const getAllBreweryBeers = (id) => {
    return getToken().then((token) =>
      fetch(`/api/brewery/beer/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((resp) => resp.json())
        .then(setBreweries));
  }

    const getAllBreweriesByUser = (id) => {
    return getToken().then((token) =>
      fetch(`/api/brewery/beer/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((resp) => resp.json())
        .then(setBreweries));
  }

  const getBreweryById = (id) => {
    getToken().then((token) =>
      fetch(`/api/brewery/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })).then((resp) => resp.json())
      .then(setBrewery);
  };

  const addBrewery = (brewery) => {
    return getToken().then((token) =>
      fetch("/api/brewery", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(brewery)
      }).then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        throw new Error("Unauthorized");
      }))
  };

  const updateBrewery = (id, brewery) => {
    return getToken().then((token) =>
      fetch(`/api/brewery/edit/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(brewery)
      }))
  };

  const deleteBrewery = (id) =>
    getToken().then((token) =>
      fetch(`/api/brewery/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },

      }))

  return (
    <BreweryContext.Provider value={{
      brewery, breweries, getAllBreweries, getAllBreweryBeers, getBreweryById, addBrewery, updateBrewery, deleteBrewery, setBrewery, getAllBreweriesByUser
    }}>
      {props.children}
    </BreweryContext.Provider>
  );

}
