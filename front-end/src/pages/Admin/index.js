import React from 'react';
import NavBar from '../../components/NavBar';
import {
  Page,
  Container,
  Form,
  Button,
} from './styles';

const Admin = () => {
  console.log(1);

  return (
    <Page>
      <NavBar userRole="admin" />
      <Container>
        <h2>Cadastrar novo usuário</h2>
        <Form action="#">
          <label htmlFor="name">
            Nome
            <input type="text" />
          </label>
          <label htmlFor="email">
            Email
            <input type="text" />
          </label>
          <label htmlFor="password">
            Senha
            <input type="text" />
          </label>
          <label htmlFor="type">
            Tipo
            <input type="text" />
            {/* <select name="">
              <option value="user">Usuário</option>
              <option value="seller">Vendedor</option>
            </select> */}
          </label>
          <Button>Cadastrar</Button>
        </Form>
      </Container>
    </Page>
  );
};

export default Admin;
