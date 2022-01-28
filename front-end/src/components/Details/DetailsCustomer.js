import React from 'react';
import styled from 'styled-components';

export const Td = styled.td`
  text-align: center;
  padding: 6px;

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
  border-collapse: collapse;
`;

export const Head = styled.div`
  display: flex;
  background-color: #EBF1EF;
  padding: 8px;
`;

export const Header = styled.p`
  height: 30px;

  &:nth-child(1) {
    margin-right: 50px
  }

  &:nth-child(2) {
    margin-right: 50px
  }

  &:nth-child(3) {
    background-color: #EFFCF9;
    border-radius: 6px;
    margin-right: 50px
  }

  &:nth-child(4) {
    background-color: #3AD5B0;
    border-radius: 6px;
    margin-right: 50px
  }

  &:nth-child(5) {
    background-color: #036B52;
    border-radius: 6px;
    color: #F2FFFC;
  }
`;

function DetailsCustomer() {
  return (
    <>
      <Head>
        <Header>PEDIDO 003</Header>
        <Header>P. Venda: Fulana de Tal</Header>
        <Header>07/04/2021</Header>
        <Header>ENTREGUE</Header>
        <Header>MARCAR COMO ENTREGUE</Header>
      </Head>
      <Table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <Td>2</Td>
            <Td>Cerveja Heineken 330ml</Td>
            <Td>5</Td>
            <Td>R$7,90</Td>
            <Td>R$15,80</Td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <Td>2</Td>
            <Td>Cerveja Heineken 330ml</Td>
            <Td>5</Td>
            <Td>R$7,90</Td>
            <Td>R$15,80</Td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default DetailsCustomer;
