import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Products';
import Checkout from './pages/Checkout';
import DetailsCustomer from './pages/Details/DetailsOrderCustomer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/products" element={ <Product /> } />
        <Route path="/checkout" element={ <Checkout /> } />
        <Route path="/details/customer" element={ <DetailsCustomer /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
