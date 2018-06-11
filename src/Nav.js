import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {

  render() {

    return (
      <ul>
        <li><Link to="/">Picks</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    );
  }
}
