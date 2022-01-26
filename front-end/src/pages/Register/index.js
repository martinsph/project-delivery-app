import React, { useState } from 'react';
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

  const handleSubmit = async () => {
    const data = JSON.stringify({ name, email, password });
    const rota = 'register';
    await registerUser(data, rota);
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
          onClick={ handleSubmit }
        >
          Cadastrar
        </Button>
      </FormRegister>
    </RegisterContent>
  );
}

export default Register;
