import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import PropTypes from 'prop-types';
import { Container, Td, Table, Head, Header } from './styles';

const socket = io('http://localhost:3001');
function DetailsSeller({ sale }) {
  const [currentStatus, setCurrentStatus] = useState('Pendente');
  const [isPreparing, setIsPreparing] = useState(false);
  // const preparing = useRef();
  // const dispatched = useRef();

  const { id, saleDate, status, products } = sale;

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
    setIsPreparing(true);
    e.target.disabled = true;
    socket.emit('orderPreparing');
    // const updateStatus = await fetch('http://localhost:3001', {
    //   method: 'PUT',
    //   headers: {
    //     Authorization: token,
    //     'Content-Type': 'application/json',
    //   },
    // });

    // console.log(updateStatus);
  };

  const dispatchOrder = async (e) => {
    setCurrentStatus('Em Trânsito');
    e.target.disabled = true;
    socket.emit('orderDispatch');
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
          onClick={ prepareOrder }
          data-testid="seller_order_details__button-preparing-check"
        >
          PREPARAR PEDIDO
        </button>

        <button
          type="button"
          id="dispatch"
          disabled={ !isPreparing }
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
