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
    color: #F2FFFC;
  }
  &:nth-child(6) {
    background-color: #2FC18C;
    border-radius: 0 6px 6px 0;
    color: #F2FFFC;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
`;

export const Th = styled.th`
  font-family: 'Nunito', sans-serif;
`;

function CheckoutItems() {
  return (
    <Table>
      <tbody>
        <tr>
          <Th>Item</Th>
          <Th>Descrição</Th>
          <Th>Quantidade</Th>
          <Th>Valor Unitário</Th>
          <Th>Sub-total</Th>
          <Th>Remover Item</Th>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <Td>2</Td>
          <Td>Cerveja Heineken 330ml</Td>
          <Td>5</Td>
          <Td>R$7,90</Td>
          <Td>R$15,80</Td>
          <Td>Remover</Td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <Td>2</Td>
          <Td>Cerveja Heineken 330ml</Td>
          <Td>5</Td>
          <Td>R$7,90</Td>
          <Td>R$15,80</Td>
          <Td>Remover</Td>
        </tr>
      </tbody>
    </Table>
  );
}

export default CheckoutItems;
