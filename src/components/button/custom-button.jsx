import React from 'react';
import './custom-button.scss';

function CustomButton({ children, isGoogeleSignIn, ...otherProps }) {
  return (
    <button
      className={`${isGoogeleSignIn ? `google-sign-in` : ``} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
