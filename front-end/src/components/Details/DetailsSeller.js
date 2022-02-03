import React from 'react';
import { Container, Td, Table, Head, Header } from './styles';

function DetailsSeller() {
  return (
    <Container>
      <Head>
        <Header>PEDIDO 003</Header>
        <Header>07/04/2021</Header>
        <Header>PENDENTE</Header>
        <Header>PREPARAR PEDIDO</Header>
        <Header>SAIU PARA ENTREGA</Header>
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

export default DetailsSeller;
