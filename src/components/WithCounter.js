import React, { Component } from 'react'

const updateWithCounter = (OriginalComponent, incrementCount) =>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }  
        
          incrementCount = () =>{
            this.setState(prevState => {       
                return{
                    count: prevState.count + incrementCount
                }
            })
            console.log(this.state.count);
          }

        render(){
            return <OriginalComponent 
                        count={this.state.count} 
                        incrementCount = {this.incrementCount}
                        {...this.props}
                        />
        }
    }

    return NewComponent
}

export default updateWithCounter