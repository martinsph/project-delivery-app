import React, { useEffect } from 'react';
import NavBar from '../../components/NavBar';
import Panel from '../../components/Orders';
import { Page2, Container2 } from './styles';

const arraySize = 6;

const panels = Array(arraySize).fill();

function SellerOrders() {
  // const [orders, setOrders] = useState([]);
  // Renderiza os pedidos do usuário
  // ao entrar no endpoint dos Meus Pedidos
  useEffect(() => {
    console.log(1);
    // const sellerId = await fetch('http://localhost:3001/');
    // const sellerOrders  = await fetch(`http://localhost:3001/sales/${sellerId}`);
    // setOrders(sellerOrders);
  }, []);

  return (
    <Page2>
      <NavBar userRole="seller" />
      <Container2>
        { panels.map((_, i) => <Panel key={ i } id={ i } address />) }
      </Container2>
    </Page2>
  );
}

export default SellerOrders;
