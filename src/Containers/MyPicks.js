import React from 'react';
import { Table } from 'react-bootstrap';
import Banner from '../Components/Banner';
import { TableStyle } from '../Constants/BootstrapStyles';

export default class MyPicks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myPicks: [
        { id: 1, away: 'Bears', home: 'Packers' },
        { id: 2, away: 'Falcons', home: 'Eagles' },
        { id: 3, away: 'Bengals', home: 'Colts' },
        { id: 4, away: 'Bills', home: 'Ravens' },
      ],
      working: true,
    }
    this.makePick = this.makePick.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  makePick(id, team) {
    let newPicks = this.state.myPicks.slice();

    for (let i = 0; i < newPicks.length; i++){
      if (id === newPicks[i].id) {
        newPicks[i].selected = team;
      }
    }

    this.setState({ myPicks: newPicks});
  }

  changeState() {
    this.setState({ working: !this.state.working });
  }

  render() {
    return (
      <React.Fragment>
        <Banner title="My Picks" />
        <div className="content">
          { TableStyle() }
          <Table responsive bsStyle="custom">
            <thead>
              <tr>
                <th>Away</th>
                <th>Home</th>
              </tr>
            </thead>
            <tbody>
              {this.state.myPicks.map((matchup) => (
                <tr key={matchup.id}>
                  <td>
                    <button
                      className={`tdButton ${matchup.selected === matchup.away ? 'tdButtonSelected' : ''}`}
                      onClick={() => this.makePick(matchup.id, matchup.away)}
                    >
                      {matchup.away}
                    </button>
                  </td>
                  <td>
                    <button
                      className={`tdButton ${matchup.selected === matchup.home ? 'tdButtonSelected' : ''}`}
                      onClick={() => this.makePick(matchup.id, matchup.home)}
                    >
                      {matchup.home}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </React.Fragment>
    );
  }
}
