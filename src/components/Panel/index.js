import React from 'react';
import './panel.scss';

import Button from '../Button';

const Panel = ({ children, comm, handleClick }) => {
  return (
    <div className="panel__container">
      <div className="panel__content">{children}</div>
      <div className="panel__button">
        <Button handleClick={handleClick} comm={comm}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default Panel;
