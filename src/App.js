import './App.css';
import Homepage from './pages/home-page/homepage.jsx';
import { Route, Routes } from 'react-router-dom';
import HatsPage from './pages/hats-page/hats-page';
import ShopPage from './pages/shop-page/shop-page';
import Header from './components/header/header';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import { auth } from './firebase/firebase.utils';
import React, { useState, useEffect } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribeFromAuth;
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/sign-in" element={<SignInSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
