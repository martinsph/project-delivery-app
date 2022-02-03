import React, { useEffect } from 'react';
import NavBar from '../../components/NavBar';
import Panel from '../../components/Orders';
import { Page, Container } from './styles';

const arraySize = 6;

const panels = Array(arraySize).fill();

function CustomerOrders() {
  // const [orders, setOrders] = useState([]);
  // Renderiza os pedidos do usuário
  // ao entrar no endpoint dos Meus Pedidos
  useEffect(() => {
    console.log(1);
    // const myId = await fetch('http://localhost:3001/');
    // const userOrders  = await fetch(`http://localhost:3001/sales/${myId}`);
    // setOrders(userOrders);
  }, []);

  return (
    <Page>
      <NavBar userRole="user" />
      <Container>
        { panels.map((_, i) => <Panel key={ i } id={ i } />) }
      </Container>
    </Page>
  );
}

export default CustomerOrders;
