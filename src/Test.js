import React, { Component } from 'react';

class Test extends Component {
  render() {
    return (
      <div>
        <h2>{ this.props.msg }</h2>
      </div>
    )
  }
}

export default Test;