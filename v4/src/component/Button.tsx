import React from 'react';

interface IButton {
    type: 'submit' | 'button' | 'reset' | undefined;
    className: string;
    name: string;
    onClick? : () => void;
}

export const Button = (props: IButton): JSX.Element => {
    const { type, className, name } = props;
    return (
        <button type={type} className={className} onClick={props.onClick}>
            { name }
        </button>
    )
}