import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import DetailsSeller from '../../components/Details/DetailsSeller';
import { Page2,
  ContainerSection2,
  ContainerSectionSuperior2,
  Span2,
} from './styles';

function DetailsOrderSeller() {
  const { id } = useParams();
  const [sale, setSale] = useState({});

  useEffect(() => {
    const getSales = async () => {
      const getSale = await fetch(`http://localhost:3001/sales/${id}`);
      const data = await getSale.json();
      setSale(data);
    };

    getSales();
  }, [id]);

  return (
    <Page2>
      <NavBar userRole="seller" />
      <ContainerSection2>
        <h2>Detalhe do Pedido</h2>
        <ContainerSectionSuperior2>
          <DetailsSeller sale={ sale } />
          <Span2 data-testid="seller_details">
            Total: R$
            <strong>
              {
                sale
                && sale.totalPrice
                && Number(sale.totalPrice).toFixed(2).replace('.', ',')
              }
            </strong>
          </Span2>
        </ContainerSectionSuperior2>
      </ContainerSection2>
    </Page2>
  );
}

export default DetailsOrderSeller;
