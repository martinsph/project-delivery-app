import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import DetailsCustomer from '../../components/Details/DetailsCustomer';
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
      const response = await fetch(`http://localhost:3001/sales/${id}`);
      const data = await response.json();
      await setOrder(data);
    })();
  }, [id]);

  return (
    <Page>
      <NavBar userRole="customer" />
      <ContainerSection>
        <h2>Detalhes do Pedido</h2>
        <ContainerSectionSuperior>
          <DetailsCustomer order={ order } />
          <Span data-testid="customer_details">
            {
              `Total: R$ ${order && order.totalPrice
                && Number(order.totalPrice).toFixed(2).replace('.', ',')}`
            }
          </Span>
        </ContainerSectionSuperior>
      </ContainerSection>
    </Page>
  );
}

export default DetailsOrderCustomer;
