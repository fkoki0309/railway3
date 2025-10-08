import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../pages/Login';

// 子コンポーネントをモック化
jest.mock('../pages/components/EmailInput', () => {
  return () => <div data-testid="email-input" />;
});
jest.mock('../pages/components/PasswordInput', () => {
  return () => <div data-testid="password-input" />;
});
jest.mock('../pages/components/SubmitButton', () => {
  return () => <div data-testid="submit-button" />;
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