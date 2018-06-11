import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './Nav';
import Banner from './Banner';
import Picks from './Picks';
import Leaderboard from './Leaderboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Banner />
          <div className="content">
            <Route path='/' exact component={Picks} />
            <Route path='/leaderboard' exact component={Leaderboard} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
