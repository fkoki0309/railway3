import React, { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const handleNameChange = (e) => { setUsername(e.target.value) };
  const handleEmailChange = (e) => { setEmail(e.target.value) };
  const handlePasswordChange = (e) => { setPassword(e.target.value) };
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailPattern.test(email)) {
      setEmailError('正しいメールアドレスを入力してください');
    }
  }

  return (
    <div className="signUp">
      <input type="text" placeholder="UserName" value={username} onChange={handleNameChange} />
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
      <p placeholder="errorMessage" style={{ color: 'red' }}>{emailError}</p>
      <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      <button placeholder='signUp' onClick={handleSubmit}>Sign Up</button>
    </div>
  );

}

export default SignUp;