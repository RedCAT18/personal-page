import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './edu.scss';

import { eduData, careerData } from '../../data/edu';

import Container from '../../components/Container';
import Board from '../../components/Board';
import Card from '../../components/Card';

const Edu = () => {
  const [eduShow, setEduShow] = useState(false);

  document.addEventListener('scroll', () => {
    let y = window.scrollY;
    let height = window.innerHeight;

    if (height * 1.6 < y) {
      setEduShow(true);
    } else {
      setEduShow(false);
    }
  });

  return (
    <Container id="edu">
      <div className="ee__content">
        <div className="ee__title">
          <h1>Education & Experiences</h1>
        </div>
        <CSSTransition
          in={eduShow}
          timeout={800}
          classNames="fade"
          mountOnEnter
          unmountOnExit
        >
          <div className="ee__boards">
            <Board>
              <div className="edu__container">
                <h1>Education</h1>
                {eduData?.map(data => (
                  <Card key={data.id}>
                    <div className="edu__content">
                      <h2>{data.inst}</h2>
                      <h3>
                        {data.title} | {data.period}
                      </h3>
                      <p>{data.degree}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </Board>
            <Board>
              <div className="exp__container">
                <h1>Experiences (Relavant only)</h1>
                {careerData?.map(data => (
                  <Card key={data.id}>
                    <div className="exp__content">
                      <h2>{data.company}</h2>
                      <h3>
                        {data.position} | {data.period}
                      </h3>
                      <div className="exp__desc">
                        {data.description.map((desc, idx) => (
                          <p key={idx}>{desc}</p>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Board>
          </div>
        </CSSTransition>
      </div>
    </Container>
  );
};

export default Edu;
