import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Products';
import Admin from './pages/Admin';
import Checkout from './pages/Checkout';
import DetailsCustomer from './pages/Details/DetailsOrderCustomer';
import OrdersCustomer from './pages/Orders/OrdersCustomers';
import OrdersSellers from './pages/Orders/OrdersSellers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/customer/products" element={ <Product /> } />
        <Route path="/products" element={ <Product /> } />
        <Route path="/admin/manage" element={ <Admin /> } />
        <Route path="/checkout" element={ <Checkout /> } />
        <Route path="/details/customer" element={ <DetailsCustomer /> } />
        <Route path="/orders/customer" element={ <OrdersCustomer /> } />
        <Route path="/orders/seller" element={ <OrdersSellers /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
