import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Label, Button, Input, Select } from './styles';

const payload = {
  totalPrice: 200.15,
  deliveryAddress: 'Trybe',
  deliveryNumber: 22,
  userId: 4,
  sellerId: 2,
};

function CheckoutDelivery() {
  const [seller, setSeller] = useState('');
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');


  const handleSeller = (e) => setSeller(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleNumber = (e) => setAddressNumber(e.target.value);

  useEffect(() => {
    console.log(seller, address, addressNumber);
  }, [seller, address, addressNumber]);

  const navigate = useNavigate();
  const products = Object.values(JSON.parse(localStorage.getItem('carrinho')))
    .map((product, id) => ({ id, ...product }))
    .filter(({ quantity }) => quantity);

  const createSale = async () => {
    const sale = await fetch('http://localhost:3001/sales', {
      method: 'POST',
      headers: new Headers({
        // Authorization: token,
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({ ...payload, products }),
    });

    const response = await sale.json();
    console.log(response);

    navigate(`/customer/orders/${response.id}`);
  };

  return (
    <Form action="">
      <Label htmlFor="select-seller">
        P. Vendedora Responsável
        <Select
          onChange={ handleSeller }
          value={ seller }
          data-testid="customer_checkout__select-seller"
          name="select-seller"
          id="select-seller"
        >
          <option value="Fulana de Tal">
            Fulana de tal
          </option>
          <option value="ABC">
            ABC
          </option>
        </Select>
      </Label>

      <Label htmlFor="input-address">
        Endereço
        <Input
          onChange={ handleAddress }
          data-testid="customer_checkout__input-address"
          type="text"
          name="input-address"
        />
      </Label>
      <Label htmlFor="input-address">
        Número
        <Input
          onChange={ handleNumber }
          data-testid="customer_checkout__input-address"
          type="number"
          name="input-address"
        />
      </Label>

      <Button
        onClick={ createSale }
        data-testid="customer_checkout__Button-submit-order"
        type="button"
      >
        FINALIZAR PEDIDO
      </Button>
    </Form>
  );
}

export default CheckoutDelivery;
