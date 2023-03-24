import React, { Component } from 'react'

function ChildComponent(props){
    // console.log(props);
    return(
        <div>
            <button onClick={() => props.showMsgParent('bomji')}>Click me </button>
        </div>
    )
}

export default ChildComponent