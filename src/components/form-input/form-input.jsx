import React from 'react';
import './form-input.scss';
function FormInputs({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={(e) => handleChange(e)}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInputs;
