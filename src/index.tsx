import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Liven from './liven/Liven';
import { StoreProvider } from './liven/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <StoreProvider> {/* Wrap the store around Liven */}
      <Liven />
    </StoreProvider>
  </React.StrictMode>
);
reportWebVitals();
