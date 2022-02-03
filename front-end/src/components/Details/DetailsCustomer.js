import React from 'react';
import { Container2, Td2, Table2, Head2, Header2 } from './styles';

function DetailsCustomer() {
  return (
    <Container2>
      <Head2>
        <Header2>PEDIDO 003</Header2>
        <Header2>P. Venda: Fulana de Tal</Header2>
        <Header2>07/04/2021</Header2>
        <Header2>ENTREGUE</Header2>
        <Header2>MARCAR COMO ENTREGUE</Header2>
      </Head2>
      <Table2>
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
            <Td2>1</Td2>
            <Td2>Cerveja Heineken 330ml</Td2>
            <Td2>5</Td2>
            <Td2>R$7,90</Td2>
            <Td2>R$15,80</Td2>
          </tr>
          <tr>
            <Td2>2</Td2>
            <Td2>Cerveja Brahma 330ml</Td2>
            <Td2>5</Td2>
            <Td2>R$7,90</Td2>
            <Td2>R$15,80</Td2>
          </tr>
          <tr>
            <Td2>3</Td2>
            <Td2>Cerveja Skoll 330ml</Td2>
            <Td2>5</Td2>
            <Td2>R$7,90</Td2>
            <Td2>R$15,80</Td2>
          </tr>
          <tr>
            <Td2>4</Td2>
            <Td2>Cerveja Dolly 330ml</Td2>
            <Td2>5</Td2>
            <Td2>R$7,90</Td2>
            <Td2>R$15,80</Td2>
          </tr>
        </tbody>
      </Table2>
    </Container2>
  );
}

export default DetailsCustomer;
