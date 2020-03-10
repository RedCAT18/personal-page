import React from 'react';
import './skills.scss';

import { skillsData } from '../../data/skills';
import Container from '../../components/Container';
import Board from '../../components/Board';

const Skills = () => {
  return (
    <Container>
      <div className="skills__container">
        <h1>Skills & Abilities</h1>
        <div className="skills__content">
          {skillsData?.map(data => (
            <Board key={data.id}>
              <div className="skills__item">
                <h1>{data.title}</h1>
                {data.description.map((d, idx) => (
                  <p key={idx}>{d}</p>
                ))}
              </div>
            </Board>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Skills;
