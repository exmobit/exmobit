import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.scss';
import router from './router';

import AppContextProvider from '@state/context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const App = () => {
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
