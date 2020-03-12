import React from 'react';
import './me.scss';

import { me } from '../../data/me';

import Container from '../../components/Container';
import Board from '../../components/Board';

const Me = () => {
  return (
    <Container>
      <div class="me__container">
        <div class="me__background"></div>
        <Board>
          <div className="me__content">
            <div className="me__title">
              <h1>{me.name}</h1>
            </div>
            <div className="me__desc">
              <p className="me__question">Where?</p>
              <p className="me__answer">{me.live}</p>
              <p className="me__question">Visa?</p>
              <p className="me__answer">{me.visa}</p>
              <p className="me__question">Nationality?</p>
              <p className="me__answer">{me.pob}</p>
              <p className="me__question">Languages?</p>
              <p className="me__answer">{me.lang}</p>
              <p className="me__question">Love?</p>
              <p className="me__answer">{me.love}</p>
            </div>
          </div>
        </Board>
      </div>
    </Container>
  );
};

export default Me;
