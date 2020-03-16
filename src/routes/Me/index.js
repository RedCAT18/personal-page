import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './me.scss';

import { me } from '../../data/me';

import Container from '../../components/Container';
import Board from '../../components/Board';

const Me = () => {
  const [showMe, setShowMe] = useState(false);

  document.addEventListener('scroll', () => {
    let y = window.scrollY;
    let height = window.innerHeight;

    if (height * 2.6 < y) {
      setShowMe(true);
    } else {
      setShowMe(false);
    }
  });
  return (
    <Container id="me">
      <div className="me__container">
        <div className="me__background"></div>
        <CSSTransition
          in={showMe}
          timeout={800}
          classNames="slideIn"
          unmountOnExit
          mountOnEnter
        >
          <div class="me__boards">
            <Board>
              <div className="me__content">
                <div className="me__title">
                  <h1>{me.name}</h1>
                </div>
                <div className="me__desc">
                  <p className="me__question">Where?</p>
                  <p className="me__answer">{me.live}</p>
                  <p className="me__question">Nationality?</p>
                  <p className="me__answer">{me.pob}</p>
                  <p className="me__question">Languages?</p>
                  <p className="me__answer">{me.lang}</p>
                  <p className="me__question">Love?</p>
                  <p className="me__answer">{me.love}</p>
                </div>
              </div>
            </Board>
            <Board>
              <div className="me__content">
                <div className="me__title">
                  <h1>Contact</h1>
                </div>
                <div className="me__desc">
                  <p className="me__question">E-Mail</p>
                  <p className="me__answer">{me.email}</p>
                </div>
              </div>
            </Board>
          </div>
        </CSSTransition>
      </div>
    </Container>
  );
};

export default Me;
