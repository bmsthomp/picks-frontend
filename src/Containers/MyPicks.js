import React from 'react';
import { Table } from 'react-bootstrap';
import Banner from '../Components/Banner';
import { TableStyle } from '../Constants/BootstrapStyles';

export default class MyPicks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // picksData: [
      //   { id: 1, away: 'Bears', home: 'Packers' },
      //   { id: 2, away: 'Falcons', home: 'Eagles' },
      //   { id: 3, away: 'Bengals', home: 'Colts' },
      //   { id: 4, away: 'Bills', home: 'Ravens' },
      // ],
      picksData: [],
      user: 'Erin'
    }
    this.makePick = this.makePick.bind(this);
    this.submitPicks = this.submitPicks.bind(this);
  }

  componentDidMount() {
    // make call to node layer to retrieve picks
    // send in a year + week, get back array of objects for each game
    let picksData = [
      {
        gameId: 1,
        home: 'Packers',
        away: 'Bears',
        winner: '',
        picks: [
          {
            user: 'Erin',
            pick: 'Packers'
          },
          {
            user: 'Brian',
            pick: 'Packers'
          }
        ]
      },
      {
        gameId: 2,
        home: 'Eagles',
        away: 'Falcons',
        winner: '',
        picks: [
          {
            user: 'Erin',
            pick: 'Eagles'
          },
          {
            user: 'Brian',
            pick: 'Falcons'
          }
        ]
      },
    ]
    this.setState({ picksData })
  }

  makePick(id, team) {
    let newPicks = this.state.picksData.slice();

    for (let i = 0; i < newPicks.length; i++){
      if (id === newPicks[i].gameId) {
        for (let j = 0; j < newPicks[i].picks.length; j++){
          if (newPicks[i].picks[j].user === this.state.user) {
            newPicks[i].picks[j].pick = team;
          }
        }
      }
    }

    this.setState({ picksData: newPicks});
  }

  submitPicks() {
    let newPicks = this.state.picksData.slice();
    let picksToSubmit = newPicks.map(matchup => {
      let userIndex = matchup.picks.findIndex(pick => pick.user === this.state.user);
      return(
        {
          gameId: matchup.gameId,
          user: this.state.user,
          pick: matchup.picks[userIndex].pick
        }
      )
    })
    console.log(picksToSubmit);
    // make call to node layer
    window.alert('You submitted your picks!');
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
              {this.state.picksData.map((matchup) => {
                let userIndex = matchup.picks.findIndex(pick => pick.user === this.state.user);
                return (
                  <tr key={matchup.gameId}>
                    <td>
                      <button
                        className={`tdButton ${matchup.picks[userIndex].pick === matchup.away ? 'tdButtonSelected' : ''}`}
                        onClick={() => this.makePick(matchup.gameId, matchup.away)}
                      >
                        {matchup.away}
                      </button>
                    </td>
                    <td>
                      <button
                        className={`tdButton ${matchup.picks[userIndex].pick === matchup.home ? 'tdButtonSelected' : ''}`}
                        onClick={() => this.makePick(matchup.gameId, matchup.home)}
                      >
                        {matchup.home}
                      </button>
                    </td>
                  </tr>
                )})}
            </tbody>
          </Table>
          <button style={{float: 'left'}} onClick={this.submitPicks}>Submit</button>
        </div>
      </React.Fragment>
    );
  }
}
