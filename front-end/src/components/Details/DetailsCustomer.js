import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container2, Td2, Table2, Head2, Header2 } from './styles';

export const Td = styled.td`
  text-align: center;
  padding: 6px;

  &:nth-child(1) {
    background-color: #2fc18c;
    border-radius: 6px 0 0 6px;
  }
  &:nth-child(2) {
    background-color: #ebf1ef;
  }
  &:nth-child(3) {
    background-color: #036b52;
    color: #f2fffc;
  }
  &:nth-child(4) {
    background-color: #421981;
    color: #f2fffc;
  }
  &:nth-child(5) {
    background-color: #056df9;
    color: #f2fffc;
    border-radius: 0 6px 6px 0;
  }
`;

function DetailsCustomer({ order, updateTotal }) {
  const [seller, setSeller] = useState('');
  const { id, products, totalPrice, status, saleDate } = order;
  console.log(products);
  return (
    <Container2>
      <Head2>
        <Header2>PEDIDO 003</Header2>
        <Header2>P. Venda: Fulana de Tal</Header2>
        <Header2>07/04/2021</Header2>
        <Header2>ENTREGUE</Header2>
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
                  <Td>{ i + 1 }</Td>
                  <Td>{ name }</Td>
                  <Td>{ quantity }</Td>
                  <Td>{ price }</Td>
                  <Td>{ (price * quantity).toFixed(2) }</Td>
                </tr>
              );
            })
          }
        </tbody>
      </Table2>
    </Container2>
  );
}

export default DetailsCustomer;
