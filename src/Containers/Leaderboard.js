import React from 'react';
import { Table } from 'react-bootstrap';
import Banner from '../Components/Banner';
import { TableStyle } from '../Constants/BootstrapStyles';

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [ 'Brian', 'Erin', 'Sara', 'Max', 'Lynn', 'Tom', 'Grandma' ],
      allPicks: [
        {
          gameId: 1,
          home: 'Packers',
          away: 'Bears',
          homeScore: 0,
          awayScore: 0,
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
          homeScore: 0,
          awayScore: 0,
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
    }
  }

  componentDidMount() {
    // get all users, set state
    // after state is set, get all picks, create array using users + picks and set state

    let newUsers = this.state.users.slice();
    let scoresByUser = newUsers.map(user => {
      let score = 0;
      this.state.allPicks.forEach(matchup => {
        let index = matchup.picks.findIndex(pick => pick.user === user);
        if ( index >= 0 && matchup.winner === matchup.picks[index].pick ) { score += 1 }
      })
      return (
        {
          user: user,
          score: score
        }
      )
    })

    this.setState({ users: scoresByUser }, () => {
      console.log(this.state.picksByUser);
    })
  }

  render() {
    return (
      <React.Fragment>
        <Banner title="Leaderboard" />
        <div className="content">
          { TableStyle() }
          <Table responsive bsStyle="custom">
            <thead>
              <tr>
                <th>User</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map(user => (
                <tr key={user.user}>
                  <td className="pick">{user.user}</td>
                  <td className="pick">{user.score}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </React.Fragment>
    );
  }
}
