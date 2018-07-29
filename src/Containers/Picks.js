import React from 'react';
import { Table } from 'react-bootstrap';
import Banner from '../Components/Banner';
import { TableStyle } from '../Constants/BootstrapStyles';

export default class Picks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [ 'Erin', 'Brian'],
      allPicks: [
        {
          id: 1,
          picks: [
            { user: 'Erin', pick: 'Packers'},
            { user: 'Brian', pick: 'Packers'},
          ],
          winner: 'Packers'
        },
        {
          id: 2,
          picks: [
            { user: 'Erin', pick: 'Eagles'},
            { user: 'Brian', pick: 'Eagles'},
          ],
          winner: 'Eagles'
        },
        {
          id: 3,
          picks: [
            { user: 'Erin', pick: 'Bengals'},
            { user: 'Brian', pick: 'Colts'},
          ],
          winner: 'Bengals'
        },
        {
          id: 4,
          picks: [
            { user: 'Erin', pick: 'Ravens'},
            { user: 'Brian', pick: 'Bills'},
          ],
          winner: 'Bills'
        },
      ],
    }
  }

  render() {
    return (
      <React.Fragment>
        <Banner title="Picks" />
        <div className="content">
          { TableStyle() }
          <Table responsive bsStyle="custom">
            <thead>
              <tr>
                <th>{this.state.users[0]}</th>
                <th>{this.state.users[1]}</th>
              </tr>
            </thead>
            <tbody>
              {this.state.allPicks.map((matchup) => (
                <tr key={matchup.id}>
                  <td className="pick">{matchup.picks[0].pick}</td>
                  <td className="pick">{matchup.picks[1].pick}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </React.Fragment>
    );
  }
}
