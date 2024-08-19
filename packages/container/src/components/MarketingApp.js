import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';

export default ({ isSignedIn }) => {
  const ref = useRef(null);
  const history = useHistory();
  //make sure run only one time
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname: currentPathname } = history.location;
        if (currentPathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      isSignedIn,
    });
    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref}></div>;
};
