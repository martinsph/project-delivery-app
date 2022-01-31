import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Td = styled.td`
  text-align: center;
  padding: 6px;
  font-weight: bold;

  &:nth-child(1) {
    background-color: #2FC18C;
    border-radius: 6px 0 0 6px;
  }
  &:nth-child(2) {
    background-color: #EBF1EF;
  }
  &:nth-child(3) {
    background-color: #036B52;
    color: #F2FFFC;
  }
  &:nth-child(4) {
    background-color: #421981;
    color: #F2FFFC;
  }
  &:nth-child(5) {
    background-color: #056DF9;
    border-radius: 0 6px 6px 0;
    color: #F2FFFC;
  }
`;

export const Table = styled.table`
  margin: 0 8px;
`;

export const Head = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  background-color: #EBF1EF;
  padding: 8px;
`;

export const Header = styled.p`
  &:nth-child(1) {
    font-weight: bold;
  }

  &:nth-child(3) {
    background-color: #F0FBF9;
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: bold;
  }

  &:nth-child(4) {
    background-color: #3BD5B0;
    padding: 4px 24px;
    border-radius: 4px;
    font-weight: bold;
  }

  &:nth-child(5) {
    background-color: #036B52;
    padding: 4px 6px;
    border-radius: 4px;
    color: white;
  }
`;

function DetailsCustomer() {
  return (
    <Container>
      <Head>
        <Header>PEDIDO 003</Header>
        <Header>P. Venda: Fulana de Tal</Header>
        <Header>07/04/2021</Header>
        <Header>ENTREGUE</Header>
        <Header>MARCAR COMO ENTREGUE</Header>
      </Head>
      <Table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>1</Td>
            <Td>Cerveja Heineken 330ml</Td>
            <Td>5</Td>
            <Td>R$7,90</Td>
            <Td>R$15,80</Td>
          </tr>
          <tr>
            <Td>2</Td>
            <Td>Cerveja Brahma 330ml</Td>
            <Td>5</Td>
            <Td>R$7,90</Td>
            <Td>R$15,80</Td>
          </tr>
          <tr>
            <Td>3</Td>
            <Td>Cerveja Skoll 330ml</Td>
            <Td>5</Td>
            <Td>R$7,90</Td>
            <Td>R$15,80</Td>
          </tr>
          <tr>
            <Td>4</Td>
            <Td>Cerveja Dolly 330ml</Td>
            <Td>5</Td>
            <Td>R$7,90</Td>
            <Td>R$15,80</Td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default DetailsCustomer;
