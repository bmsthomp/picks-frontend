import React from 'react';
import Banner from '../Components/Banner';

export default class Picks extends React.Component {

  render() {

    return (
      <React.Fragment>
        <Banner title="Picks" />
        <div className="content">
        <table>
          <tr>
            <th>Away</th>
            <th>Home</th>
          </tr>
          <tr>
            <td>stuff</td>
            <td>stuff 2</td>
          </tr>
        </table>
        </div>
      </React.Fragment>
    );
  }
}