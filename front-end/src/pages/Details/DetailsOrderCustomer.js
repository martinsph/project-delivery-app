import React from 'react';
import NavBar from '../../components/NavBar';
import DetailsCustomer from '../../components/Details/DetailsCustomer';
import { Page,
  ContainerSection,
  ContainerSectionSuperior,
  Span,
} from './styles';

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
