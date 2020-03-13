import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './home.scss';

import Container from '../../components/Container';
import Panel from '../../components/Panel';
import Button from '../../components/Button';

import { homeData } from '../../data/home';

const Home = () => {
  const [openPanel, setOpenPanel] = useState(false);

  const handlePanel = param => {
    setOpenPanel(param);
  };

  return (
    <>
      <Container id="home">
        <div className="home__content">
          <h1>A Cat On Mars</h1>
          <CSSTransition
            in={!openPanel}
            timeout={700}
            classNames="panel-scale"
            unmountOnExit
          >
            <div className="home__button">
              <Button color={'dark'} comm={'open'} handleClick={handlePanel}>
                I am...
              </Button>
            </div>
          </CSSTransition>
          <CSSTransition
            in={openPanel}
            timeout={700}
            classNames="panel-scale"
            unmountOnExit
          >
            <div className="home__panel">
              <Panel handleClick={handlePanel} comm={'close'}>
                <h1>{homeData.title}</h1>
                <p>{homeData.description}</p>
              </Panel>
            </div>
          </CSSTransition>
        </div>
        <div className="home__background"></div>
      </Container>
    </>
  );
};

export default Home;
