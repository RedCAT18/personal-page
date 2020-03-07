import React from 'react';
import './panel.scss';

import Button from '../Button';

const Panel = ({ children }) => {
  return (
    <div className="panel__container">
      <div className="panel__content">{children}</div>
      <div className="panel__button">
        <Button>Close</Button>
      </div>
    </div>
  );
};

export default Panel;
