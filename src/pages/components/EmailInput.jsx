import React from 'react';
const EmailInput = (props) => {
    return(
        <div>
            <input type="email" value={props.value} onChange={props.onChange} placeholder="Email" required/>
            <p data-testid="emailErrorMessage" style={{ color: 'red' }}>{props.emailError}</p>
        </div>
    )
}
export default EmailInput;