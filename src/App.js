import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Picks from './Picks';
import Leaderboard from './Leaderboard';
import NoMatch from './NoMatch';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <div>
            <Switch>
              <Route path='/' exact component={Picks} />
              <Route path='/leaderboard' exact component={Leaderboard} />
              <Route exact component={NoMatch} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
