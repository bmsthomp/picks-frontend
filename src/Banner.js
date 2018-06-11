import React from 'react';
import ReactDOM from 'react-dom';

export default class Banner extends React.Component {

  render() {

    return (
      <header className="App-header">
        <h1 className="App-title">{this.props.title}</h1>
      </header>
    );
  }
}
