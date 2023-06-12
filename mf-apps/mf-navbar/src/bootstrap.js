import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const fetch_el = document.getElementById('app');
const mount = (el) => {
  ReactDOM.render(<App />, el);
}

if (fetch_el) {
  mount(fetch_el);
}

export { mount }
