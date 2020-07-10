import React from 'react';
import './Spinner.css';
import spinnerImage from './images/spinner.svg';

function Spinner({ size }) {
  return (
    <div className="spinner">
      <img
        className="spinner__image"
        src={spinnerImage}
        width={size}
        alt="loading progress spinner"
      />
    </div>
  );
}

export default Spinner;
