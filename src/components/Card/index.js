import React from 'react';
import './card.scss';

const Card = ({ children }) => (
  <div className="card__container">{children}</div>
);

export default Card;
