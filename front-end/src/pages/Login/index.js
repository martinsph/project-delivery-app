import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
  LoginContainer,
  Form,
  Logo,
} from './styles';

function Login() {
  const [redirect, _setRedirect] = useState(false);

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
          />
        </label>
        <label htmlFor="passwor">
          Senha
          <br />
          <input
            placeholder="password"
            data-testid="common_login__input-password"
            name="password"
          />
        </label>
        <button type="button" data-testid="common_login__button-login">Login</button>
        <button
          type="button"
          data-testid="common_login__button-register"
          disabled={ () => {} }
          onClick={ () => {} }
        >
          Ainda não tenho conta
        </button>
        { redirect && <Navigate to="/customer/products" /> }
      </Form>
    </LoginContainer>
  );
}

export default Login;
