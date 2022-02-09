import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Label, Button, Input, Select } from './styles';

// const payload = {
//   totalPrice: 200.15,
//   deliveryAddress: 'Trybe',
//   deliveryNumber: 22,
//   userId: 4,
//   sellerId: 2,
// };

function CheckoutDelivery() {
  const [sellers, setSellers] = useState([]);
  const [sellerName, setSellerName] = useState('');
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [userId, setUserId] = useState(null);
  const [sellerId, setSellerId] = useState(null);

  const handleSeller = (e) => {
    const getSellerId = sellers.find(({ name }) => name === e.target.value).id;
    setSellerId(getSellerId);
    setSellerName(e.target.value);
  };
  const handleAddress = (e) => setAddress(e.target.value);
  const handleNumber = (e) => setAddressNumber(e.target.value);

  // useEffect(() => {
  //   console.log(seller, address, addressNumber);
  // }, [seller, address, addressNumber]);

  const navigate = useNavigate();
  const products = Object.values(JSON.parse(localStorage.getItem('carrinho')))
    .map((product, id) => ({ id: id + 1, ...product }))
    .filter(({ quantity }) => quantity);

  const createSale = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const totalPrice = Object.values(JSON.parse(localStorage.getItem('carrinho')))
      .reduce((subtotal, { subTotal }) => subtotal + subTotal, 0);

    const payload = {
      totalPrice,
      userId,
      sellerId,
      products,
      deliveryAddress: address,
      deliveryNumber: addressNumber,
    };
    console.log(payload);
    const sale = await fetch('http://localhost:3001/sales', {
      method: 'POST',
      headers: new Headers({
        Authorization: token,
        'Content-Type': 'application/json',
      }),
      // Todo: Alterar payload estático
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
    <Form action="">
      <Label htmlFor="select-seller">
        P. Vendedora Responsável
        <Select
          onChange={ handleSeller }
          value={ sellerName }
          data-testid="customer_checkout__select-seller"
          name="select-seller"
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
        onClick={ createSale }
        data-testid="customer_checkout__button-submit-order"
        type="button"
      >
        FINALIZAR PEDIDO
      </Button>
    </Form>
  );
}

export default CheckoutDelivery;
