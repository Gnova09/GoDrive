import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastSuccess } from './components/toast/toast';
import { AppContextProvider } from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
      <ToastSuccess />
    </AppContextProvider>
  </React.StrictMode>
);

