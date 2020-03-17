import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import './header.scss';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faInstagramSquare
} from '@fortawesome/free-brands-svg-icons';

import { sns } from '../../data/me';

const Header = () => {
  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow(!show);
  };

  const getIcon = type => {
    switch (type) {
      case 'github':
        return faGithub;

      case 'linkedin':
        return faLinkedin;

      case 'instagram':
        return faInstagramSquare;

      default:
        return;
    }
  };

  return (
    <CSSTransition in={show} timeout={800} classNames="slide">
      <div className="header header__shadow">
        <div className="header__container">
          <div className="header__contents">
            <div className="header__title">
              <h1>Kayoung Erica Seo</h1>
            </div>
            <div className="header__icons">
              {sns?.map(s => (
                <a
                  href={s.url}
                  key={s.id}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="header__icon"
                >
                  <FontAwesomeIcon icon={getIcon(s.type)} size="2x" />
                </a>
              ))}

              {/* <FontAwesomeIcon icon={faGithub} size="2x" />
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
              <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
              <FontAwesomeIcon icon={faDiscord} size="2x" /> */}
            </div>
          </div>
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
