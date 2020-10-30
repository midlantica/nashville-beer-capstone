import React, { useState, useContext } from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
  FormGroup
} from 'reactstrap';
import { UserProfileContext } from "../providers/UserProfileProvider";
import { Link, useParams, useHistory } from "react-router-dom";
export default function Header() {
  const { id } = useParams();
  const { isLoggedIn, logout } = useContext(UserProfileContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="info" dark expand="md">
        <NavbarBrand tag={RRNavLink} to="/">🍺 Nashville Breweries</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar w100 className="w100" style={{lineHeight: "1", height: "2.8rem"}}>
            {isLoggedIn &&
              <>
                <NavItem className="mx-auto">
                  <FormGroup className="dh-form-search">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control transW-200"
                        placeholder="Search..."
                      />
                    </div>
                  </FormGroup>
                </NavItem>

                <NavItem className="mx-5">

                </NavItem>

                <NavItem className="navbar-right">
                  <NavLink tag={RRNavLink} to="/admin/:id">&#9881;</NavLink>
                </NavItem>

                <NavItem className="navbar-right">
                  <a aria-current="page" className="nav-link"
                    style={{ cursor: "pointer" }} onClick={logout}>Logout</a>
                </NavItem>
              </>
            }
            {!isLoggedIn &&
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/register">Register</NavLink>
                </NavItem>
              </>
            }
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}
