import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Label, Button, Input, Select } from './styles';

function CheckoutDelivery() {
  const [sellers, setSellers] = useState([]);
  const [sellerName, setSellerName] = useState('');
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [userId, setUserId] = useState(null);

  const handleSeller = (e) => {
    setSellerName(e.target.value);
  };

  const handleAddress = (e) => setAddress(e.target.value);
  const handleNumber = (e) => setAddressNumber(e.target.value);

  const navigate = useNavigate();
  const products = Object.values(JSON.parse(localStorage.getItem('carrinho')))
    .map((product, id) => ({ id: id + 1, ...product }))
    .filter(({ quantity }) => quantity);

  const createSale = async (e) => {
    e.preventDefault();
    const { token } = JSON.parse(localStorage.getItem('user'));
    const totalPrice = Object.values(JSON.parse(localStorage.getItem('carrinho')))
      .reduce((subtotal, { subTotal }) => subtotal + subTotal, 0);

    const { id: sellerId } = sellers
      .find(({ name }) => name === e.target.elements.select.value);

    const payload = {
      totalPrice,
      userId,
      sellerId,
      products,
      deliveryAddress: address,
      deliveryNumber: addressNumber,
    };

    const sale = await fetch('http://localhost:3001/sales', {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const response = await sale.json();

    localStorage.removeItem('carrinho');

    navigate(`/customer/orders/${response.id}`);
  };

  useEffect(() => {
    const customerName = JSON.parse(localStorage.getItem('user')).name;
    const getSellers = async () => {
      const sellersAll = await fetch('http://localhost:3001/user');
      const data = await sellersAll.json();
      const sellersOnly = data.filter(({ role }) => role === 'seller');

      const getUserId = data.find(({ name }) => name === customerName).id;
      setUserId(getUserId);
      setSellers(sellersOnly);
    };
    getSellers();
  }, [sellers]);

  return (
    <Form onSubmit={ createSale }>
      <Label htmlFor="select-seller">
        P. Vendedora Responsável
        <Select
          onChange={ handleSeller }
          value={ sellerName }
          data-testid="customer_checkout__select-seller"
          name="select"
          id="select-seller"
        >
          {
            sellers.map(({ name }, i) => (
              <option key={ i } value={ name }>
                { name }
              </option>
            ))
          }
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
          data-testid="customer_checkout__input-addressNumber"
          type="number"
          name="input-address"
        />
      </Label>

      <Button
        data-testid="customer_checkout__button-submit-order"
        type="submit"
      >
        FINALIZAR PEDIDO
      </Button>
    </Form>
  );
}

export default CheckoutDelivery;
