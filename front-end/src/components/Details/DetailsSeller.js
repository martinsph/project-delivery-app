import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import PropTypes from 'prop-types';
import { Container, Td, Table, Head, Header } from './styles';

const socket = io('http://localhost:3001');
function DetailsSeller({ sale }) {
  const [currentStatus, setCurrentStatus] = useState('Pendente');
  // const preparing = useRef();
  // const dispatched = useRef();

  const { id, saleDate, status, products } = sale;
  const { token } = JSON.parse(localStorage.getItem('user'));

  const changeDate = (date) => {
    const newDate = date.match(/(\d+-?){3}/)[0]
      .split('-').reverse().join('/');
    return newDate;
  };

  useEffect(() => {
    setCurrentStatus(status);
  }, [status]);

  const prepareOrder = async (e) => {
    setCurrentStatus('Preparando');
    socket.emit('orderPreparing');
    e.target.disabled = true;

    await fetch(`http://localhost:3001/sales/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'Preparando' }),
    });
  };

  const dispatchOrder = async (e) => {
    setCurrentStatus('Em Trânsito');
    socket.emit('orderDispatch');
    e.target.disabled = true;

    await fetch(`http://localhost:3001/sales/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'Em Trânsito' }),
    });
  };

  socket.on('orderDelivered', () => {
    const orderPrepare = document.querySelector('#prepare');
    const orderDispatch = document.querySelector('#dispatch');

    orderPrepare.disabled = true;
    orderDispatch.disabled = true;

    setCurrentStatus('Entregue');
  });

  return (
    <Container>
      <Head>
        <Header>
          Pedido
          <strong
            data-testid="seller_order_details__element-order-details-label-order-id"
          >
            {id}
          </strong>
        </Header>
        <Header
          data-testid="seller_order_details__element-order-details-label-order-date"
        >
          { saleDate && changeDate(saleDate) }
        </Header>
        <Header
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          { currentStatus }
        </Header>
        <button
          type="button"
          id="prepare"
          disabled={ currentStatus !== 'Pendente' }
          onClick={ prepareOrder }
          data-testid="seller_order_details__button-preparing-check"
        >
          PREPARAR PEDIDO
        </button>

        <button
          type="button"
          id="dispatch"
          disabled={ currentStatus !== 'Preparando' }
          onClick={ dispatchOrder }
          data-testid="seller_order_details__button-dispatch-check"
        >
          SAIU PARA ENTREGA
        </button>
      </Head>
      <Table>
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
                <Td
                  data-testid={
                    `seller_order_details__element-order-table-item-number-${i}`
                  }
                >
                  {i + 1}
                </Td>
                <Td
                  data-testid={
                    `seller_order_details__element-order-table-name-${i}`
                  }
                >
                  {name}
                </Td>
                <Td
                  data-testid={
                    `seller_order_details__element-order-table-quantity-${i}`
                  }
                >
                  {quantity}
                </Td>
                <Td>
                  R$
                  <strong
                    data-testid={
                      `seller_order_details__element-order-table-sub-total-${i}`
                    }
                  >
                    { Number(price).toFixed(2).replace('.', ',') }
                  </strong>
                </Td>
                <Td>
                  R$
                  <strong
                    data-testid={
                      `seller_order_details__element-order-total-price-${i}`
                    }
                  >
                    { (price * quantity).toFixed(2).replace('.', ',') }
                  </strong>
                </Td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default DetailsSeller;

DetailsSeller.propTypes = {
  sale: PropTypes.objectOf(PropTypes.object),
};

DetailsSeller.defaultProps = {
  sale: {},
};
