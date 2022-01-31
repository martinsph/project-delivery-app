import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import registerUser from '../../fetch';
import {
  LoginContainer,
  Form,
  Logo,
} from './styles';

function Login() {
  const [redirectLogin, setRedirectLogin] = useState(false);
  const [redirectRegister, setRedirectRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const data = JSON.stringify({ email, password });
    const route = 'login';
    const register = await registerUser(data, route);
    if (register.token) return setRedirectLogin(true);
    if (register.message) return setErrorMessage(register.message);
  };

  const handleRegister = () => {
    setRedirectRegister(true);
  };

  const messageError = (error) => {
    if (error) {
      return (
        <span
          data-testid="common_register__element-invalid_register"
        >
          { error }
        </span>
      );
    }
  };

  return (
    <LoginContainer>
      <Logo />
      <h2>Nice app</h2>
      <Form>
        <label htmlFor="email">
          Login
          <br />
          <input
            placeholder="email"
            data-testid="common_login__input-email"
            name="email"
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </label>
        <label htmlFor="passwor">
          Senha
          <br />
          <input
            placeholder="password"
            data-testid="common_login__input-password"
            name="password"
            onChange={ ({ target: { value } }) => setPassword(value) }
          />
        </label>
        <button
          type="button"
          data-testid="common_login__button-login"
          onClick={ () => { handleSubmit(); } }
        >
          Login
        </button>
        { redirectLogin && <Navigate to="/products" /> }

        <button
          type="button"
          data-testid="common_login__button-register"
          // disabled={ () => {} }
          onClick={ () => { handleRegister(); } }
        >
          Ainda não tenho conta
        </button>
        { redirectRegister && <Navigate to="/register" /> }

      </Form>
      { messageError(errorMessage) }
    </LoginContainer>
  );
}

export default Login;
