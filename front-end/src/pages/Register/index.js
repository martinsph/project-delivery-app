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
  // const [validate, setValidate] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async () => {
    const data = JSON.stringify({ name, email, password });
    const rota = 'register';
    const register = await registerUser(data, rota);
    setValidate(register);
  };
  const handleRedirect = () => {
    setRedirect(true);
  };
  // const handleRedirect = async () => {
  //   if (!validate) return false;
  //   return true;
  // };

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
          />
        </LabelRegister>
        <Button
          type="button"
          data-testid="common_register__button-register"
          onClick={ () => { handleSubmit(); handleRedirect(); } }
          // disabled={ () => handleChange() }
        >
          Cadastrar
        </Button>
        { redirect && <Navigate to="/products" /> }
        <button type="button" onClick={ () => handleChange() }>btn</button>
      </FormRegister>
    </RegisterContent>
  );
}

export default Register;
