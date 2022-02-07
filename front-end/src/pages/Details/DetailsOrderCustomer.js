import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import DetailsCustomer from '../../components/Details/DetailsCustomer';
import { useParams } from 'react-router-dom';
import { Page,
  ContainerSection,
  ContainerSectionSuperior,
  Span,
} from './styles';

function DetailsOrderCustomer() {
  const { id } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    (async () => {
      const order = await fetch(`http://localhost:3001/sales/${id}`);
      const data = await order.json();
      await setOrder(data);
    })();
  }, []);

  return (
    <Page>
      <NavBar userRole="customer" />
      <ContainerSection>
        <h2>Detalhes do Pedido</h2>
        <ContainerSectionSuperior>
          <DetailsCustomer order={ order } />
          <Span data-testid="customer_details">
            Total R$: { order.totalPrice }
          </Span>
        </ContainerSectionSuperior>
      </ContainerSection>
    </Page>
  );
}

export default DetailsOrderCustomer;
