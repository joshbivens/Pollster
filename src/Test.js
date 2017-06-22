import React, { Component } from 'react';
import './App.css';

class Test extends Component {
  render() {
    return (
      <div className="red">
        <p>{ this.props.msg }</p>
      </div>
    )
  }
}

export default Test;