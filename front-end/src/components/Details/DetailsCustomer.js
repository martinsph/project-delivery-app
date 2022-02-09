import React from 'react';
import PropTypes from 'prop-types';
import { Container2, Td2, Table2, Head2, Header2 } from './styles';

function DetailsCustomer({ order }) {
  const { id, products, status, saleDate, seller } = order;

  const changeDate = (date) => date
    .match(/(\d+-?){3}/)[0]
    .split('-')
    .reverse()
    .join('/');

  const testId = 'customer_order_details__element-order-details-label-seller-name';

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
            {seller && seller.name}
          </strong>
        </Header2>
        <Header2
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {saleDate && changeDate(saleDate)}
        </Header2>
        <Header2 data-testid={ testId }>
          {status}
        </Header2>
        <Header2
          data-testid="customer_order_details__button-delivery-check"
        >
          MARCAR COMO ENTREGUE
        </Header2>
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
                    `customer_order_details__element-order-table-item-number-${i + 1}`
                  }
                >
                  {i + 1}
                </Td2>
                <Td2
                  data-testid={ `customer_order_details__element-order-table-name-${i + 1}` }
                >
                  {name}
                </Td2>
                <Td2
                  data-testid={
                    `customer_order_details__element-order-table-quantity-${i + 1}`
                  }
                >
                  {quantity}
                </Td2>
                <Td2>
                  R$
                  <strong
                    data-testid={
                      `customer_order_details__element-order-table-sub-total-${i + 1}`
                    }
                  >
                    {Number(price).toFixed(2).replace('.', ',')}
                  </strong>
                </Td2>
                <Td2>
                  R$
                  <strong
                    data-testid={
                      `customer_order_details__element-order-total-price-${i + 1}`
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
