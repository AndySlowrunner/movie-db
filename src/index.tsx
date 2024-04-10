import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About } from './components/About/About';
import Movies from './components/Movies/Movies';
import { Provider } from 'react-redux';
import store from './store';

const router = createBrowserRouter(
  [{
    path: '/',
    element:
      <Provider store={store}>
        <App />
      </Provider>,
    children: [{
      path: '/about',
      element: <About />
    },
    {
      path: '/movies',
      element: <Movies />
    }]
  }]
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
