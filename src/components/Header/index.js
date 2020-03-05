import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.scss';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <SwitchTransition mode="out-in">
      {show ? (
        <CSSTransition in={show} timeout={500} classNames="slide">
          <div className="header header__shadow">
            <div className="header__container">
              <button
                className="close__button button__design"
                onClick={toggleShow}
              >
                &#10006;
              </button>
            </div>
          </div>
        </CSSTransition>
      ) : (
        <CSSTransition in={!show} timeout={500} classNames="slide">
          <div className="open__button header__shadow">
            <button className="button__design" onClick={toggleShow}>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </div>
        </CSSTransition>
      )}
    </SwitchTransition>
  );
};

export default Header;
