import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Address } from './styles';

function CheckoutDelivery({ address, order }) {
  const navigate = useNavigate();
  const { id, totalPrice, status, saleDate } = order;
  const renderAddress = () => (
    <Address
      data-testid={ `seller_orders__element-card-address-${id}` }
    >
      Endereço, Nº 10
    </Address>
  );

  const changeDate = (date) => {
    const newDate = date.match(/(\d+-?){3}/)[0]
      .split('-').reverse().join('/');
    return newDate;
  };

  const redirectUser = () => navigate(`/customer/orders/${id}`);

  return (
    <Card onClick={ redirectUser }>
      <div className="order-number">
        <p>
          Pedido
          <strong
            data-testid={ `customer_orders__element-order-id-${id}` }
          >
            {id}
          </strong>
        </p>
      </div>
      <div className="order-status">
        <h2
          data-testid={ `customer_orders__element-delivery-status-${id}` }
        >
          { status }
        </h2>
      </div>
      <div className="order-info">
        <p
          data-testid={ `customer_orders__element-order-date-${id}` }
        >
          { changeDate(saleDate) }
        </p>
        <p>
          R$
          <strong
            data-testid={ `seller_orders__element-card-price-${id}` }
          >
            { totalPrice }
          </strong>
        </p>
      </div>
      { address && renderAddress() }
    </Card>
  );
}

export default CheckoutDelivery;

CheckoutDelivery.propTypes = {
  id: PropTypes.number.isRequired,
  address: PropTypes.bool.isRequired,
  order: PropTypes.objectOf(PropTypes.object).isRequired,
};
