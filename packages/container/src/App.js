import React from 'react';
import MarketingApp from './components/MarketingApp';
import Headder from './components/Header';
import { BrowserRouter } from 'react-router-dom';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Headder />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};
