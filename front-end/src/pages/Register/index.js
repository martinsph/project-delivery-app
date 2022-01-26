import React from 'react';
import {
  RegisterContent,
  FormRegister,
  LabelRegister,
  Button,
  InputRegister,
} from './styles';

function Register() {
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
          />
        </LabelRegister>
        <LabelRegister htmlFor="email">
          Email
          <InputRegister
            placeholder="seu-email@site.com.brr"
            data-testid="common_register__input-email"
            name="email"
          />
        </LabelRegister>
        <LabelRegister htmlFor="password">
          Senha
          <InputRegister
            placeholder="******"
            data-testid="common_register__input-password"
            name="password"
            type="password"
          />
        </LabelRegister>
        <Button
          type="button"
          data-testid="common_register__button-register"
        >
          CADASTRAR
        </Button>
      </FormRegister>
    </RegisterContent>
  );
}

export default Register;
