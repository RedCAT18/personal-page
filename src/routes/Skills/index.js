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
    if (y > 1024 - height / 3) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  return (
    <Container>
      <div className="skills__container">
        <h1>Skills & Abilities</h1>
        <div className="skills__content">
          {skillsData?.map(data => (
            <CSSTransition
              in={show}
              timeout={data.id * 300}
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
