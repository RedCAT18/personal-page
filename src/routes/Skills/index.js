import React from 'react';
import './skills.scss';

import Container from '../../components/Container';
import Board from '../../components/Board';

const Skills = () => {
  return (
    <Container>
      <div className="skills__container">
        <h1>Skills & Abilities</h1>
        <div className="skills__content">
          <Board>
            <h1>Skill 1</h1>
            <h2>period</h2>
            <p>Description</p>
          </Board>
          <Board>
            <h1>Skill 2</h1>
            <h2>period</h2>
            <p>Description</p>
          </Board>
          <Board>
            <h1>Skill 3</h1>
            <h2>period</h2>
            <p>Description</p>
          </Board>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
