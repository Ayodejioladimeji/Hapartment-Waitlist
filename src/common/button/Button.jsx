import React from 'react';
import './Button.css';

const Button = ({ text, background, border }) => {
  return <button className='button'>{text}</button>;
};

export default Button;
