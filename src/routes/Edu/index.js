import React from 'react';
import './edu.scss';

import Container from '../../components/Container';
import Board from '../../components/Board';

const Edu = () => {
  return (
    <Container>
      <div className="ee__content">
        <div className="ee__title">
          <h1>Education & Experiences</h1>
        </div>
        <div className="ee__boards">
          <Board>
            <div className="edu__container">
              <h1>Education</h1>
            </div>
          </Board>
          <Board>
            <div className="exp__container">
              <h1>Experiences</h1>
            </div>
          </Board>
        </div>
      </div>
    </Container>
  );
};

export default Edu;
