import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './helloworld.js';
import Game from "./components/game";
import Counters from "./components/counters";

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);  

ReactDOM.render(
  <Counters />,
  document.getElementById('counter')
);  