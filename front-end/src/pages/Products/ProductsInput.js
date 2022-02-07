import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Todo: Remover styles do presente arquivo
const Input = styled.input`
  border: none;
  outline: none;
  background: white;
  padding: 4px;
  font-weight: bold;
  width: 50px;
  text-align: center;
  box-shadow: inset 2px 2px 3px rgba(0, 0, 0, .35);
`;

// Todo: Remover styles do presente arquivo
const ControlsContainer = styled.form`
  display: flex;
  justify-content: center;
  gap: 2px;

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
  const [name, setProduct] = useState('');
  const [unitPrice, setUnitPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  const handleProductQuantity = ({ target }) => {
    const { id: tagId } = target;

    if (/\D/.test(target.value)) return;
    if (quantity === 0 && id === 'decrement') return;

    // Todo: Refatorar esse monstro depois
    const productName = target.parentNode
      .parentNode.parentNode.firstChild.innerText;
    const productPrice = target.parentNode
      .parentNode.parentNode.parentNode.firstChild.innerText;

    setProduct(productName);
    setUnitPrice(parseFloat(productPrice.replace(',', '.')));

    const quant = (tagId === 'quantity-input' && Number(target.value))
      || (tagId === 'increment' ? quantity + 1 : quantity - 1);
    setQuantity(quant);
  };

  useEffect(() => {
    const cart = localStorage.getItem('carrinho');
    if (!cart) {
      localStorage.setItem('carrinho', JSON.stringify({}));
    }
  }, []);

  useEffect(() => {
    // Todo: Previnir refresh do localStorage
    setSubTotal(quantity * unitPrice);
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    cart[id] = { name, unitPrice, quantity, subTotal };
    localStorage.setItem('carrinho', JSON.stringify(cart));
    updateCart();
  }, [name, unitPrice, quantity, subTotal]);

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
      <Input
        value={ quantity }
        min="0"
        id="quantity-input"
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
