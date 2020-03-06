import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './navItem.scss';

const NavItem = props => {
  const [show, setShow] = useState(false);
  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <CSSTransition
      in={show}
      timeout={{ enter: 800, exit: 1000 }}
      classNames="hover"
    >
      <div
        className="item__container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="item__color"></div>
        <div className="item__name">
          <span>{props.name}</span>
        </div>
      </div>
    </CSSTransition>
  );
};

export default NavItem;
