import React from 'react';
import './Button.css';

const Button = ({ text, background, border }) => {
  const styles = {
    background: background,
    border: border,
  };
  return (
    <button className='button' style={styles}>
      {text}
    </button>
  );
};

export default Button;
