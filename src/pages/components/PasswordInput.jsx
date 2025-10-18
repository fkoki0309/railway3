import React from 'react';
const PasswordInput = (props) => {
      return (
            <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" role="textbox" id='password' value={props.value} onChange={props.onChange}  required/>
                  <p role="alert" data-testid="passwordErrorMessage" style={{ color: 'red' }}>{props.passwordError} </p>
            </div>
      )
}

export default PasswordInput;