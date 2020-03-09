import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.scss';
import { CSSTransition } from 'react-transition-group';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <CSSTransition in={show} timeout={800} classNames="slide">
      <div className="header header__shadow">
        <div className="header__container">
          Header
          <div className="open__button header__shadow">
            <button className="header__button" onClick={toggleShow}>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Header;
