import React from 'react';
import './home.scss';

import Container from '../../components/Container';
import Panel from '../../components/Panel';

const Home = () => {
  return (
    <div>
      <Container>
        <div className="home__content">
          <h1>Home</h1>
          <Panel>
            <h1>Title</h1>
            <p>Text</p>
          </Panel>
        </div>
      </Container>
    </div>
  );
};

export default Home;
