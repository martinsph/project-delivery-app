import React from 'react';
import styled from 'styled-components';

export const Td = styled.td`
  text-align: center;
  padding: 6px;

  &:nth-child(1) {
    background-color: #2FC18C;
    border-radius: 6px 0 0 6px;
  }
  &:nth-child(2) {
    background-color: #EBF1EF;
  }
  &:nth-child(3) {
    background-color: #036B52;
    color: #F2FFFC;
  }
  &:nth-child(4) {
    background-color: #421981;
    color: #F2FFFC;
  }
  &:nth-child(5) {
    background-color: #056DF9;
    color: #F2FFFC;
  }
  &:nth-child(6) {
    background-color: #2FC18C;
    border-radius: 0 6px 6px 0;
    color: #F2FFFC;
  }
`;

export const Table = styled.table`

`;

export const Th = styled.th`
  font-family: 'Nunito', sans-serif;
`;

function CheckoutItems() {
  // data mock
  const payload = [
    {
      product: 'Heineken',
      quantity: 5,
      unitPrice: 'R$ 5.69',
      subTotal: 'R$ 28.45',
    },
    {
      product: 'Heineken',
      quantity: 5,
      unitPrice: 'R$ 5.69',
      subTotal: 'R$ 28.45',
    },
    {
      product: 'Heineken',
      quantity: 5,
      unitPrice: 'R$ 5.69',
      subTotal: 'R$ 28.45',
    },
  ];

  // mimicking product page
  localStorage.setItem('cart', JSON.stringify(payload));
  // getting cart products
  const cart = JSON.parse(localStorage.getItem('cart'));

  return (
    <Table>
      <thead>
        <tr>
          <Th>Item</Th>
          <Th>Descrição</Th>
          <Th>Quantidade</Th>
          <Th>Valor Unitário</Th>
          <Th>Sub-total</Th>
          <Th>Remover Item</Th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map((items, i) => {
            const { product, quantity, unitPrice, subTotal } = items;
            return (
              <tr key={ i }>
                <Td
                  data-testid="customer_checkout__element-order-table-item-number-"
                >
                  { i + 1 }
                </Td>
                <Td
                  data-testid="customer_checkout__element-order-table-name-"
                >
                  { product }
                </Td>
                <Td
                  data-testid="customer_checkout__element-order-table-quantity-"
                >
                  { quantity }
                </Td>
                <Td
                  data-testid="customer_checkout__element-order-table-unit-price-"
                >
                  { unitPrice }
                </Td>
                <Td
                  data-testid="customer_checkout__element-order-table-sub-total-"
                >
                  { subTotal }
                </Td>
                <Td
                  data-testid="customer_checkout__element-order-table-remove-"
                >
                  Remover
                </Td>
              </tr>
            );
          })
        }
      </tbody>
    </Table>
  );
}

export default CheckoutItems;
