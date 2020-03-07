import React from 'react';
import './button.scss';

const Button = ({ children }) => {
  return <button className="button__design">{children}</button>;
};

export default Button;
