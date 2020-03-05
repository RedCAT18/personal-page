import React from 'react';
import './App.scss';

import Header from './components/Header';
import Nav from './components/Nav';

import Home from './routes/Home/';
import Edu from './routes/Edu';
import Skills from './routes/Skills';
import Me from './routes/Me';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Home />
      <Skills />
      <Edu />
      <Me />
    </div>
  );
}

export default App;
