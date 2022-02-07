import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Label, Button, Input, Select } from './styles';

function CheckoutDelivery() {
  const navigate = useNavigate();

  const redirectUser = () => {
    navigate('/customer/orders/1');
  };

  return (
    <Form action="">
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
        onClick={ redirectUser }
        data-testid="customer_checkout__Button-submit-order"
        type="button"
      >
        FINALIZAR PEDIDO
      </Button>
    </Form>
  );
}

export default CheckoutDelivery;
