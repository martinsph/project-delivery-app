import React from 'react';
import NavBar from '../../components/NavBar';
import CheckoutItems from '../../components/Checkout/CheckoutDelivery';
import CheckoutDelivery from '../../components/Checkout/CkeckoutItems';

function CustomerCheckout() {
  return (
    <div>
      <NavBar />
      <section id="section-superior">
        <h1>Finalizar Pedido</h1>
        <CheckoutItems />
        <span
          data-testid="customer_checkout"
        >
          Total
        </span>
      </section>
      <section id="section-inferior">
        <h1>Detalhes e Endereço para Entrega</h1>
        <CheckoutDelivery />
      </section>
    </div>
  );
}

export default CustomerCheckout;
