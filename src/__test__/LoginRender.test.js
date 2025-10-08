import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../pages/Login';

// 子コンポーネントをモック化
jest.mock('../pages/components/EmailInput', () => {
  return ({ value, onChange, emailError }) => (
    <div>
      <input
        data-testid="email-input"
        value={value}
        onChange={onChange}
      />
      {emailError && <p data-testid="email-error">{emailError}</p>}
    </div>
  );
});

jest.mock('../pages/components/PasswordInput', () => {
  return ({ value, onChange, passwordError }) => (
    <div>
      <input
        data-testid="password-input"
        value={value}
        onChange={onChange}
      />
      {passwordError && <p data-testid="password-error">{passwordError}</p>}
    </div>
  );
});

jest.mock('../pages/components/SubmitButton', () => {
  return ({ buttonText, onClick }) => (
    <button data-testid="submit-button" onClick={onClick}>
      {buttonText}
    </button>
  );
});


describe('Login Component', () => {
  //コンポーネントが正しくレンダリングされるか
  test('renders all child components', () => {
    render(<Login />);
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });
});