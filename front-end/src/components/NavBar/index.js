import React from 'react';
import styled from 'styled-components';
import { Link, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './styles';

const Sair = styled.button`
  border: none;
  font-weight: bold;
  padding: 0 20px;
  font-size: 1.1rem;
  background: #056CF9;
  color: white;

  &:hover {
    cursor: pointer;
    background: #2480fb;
  }
`;

const style = {
  fontWeight: 'bold',
  fontSize: '1.1rem',
  color: 'white',
};

const renderUserType = (role) => {
  if (role === 'customer') {
    return (
      <>
        <Link
          style={ style }
          data-testid="customer_products__element-navbar-link-products"
          to="/customer/products"
        >
          Produtos
        </Link>
        <Link
          style={ style }
          data-testid="customer_products__element-navbar-link-orders"
          to="/customer/orders"
        >
          Meus Pedidos
        </Link>
      </>
    );
  }
  if (role === 'seller') {
    return (
      <Link
        style={ style }
        data-testid="customer_products__element-navbar-link-orders"
        to="/seller/orders"
      >
        Pedidos
      </Link>
    );
  }

  return (
    <Link
      style={ style }
      data-testid="customer_products__element-navbar-link-orders"
      to="/admin/manage"
    >
      Gerenciar Usuário
    </Link>
  );
};

const NavbarComponent = ({ userRole }) => {
  const dataUser = JSON.parse(localStorage.getItem('user'));
  const { name: username } = dataUser;
  /* const [logout, setLogout] = useState(false); */
  // const navigate = useNavigate();

  const handleLogout = () => {
    /* setLogout(true); */
    localStorage.removeItem('user');
    localStorage.removeItem('carrinho');
    return <Navigate to="/login" />
  };
  return (
    <Header>
      <nav>{ renderUserType(userRole) }</nav>
      <h3
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { username }
      </h3>

      <Sair
        type="button"
        onClick={ handleLogout }
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </Sair>
    </Header>
  );
};

export default NavbarComponent;

NavbarComponent.propTypes = {
  userRole: PropTypes.string.isRequired,
};
