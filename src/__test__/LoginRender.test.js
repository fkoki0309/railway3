import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
  
  // テストケース1: コンポーネントが正しくレンダリングされるか
  test('renders all child components', () => {
    render(<Login />);
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  // テストケース2: 無効なメールアドレスでエラーメッセージが表示されるか
  test('displays email error for invalid email format', () => {
    render(<Login />);
    const emailInput = screen.getByTestId('email-input');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(submitButton);

    expect(screen.getByTestId('email-error')).toHaveTextContent('正しいメールアドレスを入力してください');
  });

  // テストケース3: パスワードが短い場合にエラーメッセージが表示されるか
  test('displays password error for short password', () => {
    render(<Login />);
    const passwordInput = screen.getByTestId('password-input');
    const submitButton = screen.getByTestId('submit-button');
    
    fireEvent.change(passwordInput, { target: { value: 'short' } });
    fireEvent.click(submitButton);

    expect(screen.getByTestId('password-error')).toHaveTextContent('パスワードは6文字以上で入力してください');
  });

  // テストケース4: 両方の入力が無効な場合に両方のエラーメッセージが表示されるか
  test('displays both errors for invalid email and password', () => {
    render(<Login />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(emailInput, { target: { value: 'invalid' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });
    fireEvent.click(submitButton);

    expect(screen.getByTestId('email-error')).toHaveTextContent('正しいメールアドレスを入力してください');
    expect(screen.getByTestId('password-error')).toHaveTextContent('パスワードは6文字以上で入力してください');
  });

  // テストケース5: 有効な入力でエラーメッセージが表示されないか
  test('does not display errors for valid email and password', () => {
    render(<Login />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(emailInput, { target: { value: 'valid@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    expect(screen.queryByTestId('email-error')).not.toBeInTheDocument();
    expect(screen.queryByTestId('password-error')).not.toBeInTheDocument();
  });
});