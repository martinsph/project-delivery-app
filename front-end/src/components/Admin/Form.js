import React, { useState } from 'react';

import { Form, Button } from './styles';

const AdminForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  const handleChange = (e) => {
    const field = e.target.id;
    const data = e.target.value;
    if (field === 'username') setName(data);
    else if (field === 'email') setEmail(data);
    else if (field === 'password') setPassword(data);
    else if (field === 'role') setRole(data);
  };

  const clearFields = () => {
    setName('');
    setEmail('');
    setPassword('');
    setRole('user');
  };

  const getUserInfo = async (e) => {
    e.preventDefault();
    const payload = { name, email, password, role };
    try {
      await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      clearFields();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form>
      <label htmlFor="name">
        Nome
        <input
          data-testid="admin_manage__input-name"
          value={ name }
          id="username"
          onChange={ handleChange }
          type="text"
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          data-testid="admin_manage__input-email"
          value={ email }
          id="email"
          onChange={ handleChange }
          type="text"
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          data-testid="admin_manage__input-password"
          value={ password }
          id="password"
          onChange={ handleChange }
          type="text"
        />
      </label>
      <label htmlFor="type">
        Tipo
        <select
          data-testid="admin_manage__select-role"
          value={ role }
          id="role"
          onChange={ handleChange }
        >
          <option value="user">Usuário</option>
          <option value="seller">Vendedor</option>
        </select>
      </label>
      <Button
        data-testid="admin_manage__button-register"
        onClick={ getUserInfo }
      >
        Cadastrar
      </Button>
    </Form>
  );
};

export default AdminForm;