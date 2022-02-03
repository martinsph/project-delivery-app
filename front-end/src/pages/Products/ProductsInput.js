import React from 'react';
import PropTypes from 'prop-types';

const ProductInput = ({ id }) => {
  const handleChange = () => {

  };
  handleChange();
  return (
    <section>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        -
      </button>
      <input
        type="number"
        data-testid={ `customer_products__input-card-quantity-${id}` }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
      >
        +
      </button>
    </section>
  );
};

ProductInput.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ProductInput;
