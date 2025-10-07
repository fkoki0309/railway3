import React from 'react';
const PasswordInput = (props) => {
      return (
            <div>
                  <input type="password" placeholder="Password" value={props.value} onChange={props.onChange}  required/>
                  <p data-testid="passwordErrorMessage" style={{ color: 'red' }}>{props.passwordError} </p>
            </div>
      )
}

export default PasswordInput;