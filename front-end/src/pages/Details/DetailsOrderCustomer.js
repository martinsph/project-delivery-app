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
  box-shadow: 0 2px 4px #00000040;
  margin-bottom: 30px;
  & span {
    align-self: flex-end;
  }
`;

export const Span = styled.span`
  padding: 6px 12px;
  background-color: #036B52;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1.6rem;
  margin-top: 100px;
  margin-right: 10px;
  margin-bottom: 10px;
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
          <Span data-testid="customer_details">Total: R$ </Span>
        </ContainerSectionSuperior>
      </ContainerSection>
    </Page>
  );
}

export default DetailsOrderCustomer;
