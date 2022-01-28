import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import registerUser from '../../fetch';
import {
  RegisterContent,
  FormRegister,
  LabelRegister,
  Button,
  InputRegister,
} from './styles';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async () => {
    const data = JSON.stringify({ name, email, password });
    const rota = 'register';
    const register = await registerUser(data, rota);
    if (register.token) return setRedirect(true);
    if (register.message) return setErrorMessage(register.message);
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
    <RegisterContent>
      <h2>Cadastro</h2>
      <FormRegister>
        <LabelRegister htmlFor="name">
          Nome
          <InputRegister
            placeholder="Seu nome"
            data-testid="common_register__input-name"
            name="name"
            onChange={ ({ target: { value } }) => setName(value) }
          />
        </LabelRegister>
        <LabelRegister htmlFor="email">
          Email
          <InputRegister
            placeholder="seu-email@site.com.brr"
            data-testid="common_register__input-email"
            name="email"
            onChange={ ({ target: { value } }) => setEmail(value) }
            type="email"
          />
        </LabelRegister>
        <LabelRegister htmlFor="password">
          Senha
          <InputRegister
            placeholder="******"
            data-testid="common_register__input-password"
            name="password"
            onChange={ ({ target: { value } }) => setPassword(value) }
            type="password"
            minLength="6"
          />
        </LabelRegister>
        <Button
          type="button"
          data-testid="common_register__button-register"
          disabled={
            !(/.{12,}/.test(name)
            && /.{6,}/.test(password)
            && /^\w+@\w+\.com$/.test(email))
          }
          onClick={ () => { handleSubmit(); } }
        >
          Cadastrar
        </Button>
        { redirect && <Navigate to="/products" /> }
      </FormRegister>
      { messageError(errorMessage) }
    </RegisterContent>
  );
}

export default Register;
