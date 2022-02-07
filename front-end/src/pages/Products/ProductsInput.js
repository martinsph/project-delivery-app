import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Todo: Remover styles do presente arquivo
const Span = styled.span`
  background: lightblue;
  padding: 4px 12px;
  font-weight: bold;
`;

// Todo: Remover styles do presente arquivo
const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;

  & button {
    font-weight: bold;
    padding: 0 10px;
    // border: none;

    &:first-of-type {
      border-radius: 8px 0 0 8px;
    }

    &:last-of-type {
      border-radius: 0 8px 8px 0;
    }
  }
`;

const ProductInput = ({ id, updateCart }) => {
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState(0);

  const handleProductQuantity = (e) => {
    const text = e.target.id;
    const element = e.target;
    if (element.value === 0 && text === 'decrement') return;

    // Todo: Refatorar esse monstro depois
    const productName = e.target.parentNode
      .parentNode.parentNode.firstChild.innerText;
    const productPrice = e.target.parentNode
      .parentNode.parentNode.parentNode.firstChild.innerText;

    setProduct(productName);
    setPrice(parseFloat(productPrice.replace(',', '.')));
    if (element.type === 'number') {
      setQuantity(element.value);
      return;
    }
    setQuantity(text === 'increment' ? Number(quantity) + 1 : Number(quantity) - 1);
  };

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (!cart) {
      localStorage.setItem('cart', JSON.stringify({}));
    }
  }, []);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart[id] = { product, quantity, price };
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
  }, [product, quantity, price]);

  return (
    <ControlsContainer>
      <button
        onClick={ handleProductQuantity }
        id="decrement"
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        -
      </button>
      <input
        value={ quantity }
        min="0"
        type="number"
        onChange={ handleProductQuantity }
        data-testid={ `customer_products__input-card-quantity-${id}` }
      />
      <button
        onClick={ handleProductQuantity }
        id="increment"
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
      >
        +
      </button>
    </ControlsContainer>
  );
};

ProductInput.propTypes = {
  id: PropTypes.number.isRequired,
  updateCart: PropTypes.func.isRequired,
};

export default ProductInput;
