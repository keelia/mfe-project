import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (
  container,
  { onNavigate, defaultHistotry, initialPath, onSignIn } = {}
) => {
  //Create memory history object in bootstrap and pass down to App, instead of creating in App
  //Since history need a bit code to sync current marketing history status with container's history
  const history =
    defaultHistotry ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });
  if (onNavigate) {
    history.listen(onNavigate); //whenever nav changes in marketing call onNavigate
  }
  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, container);
  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname: currentPathname } = history.location;
      if (currentPathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const authOnlyRoot = document.querySelector('#_auth_dev_root');
  if (authOnlyRoot) {
    mount(authOnlyRoot, { defaultHistotry: createBrowserHistory() });
  }
}

export { mount };
