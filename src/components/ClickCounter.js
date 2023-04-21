import React, { Component } from 'react'
import updateWithCounter from './WithCounter'

class ClickCounter extends Component { 

  render() {
    const {count, incrementCount} = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Clciked me {count} times</button>
      </div>
    )
  }
}

export default updateWithCounter(ClickCounter)