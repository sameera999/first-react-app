import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment(){
        this.setState(preState =>({
            count: preState.count + 1
        }),() => {console.log(this.state.count)})
    }

    fiveIncrement(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={() => this.fiveIncrement()}>Subscribe</button>
            </div>            
        )
    }
}

export default Counter