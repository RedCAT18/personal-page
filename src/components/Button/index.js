import React from 'react';
import './button.scss';

const Button = props => {
  const { color, comm, children, handleClick } = props;
  const togglePanel = () => {
    return comm === 'open' ? handleClick(true) : handleClick(false);
  };

  return (
    <button
      onClick={togglePanel}
      className={`button__design ${color === 'dark' ? 'dark__button' : null}`}
    >
      {children}
    </button>
  );
};

export default Button;
