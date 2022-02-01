// import React, { useState, useEffect } from 'react';
import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import Panel from '../../components/Orders';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  max-width: 1080px;
  margin-top: 30px;
  gap: 20px 40px;
`;
const arraySize = 6;

const panels = Array(arraySize).fill();

function CustomerCheckout() {
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
      <NavBar />
      <Container>
        { panels.map((_, i) => <Panel key={ i } id={ i } />) }
      </Container>
    </Page>
  );
}

export default CustomerCheckout;
