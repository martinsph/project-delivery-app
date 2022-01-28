import React from 'react';
import styled from 'styled-components';

export const Label = styled.label`
  display: inline-flex;
  flex-direction: column;
  margin-left: 30px;

  &:nth-child(1) {
    width:250px;
  }

  &:nth-child(2) {
    width:500px;
  }

  &:nth-child(3) {
    width:100px;
  }
`;

export const Button = styled.button`
  display: flex;
  padding: 6px;
  background-color: #036B52;
  color: #F2FFFC;
  border: none;
  box-shadow: 0 8px 4px -4px #00000050;
  border-radius: 6px;
  margin: auto;
  margin-top: 30px;
  height: 40px;
  font-weight: bold;
  align-items: center;
  transition: 100ms;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 0 0 0;
  }
`;

export const Input = styled.input`
  border-radius: 4px;
  height: 40px;
`;

export const Select = styled.select`
  border-radius: 4px;
  height: 40px;
`;

function CheckoutDelivery() {
  return (
    <form action="">
      <Label htmlFor="select-seller">
        P. Vendedora Responsável
        <Select
          data-testid="customer_checkout__select-seller"
          name="select-seller"
          id="select-seller"
        >
          <option>
            Fulana de tal
          </option>
        </Select>
      </Label>

      <Label htmlFor="input-address">
        Endereço
        <Input
          data-testid="customer_checkout__input-address"
          type="text"
          name="input-address"
        />
      </Label>

      <Label htmlFor="input-address">
        Número
        <Input
          data-testid="customer_checkout__input-address"
          type="number"
          name="input-address"
        />
      </Label>

      <Button
        data-testid="customer_checkout__Button-submit-order"
        type="button"
      >
        FINALIZAR PEDIDO
      </Button>
    </form>
  );
}

export default CheckoutDelivery;
