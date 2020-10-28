import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import { BreweryContext, BreweryProvider } from "../providers/BreweryProvider";
import Login from "./Login";
import Register from "./Register";
import BreweryList from "./BreweryList";

export default function ApplicationViews() {
  const { isLoggedIn } = useContext(UserProfileContext, BreweryContext);

  return (
    <main>
      <Switch>

        <Route path="/" exact>
          {isLoggedIn ? <BreweryList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </main>
  );
};
