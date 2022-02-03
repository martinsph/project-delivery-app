import React from 'react';
import PropTypes from 'prop-types';
import { Card, Address } from './styles';

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
