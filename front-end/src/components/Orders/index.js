import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Card = styled.div`
  display: flex;
  border-radius: 6px;
  box-shadow: 0 2px 4px #00000040;
  
  & .order-number {
    height: 75px;
    width: 75px;
    display: flex;
    background: #e5e5e5;
    align-items: center;
    text-align: center;
  }
  & .order-status {
    background: #D4C63B;
    border-radius: 6px;
    margin: 6px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    text-align: center;
  }
  & .order-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-self: center;
  
    & p {
      background: #eee;
      padding: 4px;
      border-radius: 2px;
    }
  }
`;

const Address = styled.p`
  display: flex;
  text-align: center;
  align-self: center;
  font-weight: bold;
  background: royalblue;
`;

function CheckoutDelivery({ id, address }) {
  const renderAddress = () => (
    <Address
      data-testid={ `seller_orders__element-card-address-${id}` }
    >
      Endereço, Nº 10
    </Address>
  );

  return (
    <Card>
      <div className="order-number">
        <p data-testid={ `customer_orders__element-order-id-${id}` }> Pedido 0001 </p>
      </div>
      <div className="order-status">
        <h2 data-testid={ `customer_orders__element-delivery-status-${id}` }>Pendente</h2>
      </div>
      <div className="order-info">
        <p data-testid={ `customer_orders__element-order-date-${id}` }>31/01/2022</p>
        <p data-testid={ `seller_orders__element-card-price-${id}` }>R$23,30</p>
      </div>
      { address && renderAddress() }
    </Card>
  );
}

export default CheckoutDelivery;

CheckoutDelivery.propTypes = {
  id: PropTypes.number.isRequired,
  address: PropTypes.bool.isRequired,
};
