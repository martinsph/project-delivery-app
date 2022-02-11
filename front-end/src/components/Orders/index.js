import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Address } from './styles';

function CheckoutDelivery({ order, seller }) {
  const navigate = useNavigate();
  const { id, totalPrice, status, saleDate, deliveryAddress, deliveryNumber } = order;
  const renderAddress = () => (
    <Address
      data-testid={ `seller_orders__element-card-address-${id}` }
    >
      { `${deliveryAddress}, ${deliveryNumber}` }
    </Address>
  );

  const changeDate = (date) => {
    const newDate = date.match(/(\d+-?){3}/)[0]
      .split('-').reverse().join('/');
    return newDate;
  };

  const userType = seller ? 'seller' : 'customer';

  const redirectUser = () => navigate(`/${userType}/orders/${id}`);

  return (
    <Card onClick={ redirectUser }>
      <div className="order-number">
        <p>
          Pedido
          <strong
            data-testid={ `${userType}_orders__element-order-id-${id}` }
          >
            {id}
          </strong>
        </p>
      </div>
      <div className="order-status">
        <h2
          data-testid={ `${userType}_orders__element-delivery-status-${id}` }
        >
          { status }
        </h2>
      </div>
      <div className="order-info">
        <p
          data-testid={ `${userType}_orders__element-order-date-${id}` }
        >
          { changeDate(saleDate) }
        </p>
        <p>
          R$
          <strong
            data-testid={ `${userType}_orders__element-card-price-${id}` }
          >
            { Number(totalPrice).toFixed(2).replace('.', ',') }
          </strong>
        </p>
      </div>
      { deliveryAddress && renderAddress() }
    </Card>
  );
}

export default CheckoutDelivery;

CheckoutDelivery.propTypes = {
  id: PropTypes.number,
  deliveryAddress: PropTypes.string,
  deliveryNumber: PropTypes.number,
  order: PropTypes.objectOf(PropTypes.object),
  seller: PropTypes.string,
};

CheckoutDelivery.defaultProps = {
  id: 0,
  deliveryAddress: '',
  deliveryNumber: 0,
  order: {},
  seller: '',
};
