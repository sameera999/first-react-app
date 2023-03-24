import React, { Component } from 'react'

class EventBing extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'hello'
    }
  }

  clickMe = () => {
    this.setState({
        message: 'how are you ?'
    })
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.clickMe}>Click me</button>
      </div>
    )
  }
}

export default EventBing