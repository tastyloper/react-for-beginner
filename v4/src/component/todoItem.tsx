import React from 'react'
import { Todo } from '../App';

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
                <button className="change" type="button" onClick={() => handleChange(todo)}>
                    { todo.complete ? '완료' : '미완료' }
                </button>
                <button className="remove" type="button" onClick={() => handleRemove(todo.id)}>
                    제거
                </button>
            </div>
        </li>
    )
}
