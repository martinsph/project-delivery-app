import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import CheckoutDelivery from '../../components/Checkout/CheckoutDelivery';
import CheckoutItems from '../../components/Checkout/CheckoutItems';
import { Page,
  ContainerSection,
  ContainerSectionSuperior,
  ContainerSectionInferior,
  Span,
} from './styles';

function Checkout() {
  const [cart, setCart] = useState(0);

  const updateCart = () => {
    const cartTotalPrice = Object.values(JSON.parse(localStorage.getItem('cart')))
      .reduce((subtotal, { quantity, price }) => subtotal + ((quantity * price) || 0), 0);
    setCart(cartTotalPrice);
  };

  useEffect(() => {
    updateCart();
  }, [])

  return (
    <Page>
      <NavBar userRole="customer" />
      <ContainerSection>
        <h2>Finalizar Pedido</h2>
        <ContainerSectionSuperior>
          <CheckoutItems updateCart={ updateCart } />
          <Span>
            { `Total R$: ${cart.toFixed(2)}` }
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
