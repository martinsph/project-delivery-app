import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import registerUser from '../../fetch';
import {
  LoginContainer,
  Form,
  Logo,
} from './styles';

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
      if (register.role === 'customer') {
        return setRedirectCustomer(true);
      }
      if (register.role === 'seller') {
        return setRedirectSeller(true);
      }
      return setRedirectAdmin(true);
    }
    if (register.message) return setErrorMessage(register.message);
  };

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
      { messageError(errorMessage) }
    </LoginContainer>
  );
}

export default Login;
