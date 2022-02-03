import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './styles';

const renderUserType = (role) => {
  if (role === 'customer') {
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
  const dataUser = JSON.parse(localStorage.getItem('user'));
  const { name: username } = dataUser;
  /* const [logout, setLogout] = useState(false); */
  const navigate = useNavigate();

  const handleLogout = () => {
    /* setLogout(true); */
    localStorage.removeItem('user');
    navigate('/');
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
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </button>
    </Header>
  );
};

export default NavbarComponent;

NavbarComponent.propTypes = {
  userRole: PropTypes.string.isRequired,
};
