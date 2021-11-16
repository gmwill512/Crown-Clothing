import React from 'react';
import './custom-button.scss';

function CustomButton({ children, google, inverted, ...otherProps }) {
  return (
    <button
      className={`${inverted ? 'inverted' : ''}${
        google ? `google-sign-in` : ``
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
