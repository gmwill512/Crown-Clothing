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
import CheckoutPage from './pages/check-out-page/checkout';
// import { setCurrentUser } from './redux/user/user.action';
// import { selectCurrentUser } from './redux/user/user-selector';
// import { createStructuredSelector } from 'reselect';

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
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
// const mapStateToProps= createStructureSelector({
//   currentUser: selectCurrentUser
// })

export default connect(null, mapDispatchToProps)(App);
