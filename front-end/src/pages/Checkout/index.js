import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import CheckoutDelivery from '../../components/Checkout/CheckoutDelivery';
import CheckoutItems from '../../components/Checkout/CheckoutItems';
import {
  Page,
  ContainerSection,
  ContainerSectionSuperior,
  ContainerSectionInferior,
  Span,
} from './styles';

function Checkout() {
  const [cart, setCart] = useState(0);

  const updateCart = () => {
    const totalPrice = Object.values(JSON.parse(localStorage.getItem('carrinho')))
      .reduce((subtotal, { subTotal }) => subtotal + subTotal, 0);
    setCart(totalPrice);
  };

  useEffect(() => {
    updateCart();
  }, []);

  return (
    <Page>
      <NavBar userRole="customer" />
      <ContainerSection>
        <h2>Finalizar Pedido</h2>
        <ContainerSectionSuperior>
          <CheckoutItems updateCart={ updateCart } />
          <Span>
            Total R$:
            <strong
              data-testid="customer_checkout__element-order-total-price"
            >
              { cart.toFixed(2).replace('.', ',') }
            </strong>
          </Span>
        </ContainerSectionSuperior>
        <h2>Detalhes e Endereço para Entrega</h2>
        <ContainerSectionInferior>
          <CheckoutDelivery />
        </ContainerSectionInferior>
      </ContainerSection>
    </Page>
  );
}

export default Checkout;
