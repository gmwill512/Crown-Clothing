import React from 'react';
import './custom-button.scss';

function CustomButton({ children, google, ...otherProps }) {
  return (
    <button
      className={`${google ? `google-sign-in` : ``} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
