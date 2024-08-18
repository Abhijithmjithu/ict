import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/navbar';
import Login from './components/login'; 
import Register from './components/register';
import Home from './components/home';
import Footer from './components/footer';
import Notfound from './components/notfound';
import Description from './components/description';
import AllProducts from './components/allproducts';
import Cart from './components/cart';
import Wishlist from './components/wishlist';
import Shipping from './components/shipping';
import AdminPage from './components/admin';
import Profile from './components/profile';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/product/:id" element={<Description />} />
            <Route path="/notfound" element={<Notfound />} />
            <Route path="*" element={<Notfound />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
