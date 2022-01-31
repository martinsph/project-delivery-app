import React from 'react';
import NavBar from '../../components/NavBar';
import { Page, Container } from './styles';
import AdminForm from '../../components/Admin/Form';

const Admin = () => (
  <Page>
    <NavBar userRole="admin" />
    <Container>
      <h2>Cadastrar novo usuário</h2>
      <AdminForm />
    </Container>
  </Page>
);

export default Admin;
