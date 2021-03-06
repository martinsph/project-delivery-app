import React, { useState } from 'react';

import { Form, Button } from './styles';

const AdminForm = () => {
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');

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
    setRole('customer');
  };

  const messageError = (errorMessage) => {
    const id = 'admin_manage__element-invalid-register';
    if (errorMessage) {
      return <span data-testid={ id }>{ errorMessage }</span>;
    }
  };

  const getUserInfo = async (e) => {
    e.preventDefault();
    const authorization = JSON
      .parse(localStorage.getItem('user')).token;
    const payload = { name, email, password, role };
    try {
      const res = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization,
        },
        body: JSON.stringify(payload),
      }).then((response) => response.json());

      clearFields();
      console.log(res);
      if (res.message) {
        setError(res.message);
      }
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
          <option value="customer">Usu??rio</option>
          <option value="seller">Vendedor</option>
        </select>
      </label>
      <Button
        data-testid="admin_manage__button-register"
        onClick={ getUserInfo }
        disabled={
          !(/.{12,}/.test(name)
          && /.{6,}/.test(password)
          && /^\w+(\.\w+)*@\w+(\.\w+)+$/.test(email))
        }
      >
        Cadastrar
      </Button>
      { messageError(error) }
    </Form>
  );
};

export default AdminForm;
