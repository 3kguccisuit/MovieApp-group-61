import React, { Component, useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { UserAuth } from '../Context/authContext';
import { updateModelfromFirebase } from '../updateDatabase';

export const NavMenu = (props) => {
  const { user, logout } = UserAuth();
  const [collapsed, setCollapsed] = useState(true);

  updateModelfromFirebase(user, props.model);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  }

      const handleLogout = async () => {
        try {
            await logout();
            console.log("You are logged out")
        } catch (e) {
            console.log(e);
        }
    }

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
        <NavbarBrand tag={Link} to="/">Movie App</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
          <ul className="navbar-nav flex-grow">
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
            </NavItem>
            {user ?
              <>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/Watchlist">Watchlist</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} onClick={handleLogout} className="text-dark" to="/">Log Out</NavLink>
                </NavItem>
              </> :
              <>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/Register">Register</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/LogIn">Log in</NavLink>
                </NavItem>
              </>
            }
          </ul>
        </Collapse>
      </Navbar>
    </header>
  );

}