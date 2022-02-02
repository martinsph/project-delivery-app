import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import CheckoutDelivery from '../../components/Checkout/CheckoutDelivery';
import CheckoutItems from '../../components/Checkout/CheckoutItems';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #FBFFFE;
`;

export const ContainerSection = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  margin-top: 60px;
  & div {
    padding: 20px;
  }
`;

export const ContainerSectionSuperior = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px #00000040;
  margin-bottom: 30px;
  & span {
    align-self: flex-end;
  }
`;

export const ContainerSectionInferior = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px #00000040;
`;

export const Span = styled.span`
  padding: 6px;
  background-color: #036B52;
  border-radius: 6px;
  margin-top: 30px;
  color: #F2FFFC;
`;

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
