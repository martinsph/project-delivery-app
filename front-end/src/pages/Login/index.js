import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  LoginContainer,
  Form,
  Logo,
} from './styles';

function Login() {
  useEffect(() => {
    const fetchData = async (endpoint) => {
      const data = await axios.get(endpoint);
      return data;
    };

    console.log(fetchData);
  }, []);

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

        <Link
          to="/register"
        >
          <button
            type="button"
            data-testid="common_login__button-register"
          >
            Ainda não tenho conta
          </button>
        </Link>
      </Form>
    </LoginContainer>
  );
}

export default Login;
