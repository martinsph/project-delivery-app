import React from 'react';
import PropTypes from 'prop-types';
import { Container2, Td2, Table2, Head2, Header2 } from './styles';

function DetailsCustomer({ order }) {
  const { id, products, status, saleDate, seller } = order;

  const changeDate = (date) => date.match(/(\d+-?){3}/)[0]
    .split('-').reverse().join('/');

  return (
    <Container2>
      <Head2>
        <Header2>
          { `Pedido ${id}` }
        </Header2>
        <Header2>
          P. Vendedora:
          <strong>
            { seller && seller.name }
          </strong>
        </Header2>
        <Header2>{ saleDate && changeDate(saleDate) }</Header2>
        <Header2>{ status }</Header2>
        <Header2>MARCAR COMO ENTREGUE</Header2>
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
          {
            (products || []).map((product, i) => {
              const { name, price, salesProduct: { quantity } } = product;
              return (
                <tr key={ i }>
                  <Td2
                    data-testid={
                      `customer_order_details__element-order-table-item-number-${i}`
                    }
                  >
                    { i + 1 }
                  </Td2>
                  <Td2
                    data-testid={
                      `customer_order_details__element-order-table-name-${i}`
                    }
                  >
                    { name }
                  </Td2>
                  <Td2
                    data-testid={
                      `customer_order_details__element-order-table-quantity-${i}`
                    }
                  >
                    { quantity }
                  </Td2>
                  <Td2>
                    R$
                    <strong
                      data-testid={
                        `customer_order_details__element-order-table-sub-total-${i}`
                      }
                    >
                      { Number(price).toFixed(2).replace('.', ',') }
                    </strong>
                  </Td2>
                  <Td2>
                    R$
                    <strong
                      data-testid={
                        `customer_order_details__element-order-total-price-${i}`
                      }
                    >
                      { (price * quantity).toFixed(2).replace('.', ',') }
                    </strong>
                  </Td2>
                </tr>
              );
            })
          }
        </tbody>
      </Table2>
    </Container2>
  );
}

DetailsCustomer.propTypes = {
  order: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default DetailsCustomer;
