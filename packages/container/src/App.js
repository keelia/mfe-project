import React from 'react';
import MarketingApp from './components/MarketingApp';
import Headder from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'container-',
  seed: 'container',
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Headder />
          <MarketingApp />
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
