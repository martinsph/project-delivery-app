import React from 'react';
import NavBar from '../../components/NavBar';
import DetailsSeller from '../../components/Details/DetailsSeller';
import { Page2,
  ContainerSection2,
  ContainerSectionSuperior2,
  Span2,
} from './styles';

function DetailsOrderSeller() {
  return (
    <Page2>
      <NavBar userRole="seller" />
      <ContainerSection2>
        <h2>Detalhe do Pedido</h2>
        <ContainerSectionSuperior2>
          <DetailsSeller />
          <Span2 data-testid="seller_details">Total: R$ </Span2>
        </ContainerSectionSuperior2>
      </ContainerSection2>
    </Page2>
  );
}

export default DetailsOrderSeller;
