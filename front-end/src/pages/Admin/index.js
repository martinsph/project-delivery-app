import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import {
  Page,
  Container,
  Form,
  Button,
} from './styles';

/* eslint-disable */

const Admin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  const handleChange = (e) => {
    const field = e.target.id;
    if (field === 'username') setName(e.target.value);
    if (field === 'email') setEmail(e.target.value);
    if (field === 'password') setPassword(e.target.value);
    if (field === 'role') setRole(e.target.value);
  }

  const getUserInfo = async () => {
    const payload = { name, email, password, role };
    await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
  }

  return (
    <Page>
      <NavBar userRole="admin" />
      <Container>
        <h2>Cadastrar novo usuário</h2>
        <Form>
          <label htmlFor="name">
            Nome
            <input value={ name } id="username" onChange={ handleChange } type="text" />
          </label>
          <label htmlFor="email">
            Email
            <input value={ email } id="email" onChange={ handleChange } type="text" />
          </label>
          <label htmlFor="password">
            Senha
            <input value={ password } id="password" onChange={ handleChange } type="text" />
          </label>
          <label htmlFor="type">
            Tipo
            <select value={ role } id="role" onChange={ handleChange } name="">
              <option value="user">Usuário</option>
              <option value="seller">Vendedor</option>
            </select>
          </label>
          <Button onClick={ getUserInfo }>Cadastrar</Button>
        </Form>
      </Container>
    </Page>
  );
};

export default Admin;
