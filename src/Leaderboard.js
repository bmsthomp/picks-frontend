import React from 'react';
import ReactDOM from 'react-dom';

import Banner from './Banner';

export default class Leaderboard extends React.Component {

  render() {

    return (
      <React.Fragment>
        <Banner title="Picks" />
        <div className="content">
          <table>
          leaderboard
          </table>
        </div>
      </React.Fragment>
    );
  }
}
