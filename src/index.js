import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const rootEl = document.getElementById('root');
const render = Component =>
  ReactDOM.render(
    <Component />,
    rootEl
  );

render(App);
