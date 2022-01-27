import React from 'react';
import NavBar from '../../components/NavBar';
import CheckoutItems from '../../components/CkeckoutItems';

function CustomerCheckout() {
  return (
    <div>
      <NavBar />
      <section id="section-superior">
        <h1>Finalizar Pedido</h1>
        <CheckoutItems />
      </section>
      <section id="section-inferior">
        <h1>Detalhes e Endereço para Entrega</h1>
      </section>
    </div>
  );
}

export default CustomerCheckout;
