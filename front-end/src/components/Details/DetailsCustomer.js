import React from 'react';
import PropTypes from 'prop-types';
import { Container2, Td2, Table2, Head2, Header2 } from './styles';

function DetailsCustomer({ order }) {
  console.log(order);
  const { id, products, status, saleDate, seller } = order;

  const changeDate = (date) => {
    const [y, m, d] = date.match(/\d+-\d+-\d+/g)[0].split('-');
    return `${d}/${m}/${y}`;
  };

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
                  <Td2>{ i + 1 }</Td2>
                  <Td2>{ name }</Td2>
                  <Td2>{ quantity }</Td2>
                  <Td2>{ price }</Td2>
                  <Td2>{ (price * quantity).toFixed(2) }</Td2>
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
  order: PropTypes.object.isRequired,
};

export default DetailsCustomer;
