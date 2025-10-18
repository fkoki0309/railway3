import React from 'react';
const EmailInput = (props) => {
    return(
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" role="textbox" value={props.value} onChange={props.onChange} placeholder='Email'  required/>
            <p role="alert" data-testid="emailErrorMessage" style={{ color: 'red' }}>{props.emailError}</p>
        </div>
    )
}
export default EmailInput;