import { createApp } from 'vue';
import Dashboard from './components/Dashboard';

const mount = (container) => {
  const app = createApp(Dashboard);
  app.mount(container);
};
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  const dashboardOnlyRoot = document.querySelector('#_dashboard_dev_root');
  if (dashboardOnlyRoot) {
    mount(dashboardOnlyRoot);
  }
}

export { mount };
