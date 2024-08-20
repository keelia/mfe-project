import React, { lazy, Suspense, useState, useEffect } from 'react';
import Headder from './components/Header';
import Progress from './components/Progress';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'container-',
  seed: 'container',
});

//for access browser history instence created by <BrowserRouter/>, so create it manualy
const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
    //no else here otherwise user without signin will always be taken to the else-given route
  }, [isSignedIn]);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <div>
          <Headder
            isSignedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/dashboard">
                {isSignedIn ? <DashboardLazy /> : <Redirect to="/" />}
              </Route>
              <Route path="/">
                <MarketingLazy isSignedIn={isSignedIn} />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    </StylesProvider>
  );
};
