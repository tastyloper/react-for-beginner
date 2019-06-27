import React, { Component } from 'react';

export default class AddTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }

    handleContent = (content) => {
        this.setState({content});
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.content);
        e.target.reset();
    }

    render() {
        return (
            <form  onSubmit={(e) => this.handleSubmit(e)}>
                <input type="text" placeholder="add Todo" onChange={(e) => this.handleContent(e.target.value)}/>
                <button className="add" type="submit">
                    add
                </button>
            </form>
        );
    }
}