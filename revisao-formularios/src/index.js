import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './components/Todo';

import './style.css';

ReactDOM.render(
  <section className="container">
    <Todo />
  </section>,
  document.getElementById('root')
);