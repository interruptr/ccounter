import React from 'react';

export const green = {
    background: "green",
    color: "white"
};

export const red = {
    background: "red",
    color: "white"
};

const Button = (props) => (
    <button className="pure-button" style={ props.color } onClick={ props.onClick }>
        { props.children }
    </button>
);

export default Button;