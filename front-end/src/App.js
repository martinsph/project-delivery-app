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
import SellerOrders from './pages/Orders/SellerOrders';

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
        <Route path="/details/seller" element={ <DetailsSeller /> } />
        <Route path="/orders/customer" element={ <CustomerOrders /> } />
        <Route path="/orders/seller" element={ <SellerOrders /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
