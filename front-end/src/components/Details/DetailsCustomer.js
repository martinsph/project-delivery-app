import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import PropTypes from 'prop-types';
import { Container2, Td2, Table2, Head2, Header2 } from './styles';

const socket = io('http://localhost:3001');
function DetailsCustomer({ order }) {
  const [currentStatus, setCurrentStatus] = useState('Pendente');
  const { id, products, status, saleDate, seller } = order;

  socket.on('orderPreparing', () => setCurrentStatus('Preparando'));
  socket.on('orderDispatch', () => setCurrentStatus('Em Trânsito'));

  const changeDate = (date) => date
    .match(/(\d+-?){3}/)[0]
    .split('-')
    .reverse()
    .join('/');

  const orderStatus1 = 'customer_order_details__';

  const orderDelivered = (e) => {
    e.target.disabled = true;
    socket.emit('orderDelivered', { myId });
    setCurrentStatus('Entregue');
  };

  useEffect(() => {
    setCurrentStatus(status);
  }, [status]);

  return (
    <Container2>
      <Head2>
        <Header2>
          Pedido
          <strong
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            {id}
          </strong>
        </Header2>
        <Header2>
          P. Vendedora:
          <strong
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            { seller && seller.name }
          </strong>
        </Header2>
        <Header2
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          { saleDate && changeDate(saleDate) }
        </Header2>
        <Header2
          data-testid={
            `${orderStatus1}element-order-details-label-delivery-status`
          }
        >
          { currentStatus }
        </Header2>
        <button
          data-testid="customer_order_details__button-delivery-check"
          type="button"
          onClick={ orderDelivered }
        >
          MARCAR COMO ENTREGUE
        </button>
      </Head2>
      <Table2>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {(products || []).map((product, i) => {
            const {
              name,
              price,
              salesProduct: { quantity },
            } = product;
            return (
              <tr key={ i }>
                <Td2
                  data-testid={
                    `customer_order_details__element-order-table-item-number-${i}`
                  }
                >
                  {i + 1}
                </Td2>
                <Td2
                  data-testid={
                    `customer_order_details__element-order-table-name-${i}`
                  }
                >
                  {name}
                </Td2>
                <Td2
                  data-testid={
                    `customer_order_details__element-order-table-quantity-${i}`
                  }
                >
                  {quantity}
                </Td2>
                <Td2>
                  R$
                  <strong
                    data-testid={
                      `customer_order_details__element-order-table-sub-total-${i}`
                    }
                  >
                    {Number(price).toFixed(2).replace('.', ',')}
                  </strong>
                </Td2>
                <Td2>
                  R$
                  <strong
                    data-testid={
                      `customer_order_details__element-order-total-price-${i}`
                    }
                  >
                    {(price * quantity).toFixed(2).replace('.', ',')}
                  </strong>
                </Td2>
              </tr>
            );
          })}
        </tbody>
      </Table2>
    </Container2>
  );
}

DetailsCustomer.propTypes = {
  order: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default DetailsCustomer;
