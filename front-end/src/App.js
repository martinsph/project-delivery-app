import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Products';
import Admin from './pages/Admin';
import Checkout from './pages/Checkout';
import DetailsCustomer from './pages/Details/DetailsOrderCustomer';
import DetailsSeller from './pages/Details/DetailsOrderSeller';
import CustomerOrders from './pages/Orders/CustomerOrders';
// import CustomerOrderId from './pages/Orders/CustomerOrderId';
import SellerOrders from './pages/Orders/SellerOrders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/customer/products" element={ <Product /> } />
        <Route path="/customer/checkout" element={ <Checkout /> } />
        <Route path="/customer/orders" element={ <CustomerOrders /> } />
        <Route path="/customer/orders/:id" element={ <DetailsCustomer /> } />
        <Route path="/seller/orders" element={ <SellerOrders /> } />
        <Route path="/seller/orders/:id" element={ <DetailsSeller /> } />
        <Route path="/admin/manage" element={ <Admin /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
