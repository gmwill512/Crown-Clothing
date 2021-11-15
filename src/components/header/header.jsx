import React, { useContext } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { AuthContext } from '../../Context/AuthContext';

function Header() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN-OUT
          </div>
        ) : (
          <Link to="/sign-in" className="option">
            SIGN-IN
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
