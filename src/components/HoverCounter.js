import React, { Component } from 'react'
import updateWithCounter from './WithCounter'

class HoverCounter extends Component {
    
  render() {
    const {count, incrementCount} = this.props;
    return (
      <h2 onMouseOver={incrementCount}>Hoverd {count} times</h2>
    )
  }
}

export default updateWithCounter(HoverCounter, 10)