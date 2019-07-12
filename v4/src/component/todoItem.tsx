import React from 'react'
import { Todo } from '../App';
import { Button } from '.';

interface ITodoItem {
    todo: Todo;
    handleChange: (todo: Todo) => void;
    handleRemove: (id: number) => void;
}

export const TodoItem = (props: ITodoItem): JSX.Element => {
    const { todo, handleChange, handleRemove } = props;
    return (
        <li key={ todo.id }>
            <span>{ todo.id }.</span>
            <span>Todo : { todo.content }</span>
            <div className="button-box">
                <Button 
                    className="change" 
                    type="button" 
                    onClick={() => handleChange(todo)} 
                    name={ todo.complete ? '완료' : '미완료' }/>
                <Button 
                    className="remove" 
                    type="button" 
                    name="제거" 
                    onClick={() => handleRemove(todo.id)}/>
            </div>
        </li>
    )
}
