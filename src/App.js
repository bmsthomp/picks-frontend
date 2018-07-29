import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './Components/Nav';
import Picks from './Containers/Picks';
import Leaderboard from './Containers/Leaderboard';
import NoMatch from './Containers/NoMatch';
import MyPicks from './Containers/MyPicks';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <div>
            <Switch>
              <Route path='/' exact component={Picks} />
              <Route path='/mypicks' exact component={MyPicks} />
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
