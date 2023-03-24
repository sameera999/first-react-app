import React, { Component } from 'react'

class ClassClick extends Component {
  
    clickHandler(){
        console.log('click class component button');
    }
    render() {
        return (
        <div>
            <button onClick={this.clickHandler}>class Click</button>
        </div>
        )
    }
}

export default ClassClick