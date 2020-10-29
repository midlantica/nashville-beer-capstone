import React, { useContext } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Badge, CardHeader
} from 'reactstrap';
import { Link, useHistory } from "react-router-dom";

export default function Beers({ beer }) {
  const sessionUser = JSON.parse(sessionStorage.getItem("userProfile"));
  const defaultImage = 'placeholder.png';
  const history = useHistory();

  if (sessionUser.userTypeId === 1) {
    return (
      <>
        <Card className="dh-card_beer">
          <CardHeader>{beer.title}</CardHeader>
          <div className="pad1 dh-card-wrap">
            <div className="dh-card-background"
              style={{
                backgroundImage: `url(${beer.imageUrl})`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }}
            />
          </div>
          <CardBody>
            <CardText>{beer.address}</CardText>
            <CardText><a href={beer.website}>Link</a></CardText>
            <CardText>Established: {beer.established}</CardText>
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
