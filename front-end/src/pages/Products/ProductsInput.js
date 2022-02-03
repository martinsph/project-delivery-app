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
    if (quantity === 0 && text === 'decrement') return;
    
    // Todo: Refatorar esse monstro depois
    const productName =
      e.target.parentNode.parentNode.parentNode.firstChild.innerText;
    const productPrice =
      e.target.parentNode.parentNode.parentNode.parentNode.firstChild.innerText;
    
    setProduct(productName);
    setPrice(parseFloat(productPrice.replace(',', '.')));
    setQuantity(text === 'increment' ? quantity + 1 : quantity - 1);
  };
  
  useEffect(() => {
    /*
    Todo: Impedir criação do cart no localStorage
    Todo: se o cart já estiver criado e populado
    */
   if (!localStorage.getItem('cart')) {
     localStorage.setItem('cart', JSON.stringify({}));
    }
    const cart = JSON.parse(localStorage.getItem('cart'));
    
    cart[id] = { product, quantity, price };
    localStorage.setItem('cart', JSON.stringify(cart));

    // Toda vez que esse componente sofre uma ação
    // Através do handleProductQuantity, a função abaixo
    // É disparada no elemento pai
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
      <Span
        data-testid={ `customer_products__input-card-quantity-${id}` }
      >
        { quantity }
      </Span>
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
};

export default ProductInput;
