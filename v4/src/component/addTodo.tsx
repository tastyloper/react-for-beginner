import React from 'react';
import { Button } from '.';

interface IProps {
    onChange: (text: string) => void;
    onSubmit: (e: React.FormEvent) => void;
}

export const AddTodo = (props: IProps): JSX.Element => {
    return (
        <form onSubmit={(e: React.FormEvent) => props.onSubmit(e)}>
            <input type="text" placeholder="add Todo" onChange={(e) => props.onChange(e.target.value)}/>
            <Button type="submit" className="add" name="add" />
        </form>
    )
}