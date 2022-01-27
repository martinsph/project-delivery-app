import React from 'react';

function CheckoutDelivery() {
  return (
    <form action="">
      <label htmlFor="select-seller">
        P. Vendedora Responsável
        <select
          data-testid="customer_checkout__select-seller"
          name="select-seller"
          id="select-seller"
        >
          <option>
            user role seller
          </option>
        </select>
      </label>

      <label htmlFor="input-address">
        Endereço
        <input
          data-testid="customer_checkout__input-address"
          type="text"
          name="input-address"
        />
      </label>

      <button
        data-testid="customer_checkout__button-submit-order"
        type="button"
      >
        FINALIZAR PEDIDO
      </button>
    </form>
  );
}

export default CheckoutDelivery;
