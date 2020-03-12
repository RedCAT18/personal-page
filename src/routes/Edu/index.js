import React from 'react';
import './edu.scss';

import { eduData, careerData } from '../../data/edu';

import Container from '../../components/Container';
import Board from '../../components/Board';
import Card from '../../components/Card';

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
              <h1>Experiences</h1>
              {careerData?.map(data => (
                <Card key={data.id}>
                  <div className="exp__content">
                    <h2>{data.company}</h2>
                    <h3>
                      {data.position} | {data.period}
                    </h3>
                    <div className="exp__desc">
                      {data.description.map(desc => (
                        <p>{desc}</p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Board>
        </div>
      </div>
    </Container>
  );
};

export default Edu;
