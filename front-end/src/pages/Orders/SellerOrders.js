import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import Panel from '../../components/Orders';
import { Page2, Container2 } from './styles';

function SellerOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const { name } = JSON.parse(localStorage.getItem('user'));
    const getUsers = async () => {
      const sellers = await fetch('http://localhost:3001/user');
      const users = await sellers.json();
      const { id } = users.find((user) => user.name === name);

      const getOrders = await fetch(`http://localhost:3001/sales/seller/${id}`);
      const sellerOrders = await getOrders.json();
      setOrders(sellerOrders);
    };

    getUsers();
  }, []);

  return (
    <Page2>
      <NavBar userRole="seller" />
      <Container2>
        { orders.map((order, i) => <Panel key={ i } id={ i } order={ order } />) }
      </Container2>
    </Page2>
  );
}

export default SellerOrders;
