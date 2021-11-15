import './App.css';
import Homepage from './pages/home-page/homepage.jsx';
import { Route, Routes } from 'react-router-dom';
//import HatsPage from './pages/hats-page/hats-page';
import ShopPage from './pages/shop-page/shop-page';
import Header from './components/header/header';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/sign-in" element={<SignInSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
