import React, { useContext } from "react";
import { BreweryContext } from "../providers/BreweryProvider";
import { Card, CardBody, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";

export default function Brewery({ brewery }) {
  const sessionUser = JSON.parse(sessionStorage.getItem("userProfile"));
  const defaultImage = 'placeholder.png';
  const { updateBrewery } = useContext(BreweryContext);
  const history = useHistory();

  const breweryObj = {
    id: brewery.id,
    title: brewery.title,
    address: brewery.address,
    website: brewery.website,
    imageUrl: brewery.imageUrl,
    established: brewery.established,
    userProfileId: brewery.userProfileId,
  };

  if (sessionUser.userTypeId === 2 && brewery.userProfile.isActive === true) {
    return (
      <>
        <h1>Show me Breweries!!!</h1>
        { breweryObj }
      </>
    );
  }
  else if (sessionUser.userTypeId === 1) {
    return (
      <>
        <h1>else do this</h1>
      </>
    );
  }
  else {
    return null
  }
}
