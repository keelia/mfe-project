import React, { useRef, useEffect } from 'react';
import { mount } from 'dashboard/DashboardApp';

export default () => {
  const ref = useRef(null);
  //make sure run only one time
  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref}></div>;
};
