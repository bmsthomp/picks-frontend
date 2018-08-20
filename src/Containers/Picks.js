import React from 'react';
import { DropdownButton, MenuItem, Table } from 'react-bootstrap';
import Banner from '../Components/Banner';
import { TableStyle } from '../Constants/BootstrapStyles';

export default class Picks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [ 'Brian', 'Erin', 'Sara', 'Max', 'Lynn', 'Tom', 'Grandma' ],
      allPicks: [
        {
          gameId: 1,
          week: 1,
          year: 2018,
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
          week: 1,
          year: 2018,
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
      ],
      picksByUser: [],
      week: '',
      year: ''
    }
    this.selectWeek = this.selectWeek.bind(this);
    this.selectYear = this.selectYear.bind(this);
  }

  componentDidMount() {
    // get all users, set state
    // after state is set, get all picks, create array using users + picks and set state

    let newUsers = this.state.users.slice();
    let picksByUser = newUsers.map(user => {
      let picks = this.state.allPicks.map(matchup => {
        let index = matchup.picks.findIndex(pick => pick.user === user);
        return (
          {
            gameId: matchup.gameId,
            pick: index >= 0 ? matchup.picks[index].pick : '-'
          }
        )
      })

      return (
        {
          user: user,
          picks: picks
        }
      )
    })

    this.setState({ picksByUser }, () => {
      console.log(this.state.picksByUser);
    })
  }

  selectWeek(eventKey) {
    console.log(eventKey);
    this.setState({ week: eventKey })
  }

  selectYear(eventKey) {
    console.log(eventKey);
    this.setState({ year: eventKey })
  }

  render() {
    let weeks = [];
    this.state.allPicks.forEach(matchup => {
      if ( weeks.findIndex(week => week === matchup.week) === -1) { weeks.push(matchup.week) }
    })
    weeks.sort();
    let years = [];
    this.state.allPicks.forEach(matchup => {
      if ( years.findIndex(year => year === matchup.year) === -1) { years.push(matchup.year) }
    })
    years.sort();
    return (
      <React.Fragment>
        <Banner title='Picks' />
        <div className='content'>
          <div class='dropdown-container'>
            <DropdownButton className='dropdownbutton' title={`Week ${this.state.week}`}>
              {weeks.map(week => <MenuItem eventKey={week} value={week} onSelect={ (eventKey, event) => this.selectWeek(eventKey) }>Week {week}</MenuItem>)}
            </DropdownButton>
            <DropdownButton className='dropdownbutton' title={`Year ${this.state.year}`}>
              {years.map(year => <MenuItem eventKey={year} value={year} onSelect={ (eventKey, event) => this.selectYear(eventKey) }>{year}</MenuItem>)}
            </DropdownButton>
          </div>
          { TableStyle() }
          <Table responsive bsStyle='custom'>
            <thead>
              <tr>
                <th>Away</th>
                <th></th>
                <th>Home</th>
                <th></th>
                {this.state.picksByUser.map(userObj => <th>{userObj.user}</th>)}
              </tr>
            </thead>
            <tbody>
              {this.state.allPicks.map(matchup => (
                <tr key={matchup.gameId}>
                  <td className='pick'>{matchup.away}</td>
                  <td className='pick score'>{matchup.awayScore}</td>
                  <td className='pick'>{matchup.home}</td>
                  <td className='pick score'>{matchup.homeScore}</td>
                  {this.state.picksByUser.map(userObj => {
                    let index = userObj.picks.findIndex(pick => pick.gameId === matchup.gameId);
                    return (
                      <td className={`pick ${matchup.winner === userObj.picks[index].pick ? 'winner' : ''}`}>
                        {userObj.picks[index].pick}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </React.Fragment>
    );
  }
}
