import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  background-color: #036B52;
  color: white;

  & nav {
    display: flex;
    gap: 10px;
    margin-right: auto;
  };

  & nav ~ a {
    background: #056CF9;
  }

  & h3 {
    display: flex;
    align-items: center;
    background-color: #421981;
    padding: 16px;
  };

  & a {
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 20px;
    &:hover {
    background-color: #ffffff50;
  }
`;
const renderUserType = (role) => {
  if (role === 'user') {
    return (
      <>
        <Link to="/products">Produtos</Link>
        <Link to="/products">Meus Pedidos</Link>
      </>
    );
  }
  if (role === 'seller') {
    return <Link to="/products">Pedidos</Link>;
  }

  return <Link to="/products">Gerenciar Usuários</Link>;
};

const NavbarComponent = () => {
  console.log(NavbarComponent);
  return (
    <Header className="navbar">
      <nav>
        {
          renderUserType('user')
        }
      </nav>
      <h3>Usuario</h3>
      <Link to="/products"> Sair</Link>
    </Header>
  );
};

export default NavbarComponent;
