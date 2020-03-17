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
        <div className="me__narrowTitle">
          <h1>About Me</h1>
        </div>
        <div className="me__background">
          <div className="me__pageTitle">
            <h1>About Me</h1>
          </div>
        </div>
        <div className="me__boards">
          <CSSTransition
            in={showMe}
            timeout={1600}
            classNames="slowSlideIn"
            unmountOnExit
            mountOnEnter
          >
            <Board>
              <div className="me__content">
                <div className="me__title">
                  <h1>{me.name}</h1>
                </div>
                <div className="me__desc">
                  {Object.keys(me).map(key => {
                    const avoid = ['name', 'email', 'discord'];
                    if (avoid.includes(key)) return null;
                    return (
                      <div key={key}>
                        <p className="me__question">{key}?</p>
                        <p className="me__answer">{me[key]}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Board>
          </CSSTransition>
          <CSSTransition
            in={showMe}
            timeout={800}
            classNames="slideIn"
            unmountOnExit
            mountOnEnter
          >
            <Board>
              <div className="me__content">
                <div className="me__title">
                  <h1>Contact</h1>
                </div>
                <div className="me__desc">
                  <p className="me__question">E-Mail</p>
                  <p className="me__answer">{me.email}</p>
                  <p className="me__question">Discord</p>
                  <p className="me__answer">{me.discord}</p>
                </div>
              </div>
            </Board>
          </CSSTransition>
        </div>
      </div>
    </Container>
  );
};

export default Me;
