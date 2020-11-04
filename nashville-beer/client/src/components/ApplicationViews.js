import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import { BreweryContext, BreweryProvider } from "../providers/BreweryProvider";
import Login from "./Login";
import Register from "./Register";
import BreweryList from "./BreweryList";
import BreweryBeersList from "./BreweryBeersList";
import Admin from "./Admin";

export default function ApplicationViews() {
  const { isLoggedIn } = useContext(UserProfileContext);

  return (
    <main>
      <Switch>

        <Route path="/" exact>
          {isLoggedIn ? <BreweryList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/admin/" exact>
          {isLoggedIn ? <Admin /> : <Redirect to="/login" />}
        </Route>

        <Route path="/admin/brewery/:id" exact>
          {isLoggedIn ? <Admin /> : <Redirect to="/login" />}
        </Route>

        <Route path="/admin/brewery/new" exact>
          {isLoggedIn ? <Admin /> : <Redirect to="/login" />}
        </Route>

        <Route path="/brewery/:id" exact>
          {isLoggedIn ? <BreweryBeersList /> : <Redirect to="/login" />}
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
