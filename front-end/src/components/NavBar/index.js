import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './styles';

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
  console.log('');
  return (
    <Header>
      <nav>{ renderUserType(userRole) }</nav>
      <h3
        data-testid="customer_products__element-navbar-user-full-name"
      >
        Usuario
      </h3>
      <Link
        data-testid=""
        to="/products"
      >
        Sair
      </Link>
    </Header>
  );
};

export default NavbarComponent;

NavbarComponent.propTypes = {
  userRole: PropTypes.string.isRequired,
};
