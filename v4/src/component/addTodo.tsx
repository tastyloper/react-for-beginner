import React from 'react';

interface IProps {
    onChange: (text: string) => void;
    onSubmit: (e: React.FormEvent) => void;
}

export const AddTodo = (props: IProps): JSX.Element => {
    return (
        <form onSubmit={(e: React.FormEvent) => props.onSubmit(e)}>
            <input type="text" placeholder="add Todo" onChange={(e) => props.onChange(e.target.value)}/>
            <button className="add" type="submit">
                add
            </button>
        </form>
    )
}