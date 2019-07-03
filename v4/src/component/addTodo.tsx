import React, { Component } from 'react';

interface IProps {
    onChange: (text: string) => void;
    onSubmit: () => void;
}
export default class AddTodo extends Component<IProps> {
    
    handleSubmit = (e: any): void => {
        e.preventDefault();
        e.stopPropagation();
        this.props.onSubmit();
        e.target.reset();
    }

    render(): JSX.Element {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input type="text" placeholder="add Todo" onChange={(e) => this.props.onChange(e.target.value)}/>
                <button className="add" type="submit">
                    add
                </button>
            </form>
        );
    }
}