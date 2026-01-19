import React, { useState } from 'react';
import EmailInput from './components/EmailInput';
import PasswordInput from './components/PasswordInput';
import SubmitButton from './components/SubmitButton';

const Signup = () => {
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
    
    setEmailError('');
    setPasswordError('');

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
      <p>login</p>
      <PasswordInput value={password} onChange={handlePasswordChange} passwordError={passwordError} />
      <SubmitButton buttonText="SignUp" onClick={handleSubmit} />
    </div>
  );

}

export default Signup;