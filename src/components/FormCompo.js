import React, { Component } from 'react'

 class FormCompo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            comment: '',
            technology: ''
        }
    }

    usernameChange = event =>{
        this.setState({
            userName: event.target.value
        });
    }
    commentChange = event =>{
        this.setState({
            comment: event.target.value
        });
    }
    technologyChange = event =>{
        this.setState({
            technology: event.target.value
        });
    }
    submitForm = (event) =>{
       alert(`${this.state.userName} - ${this.state.comment} - ${this.state.technology}`);
       event.preventDefault();
    }

    render() {
        return (
        <form onSubmit={this.submitForm}>
            <div>
                <label>User Name</label>
                <input 
                    type='text' 
                    value={this.state.userName} 
                    onChange={this.usernameChange}/>
            </div>
            <div>
                <label>comment</label>
                <textarea 
                    type='text' 
                    value={this.state.comment} 
                    onChange={this.commentChange}>
                </textarea>
            </div>
            <div>
                <label>technology</label>
                <select value={this.state.technology} onChange={this.technologyChange}>
                    <option value="react">React</option>
                    <option value="vue">Vue</option>
                    <option value="angular">Angular</option>
                </select>
            </div>
            <input type="submit" value="Submit" />
        </form>
        )
    }
}

export default FormCompo