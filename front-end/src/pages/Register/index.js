import React from 'react';
import styled from 'styled-components';

const RegisterContent = styled.div`
  width: 400px; 
  height: 150px;
  left: 50%; 
  margin: -130px 0 0 -210px; 
  padding: 10px;
  position: absolute;
  top: 20%;
  display: flex;
  justify-content: center;
  
  h2 {
    display: flex;
    justify-content: center;
  }
`;
const FormRegister = styled.form`
  background-color: #D3D3D3;
  padding: 30px;
  position: absolute;
  top: 50%;
  width: 50%;
  `;
const LabelRegister = styled.label`
  margin: 15px;
  `;

const Button = styled.button`
  padding: 5px 25px;
  background-color: #008f39;
  border: black;
  color: white;
  display: flex;
  justify-content: center;
`;

const InputRegister = styled.input`
  display: flex;
  display: 
  width: 100%;
  padding: 10px;
  margin: 10px
`;

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
