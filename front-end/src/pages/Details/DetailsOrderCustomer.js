import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import DetailsCustomer from '../../components/Details/DetailsCustomer';

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
`;

export const ContainerSectionSuperior = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  box-shadow: 0 2px 4px #00000040;
  margin-bottom: 30px;
  & span {
    align-self: flex-end;
  }
`;

export const Span = styled.span`
  padding: 6px;
  background-color: #036B52;
  border-radius: 6px;
  margin-top: 60px;
  margin-bottom: 10px;
  margin-right: 8px;
  color: #F2FFFC;
`;

function DetailsOrderCustomer() {
  return (
    <Page>
      <NavBar />
      <ContainerSection>
        <h2>Detalhes do Pedido</h2>
        <ContainerSectionSuperior>
          <DetailsCustomer />
          <Span data-testid="customer_details">Total</Span>
        </ContainerSectionSuperior>
      </ContainerSection>
    </Page>
  );
}

export default DetailsOrderCustomer;
