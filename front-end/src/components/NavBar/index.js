import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { useState } from 'react/cjs/react.development';

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
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          to="/products"
        >
          Meus Pedidos
        </Link>
      </>
    );
  }
  if (role === 'seller') {
    return (
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to="/products"
      >
        Pedidos
      </Link>
    );
  }

  return (
    <Link
      data-testid="customer_products__element-navbar-link-orders"
      to="/products"
    >
      Gerenciar Usuário
    </Link>
  );
};

const NavbarComponent = ({ userRole }) => {
  const dataUser = JSON.parse(localStorage.getItem('data'));
  const { name: username } = dataUser;
  const [logout, setLogout] = useState(false);

  const handleLogout = () => {
    setLogout(true);
    localStorage.removeItem('data');
  };
  return (
    <Header>
      <nav>{ renderUserType(userRole) }</nav>
      <h3
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { username }
      </h3>

      <button
        type="button"
        onClick={ handleLogout }
      >
        Sair
      </button>
      { logout && <Navigate to="/" /> }
    </Header>
  );
};

export default NavbarComponent;

NavbarComponent.propTypes = {
  userRole: PropTypes.string.isRequired,
};
