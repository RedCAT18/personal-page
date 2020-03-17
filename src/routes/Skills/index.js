import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './skills.scss';

import { skillsData } from '../../data/skills';
import Container from '../../components/Container';
import Board from '../../components/Board';

const Skills = () => {
  const [show, setShow] = useState(false);

  document.addEventListener('scroll', () => {
    let y = window.scrollY;
    let height = window.innerHeight;
    if (height * 0.4 < y) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  return (
    <Container id="skills">
      <div className="skills__container">
        <div className="skills__title">
          <h1>Skills & Abilities</h1>
        </div>
        <div className="skills__content">
          {skillsData?.map(data => (
            <CSSTransition
              in={show}
              timeout={data.id * 500}
              classNames="item"
              appear
              key={data.id}
              mountOnEnter
              unmountOnExit
            >
              <Board>
                <div className="skills__item">
                  <h1>{data.title}</h1>
                  {data.description.map((d, idx) => (
                    <p key={idx}>{d}</p>
                  ))}
                </div>
              </Board>
            </CSSTransition>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Skills;
