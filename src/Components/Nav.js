import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { NavbarStyle } from '../Constants/BootstrapStyles';

export default class Navi extends React.Component {

  render() {

    return (
      <React.Fragment>
        { NavbarStyle() }
        <Navbar bsStyle="custom" collapseOnSelect>
          <Navbar.Header><Navbar.Toggle/></Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem bsStyle="custom"><NavLink activeStyle={{ fontWeight: "bold" }} to="/" exact>All Picks</NavLink></NavItem>
              <NavItem bsStyle="custom"><NavLink activeStyle={{ fontWeight: "bold" }} to="/mypicks" exact>My Picks</NavLink></NavItem>
              <NavItem bsStyle="custom"><NavLink activeStyle={{ fontWeight: "bold" }} to="/leaderboard">Leaderboard</NavLink></NavItem>
              <NavItem bsStyle="custom"><NavLink activeStyle={{ fontWeight: "bold" }} to="/logout">Logout</NavLink></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}
