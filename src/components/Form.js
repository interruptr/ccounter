import React from 'react';

const Form = (props) => (
    <form action={props.action} className="pure-form">
        { props.children }
    </form>
);

export default Form;