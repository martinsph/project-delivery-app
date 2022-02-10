import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import Panel from '../../components/Orders';
import { Page, Container } from './styles';

function CustomerOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const { name } = JSON.parse(localStorage.getItem('user'));
    const getUsers = async () => {
      const customers = await fetch('http://localhost:3001/user');
      const users = await customers.json();
      const { id } = users.find((user) => user.name === name);

      const getOrders = await fetch(`http://localhost:3001/sales/customer/${id}`);
      const customerOrders = await getOrders.json();
      setOrders(customerOrders);
    };

    getUsers();
  }, []);

  return (
    <Page>
      <NavBar userRole="customer" />
      <Container>
        { orders.map((order, i) => <Panel key={ i } order={ order } />) }
      </Container>
    </Page>
  );
}

export default CustomerOrders;
