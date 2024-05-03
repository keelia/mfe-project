import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (container) => {
  return ReactDOM.render(<App />, container);
};

if (process.env.NODE_ENV === 'development') {
  const marketingOnlyRoot = document.querySelector('#_marketing_dev_root');
  if (marketingOnlyRoot) {
    mount(marketingOnlyRoot);
  }
}

export { mount };
