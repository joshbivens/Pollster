import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './Test.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'This is state.',
      msg2: 'Allo allo! These are props!'
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          { this.state.msg }
        </p>
        <TestComponent msg={ this.state.msg2 }></TestComponent>
      </div>
    );
  }
}

export default App;
