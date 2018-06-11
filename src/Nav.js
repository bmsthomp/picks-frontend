import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem  } from 'react-bootstrap';

export default class Navi extends React.Component {

  render() {

    return (
      <Navbar>
        <Nav pullRight>
          <NavItem><NavLink activeStyle={{ fontWeight: "bold" }} to="/" exact>Picks</NavLink></NavItem>
          <NavItem><NavLink activeStyle={{ fontWeight: "bold" }} to="/leaderboard">Leaderboard</NavLink></NavItem>
          <NavItem><NavLink activeStyle={{ fontWeight: "bold" }} to="/logout">Logout</NavLink></NavItem>
        </Nav>
      </Navbar>
    );
  }
}
