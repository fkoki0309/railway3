import React, { useState } from 'react';
import EmailInput from './components/EmailInput';
import PasswordInput from './components/PasswordInput';
import SubmitButton from './components/SubmitButton';

const Login = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  
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
  }

  return (
    <div className="login">
      <EmailInput value={email} onChange={handleEmailChange} emailError={emailError} />
      <PasswordInput value={password} onChange={handlePasswordChange} passwordError={passwordError} />
      <SubmitButton buttonText="Login" onClick={handleSubmit} />
    </div>
  );

}

export default Login;