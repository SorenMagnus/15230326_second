import React from 'react';
import ReactDOM from 'react-dom/client';
import { StateProvider } from './app/state';
import { App } from './app/App';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>
);
