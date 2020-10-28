import React, { useContext } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Badge, CardHeader
} from 'reactstrap';
import { Link, useHistory } from "react-router-dom";

export default function Brewery({ brewery }) {
  const sessionUser = JSON.parse(sessionStorage.getItem("userProfile"));
  const defaultImage = 'placeholder.png';
  const history = useHistory();

  if (sessionUser.userTypeId === 1) {
    return (
      <>
        <Card className="dh-card_brewery">
          <CardHeader>{brewery.title}</CardHeader>
          <div className="pad1 dh-card-wrap">
            <div className="dh-card-background"
              style={{
                backgroundImage: `url(${brewery.imageUrl})`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }}
            />
          </div>
          <CardBody>
            <CardText>{brewery.address}</CardText>
            <CardText><a href={brewery.website}>Link</a></CardText>
            <CardText>Established: {brewery.established}</CardText>
            {/* <Button>Button</Button> */}
          </CardBody>
        </Card>
      </>
    );
  }
  else if (sessionUser.userTypeId === 2) {
    return (
      <>
        <p>else do this</p>
        <img src={defaultImage} alt="placeholder image" />
      </>
    );
  }
   else {
    return null
  }
}
