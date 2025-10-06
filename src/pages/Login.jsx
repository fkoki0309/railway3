import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const handleNameChange = (e) => { setUsername(e.target.value) };
  const handleEmailChange = (e) => { setEmail(e.target.value) };
  const handlePasswordChange = (e) => { setPassword(e.target.value) };
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  const handleSubmit = (e) => {
    e.preventDefault();

    //TODO: 必須入力チェック
    //Success message 追加
    if (!emailPattern.test(email)) {
      setEmailError('正しいメールアドレスを入力してください');
    }
    if (password.length < 6) {
      setPasswordError('パスワードは6文字以上で入力してください');
    }

    // Handle signup logic here, e.g., send data to the server
    console.log('UserName:', username);
    console.log('Email:', email);
  }

  return (
    <div className="login">
      <input type="text" placeholder="UserName" value={username} onChange={handleNameChange}  />
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange}  />
      <p data-testid="emailErrorMessage" style={{ color: 'red' }}>{emailError}</p>
      <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}  />
      <p data-testid="passwordErrorMessage" style={{ color: 'red' }}>{passwordError} </p>
      <button placeholder='login' onClick={handleSubmit}>Login</button>

    </div>
  );

}

export default Login;