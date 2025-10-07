import React from 'react';

const SubmitButton = (props) => {
    return (
        <button placeholder='login' onClick={props.onClick}>{props.buttonText}</button>
    );

}

export default SubmitButton;