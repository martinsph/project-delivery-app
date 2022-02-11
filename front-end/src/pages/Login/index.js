import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import registerUser from '../../fetch';
import {
  LoginContainer,
  Form,
  Logo,
} from './styles';

const Page = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > span {
    transform: translateY(220px);
    position: absolute;
    font-weight: bold;
    text-transform: capitalize;
    color: red;
  }
`;

function Login() {
  const [redirectCustomer, setRedirectCustomer] = useState(false);
  const [redirectAdmin, setRedirectAdmin] = useState(false);
  const [redirectSeller, setRedirectSeller] = useState(false);
  const [redirectRegister, setRedirectRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async () => {
    const data = JSON.stringify({ email, password });
    const route = 'login';
    const register = await registerUser(data, route);
    if (register.token) {
      localStorage.setItem('user', JSON.stringify(register));
      if (register.role === 'administrator') {
        return setRedirectAdmin(true);
      }
      if (register.role === 'seller') {
        return setRedirectSeller(true);
      }
      return setRedirectCustomer(true);
    }
    if (register.message) return setErrorMessage(register.message);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')) || { role: '' };
    if (user.role === 'administrator') {
      return setRedirectAdmin(true);
    }
    if (user.role === 'seller') {
      return setRedirectSeller(true);
    }
    if (user.role === 'customer') {
      return setRedirectCustomer(true);
    }
  }, []);
  // Se usuário já estiver logado, redirecioná-lo
  // para sua home page, dependendo do seu role
  // // if (user) return <Navigate to="/customer/products" />;

  const handleRegister = () => {
    setRedirectRegister(true);
  };

  const messageError = (error) => {
    const id = 'common_login__element-invalid-email';
    if (error) {
      return <span data-testid={ id }>{ error }</span>;
    }
  };

  return (
    <Page>
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
              type="password"
              onChange={ ({ target: { value } }) => setPassword(value) }
            />
          </label>
          <button
            type="button"
            data-testid="common_login__button-login"
            disabled={
              !(/.{6,}/.test(password) && /^\w+(\.\w+)*@\w+(\.\w+)+$/.test(email))
            }
            onClick={ () => { handleSubmit(); } }
          >
            Login
          </button>
          { redirectAdmin && <Navigate to="/admin/manage" /> }
          { redirectCustomer && <Navigate to="/customer/products" /> }
          { redirectSeller && <Navigate to="/seller/orders" /> }
          <button
            type="button"
            data-testid="common_login__button-register"
            onClick={ () => { handleRegister(); } }
          >
            Ainda não tenho conta
          </button>
          { redirectRegister && <Navigate to="/register" /> }
        </Form>
      </LoginContainer>
      { messageError(errorMessage) }
    </Page>
  );
}

export default Login;
