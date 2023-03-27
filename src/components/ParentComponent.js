import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
import FormCompo from './FormCompo'


class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'first message'
      }

      this.showMsgParent = this.showMsgParent.bind(this)
    }

  showMsgParent (name){
    alert(`child name is ${name}`);
  }

  render() {
    return (
      <div>        
        <FormCompo/>
        {/* <ChildComponent showMsgParent={this.showMsgParent}/> */}
      </div>
      
    )
  }
}

export default ParentComponent