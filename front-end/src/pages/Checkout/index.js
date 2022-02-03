import React from 'react';
import NavBar from '../../components/NavBar';
import CheckoutDelivery from '../../components/Checkout/CheckoutDelivery';
import CheckoutItems from '../../components/Checkout/CheckoutItems';
import { Page,
  ContainerSection,
  ContainerSectionSuperior,
  ContainerSectionInferior,
  Span,
} from './styles';

function CustomerCheckout() {
  return (
    <Page>
      <NavBar />
      <ContainerSection>
        <h2>Finalizar Pedido</h2>
        <ContainerSectionSuperior>
          <CheckoutItems />
          <Span data-testid="customer_checkout__element-order-total-price">Total</Span>
        </ContainerSectionSuperior>
        <h2>Detalhes e Endereço para Entrega</h2>
        <ContainerSectionInferior>
          <CheckoutDelivery />
        </ContainerSectionInferior>
      </ContainerSection>
    </Page>
  );
}

export default CustomerCheckout;
