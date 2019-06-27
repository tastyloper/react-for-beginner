import React, { Component } from 'react';

interface IAddTodo {
    onSubmit: (content: string) => void;
}

export default class AddTodo extends Component<IAddTodo> {
    state: { content: '' };

    constructor(props: IAddTodo) {
        super(props);
        this.state = {
            content: ''
        }
    }

    handleContent = (content: string): void => {
        this.setState({content});
    }
    
    handleSubmit = (e: any): void => {
        e.preventDefault();
        this.props.onSubmit(this.state.content);
        e.target.reset();
    }

    render(): JSX.Element {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input type="text" placeholder="add Todo" onChange={(e) => this.handleContent(e.target.value)}/>
                <button className="add" type="submit">add</button>
            </form>
        );
    }
}