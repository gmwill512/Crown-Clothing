import './App.css';
import Homepage from './pages/home-page/homepage.jsx';
import { Route, Routes, Navigate } from 'react-router-dom';
//import HatsPage from './pages/hats-page/hats-page';
import ShopPage from './pages/shop-page/shop-page';
import Header from './components/header/header';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { AuthContext } from './Context/AuthContext';
// import { setCurrentUser } from './redux/user/user.action';

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route
          exact
          path="/sign-in"
          element={
            currentUser ? <Navigate replace to="/" /> : <SignInSignUpPage />
          }
        />
      </Routes>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  // setCurrentUser: user => dispatch(setCurrentUser(user))
}

export default connect(null, mapDispatchToProps)(App);
