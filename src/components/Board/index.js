import React from 'react';
import './board.scss';

const Board = ({ children }) => {
  return <div className="board__container">{children}</div>;
};

export default Board;
