import React, { Component } from 'react';
import { Button } from './Button';

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
        e.stopPropagation();
        const { content } = this.state;
        if (content.length < 1) {
            return;
        }
        this.props.onSubmit(content);
        e.target.reset();
        this.setState({ content: '' });
    }

    render(): JSX.Element {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input type="text" placeholder="add Todo" onChange={(e) => this.handleContent(e.target.value)}/>
                <Button type="submit" className="add" name="add" />
            </form>
        );
    }
}