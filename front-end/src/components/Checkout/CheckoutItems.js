import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  }
  &:nth-child(6) {
    background-color: #2fc18c;
    border-radius: 0 6px 6px 0;
    color: #f2fffc;
  }
`;

export const Table = styled.table``;

export const Th = styled.th`
  font-family: 'Nunito', sans-serif;
`;

function CheckoutItems({ updateCart }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = Object
      .values(JSON.parse(localStorage.getItem('carrinho')))
      .filter(({ quantity }) => quantity);
    setCartItems(cart);
  }, []);

  const handleRemove = (id) => {
    const storageCart = Object.values(JSON.parse(localStorage.getItem('carrinho')))
      .map((items, i) => {
        if (id === i) return { ...items, quantity: 0 };
        return items;
      })
      .filter(({ quantity }) => quantity);

    setCartItems(storageCart);

    const payload = storageCart
      .reduce((obj, item, i) => Object.assign(obj, { [i + 1]: item }), {});

    localStorage.setItem('carrinho', JSON.stringify(payload));

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
        {cartItems.map(({ product, quantity, price }, i) => (
          <tr key={ i }>
            <Td
              data-testid={
                `customer_checkout__element-order-table-item-number-${i}`
              }
            >
              { i + 1 }
            </Td>
            <Td
              data-testid={
                `customer_checkout__element-order-table-name-${i}`
              }
            >
              {product}
            </Td>
            <Td
              data-testid={
                `customer_checkout__element-order-table-quantity-${i}`
              }
            >
              { quantity }
            </Td>
            <Td
              data-testid={
                `customer_checkout__element-order-table-unit-price-${i}`
              }
            >
              { price }
            </Td>
            <Td
              data-testid={
                `customer_checkout__element-order-table-sub-total-${i}`
              }
            >
              { (quantity * price).toFixed(2) }
            </Td>
            <Td
              onClick={ () => handleRemove(i) }
              data-testid={
                `customer_checkout__element-order-table-remove-${i}`
              }
            >
              Remover
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

CheckoutItems.propTypes = {
  updateCart: PropTypes.func.isRequired,
};

export default CheckoutItems;
