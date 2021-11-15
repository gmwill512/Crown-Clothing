import React, { useContext } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { AuthContext } from '../../Context/AuthContext';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

function Header({ hidden }) {
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
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = ({ cart: { hidden } }) => ({
  // currentUser: state.user.currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
