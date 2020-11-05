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
          <Nav navbar className="w100 justify-content-end" style={{lineHeight: "1", height: "2.8rem"}}>
            {isLoggedIn &&
              <>
                {/* <div className="ml-auto"> */}
                  <NavItem className="navbar-right">
                    <NavLink tag={RRNavLink} to={`/admin/`}>&#9881;</NavLink>
                  </NavItem>

                  <NavItem className="">
                    <a aria-current="page" className="nav-link"
                      style={{ cursor: "pointer" }} onClick={logout}>Logout</a>
                  </NavItem>
                {/* </div> */}
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
