import React from 'react';
import Banner from '../Components/Banner';

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
