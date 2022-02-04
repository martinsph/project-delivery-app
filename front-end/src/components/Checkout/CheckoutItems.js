import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

function CheckoutItems({ updateCart }) {
  const cart = Object.values(JSON.parse(localStorage.getItem('cart')))
    .filter(({ quantity }) => quantity);
  const [cartItems, setCartItems] = useState(cart);

  const handleRemove = (id) => {
    const storageCart = Object.values(JSON.parse(localStorage.getItem('cart')))
      .map((items, i) => id === i ? { ...items, quantity: 0 } : items)
      .filter(({ quantity }) => quantity);

    setCartItems(storageCart);
    const payload = storageCart
      .reduce((obj, item, i) => Object.assign(obj, { [i + 1]:  item }), {});

    localStorage.setItem('cart', JSON.stringify(payload));
    updateCart();
  };

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
          cartItems.map(({ product, quantity, price }, i) => (
            <tr key={ i }>
              <Td
                data-testid={ `customer_checkout__element-order-table-item-number-${i + 1}` }
              >
                { i + 1 }
              </Td>
              <Td
                data-testid={ `customer_checkout__element-order-table-name-${i + 1}` }
              >
                { product }
              </Td>
              <Td
                data-testid={ `customer_checkout__element-order-table-quantity-${i + 1}` }
              >
                { quantity }
              </Td>
              <Td
                data-testid={ `customer_checkout__element-order-table-unit-price-${i + 1}` }
              >
                { price }
              </Td>
              <Td
                data-testid={ `customer_checkout__element-order-table-sub-total-${i + 1}` }
              >
                { (quantity * price).toFixed(2) }
              </Td>
              <Td
                onClick={ () => handleRemove(i) }
                data-testid={ `customer_checkout__element-order-table-remove-${i + 1}` }
              >
                Remover
              </Td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}

CheckoutItems.propTypes = {
  updateCart: PropTypes.func.isRequired,
};

export default CheckoutItems;
