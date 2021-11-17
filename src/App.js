import './App.css';
import Homepage from './pages/home-page/homepage.jsx';
import { Route, Routes, Navigate } from 'react-router-dom';
//import HatsPage from './pages/hats-page/hats-page';

import Header from './components/header/header';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import React from 'react';
import { connect } from 'react-redux';
import CheckoutPage from './pages/check-out-page/checkout';
import { selectCurrentUser } from './redux/user/user-selector';
import { createStructuredSelector } from 'reselect';
import CollectionsOverview from './components/collections-overview/collections-overview';

import Collections from './pages/collection-page/collection';

function App({ currentUser, match }) {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="shop">
          <Route index element={<CollectionsOverview />} />
          <Route path="categories/:collectionid" element={<Collections />} />
        </Route>
        <Route path="checkout" element={<CheckoutPage />} />
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
