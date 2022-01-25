import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Todo: separar componentes e estilos
// Obs: Estão aqui apenas para feedback visual
const LoginContainer = styled.div`
  display: flex;
  background: snow;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin: auto;
  padding: 24px 28px;
  width: max-content;
  border: 1px solid;
  border-radius: 4px;
  // animation: float 2s infinite alternate;
`;

const Form = styled.form`
  align-items: center;
  display: flex;
  border-radius: 4px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: max-content;
  gap: 12px;
  
  & input {
    width: 220px;
    padding: 6px;
    border: 1px solid #bbb;
    border-radius: 3px;
  }

  & button {
    align-self: stretch;
    padding: 6px;
    border-radius: 3px;
    border: 1px solid #bbb;
    text-transform: uppercase;
    box-shadow: 0 4px 6px -4px;
    font-weight: bold;
    transition: 100ms;

    &:active {
      box-shadow: 0 0 0 0;
      transform: scale(.99);
    }
  }

  & a {
    font-size: .85rem;
  }

  @keyframes float {
    to {
      transform: translateY(-20px);
    }
  }
`;

const Logo = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  filter: drop-shadow(0 0 1px);
  // border-radius: 50%;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background:
      radial-gradient(circle 8px at 70% 30%, black 50%, transparent 55%),
      linear-gradient(yellow 50%, transparent 0);
    border-radius: 50%;
    transform: rotate(-40deg);
  }

  &:after {
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    transform: rotate(40deg);
    background: linear-gradient(transparent 50%, yellow 0);
  }

  &:after, &:before {
    animation: eat 160ms infinite alternate;
  }

  @keyframes eat {
    to {
      transform: rotate(0);
    }
  }
`;

function Login() {
  return (
    <LoginContainer>
      <Logo />
      {/* <img src="" alt="" /> */}
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
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </Link>
      </Form>
    </LoginContainer>
  );
}

export default Login;
