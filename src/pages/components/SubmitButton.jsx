import React from 'react';

const SubmitButton = (props) => {
    return (
        <button onClick={props.onClick}>{props.buttonText}</button>
    );

}

export default SubmitButton;