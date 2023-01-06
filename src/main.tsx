import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UIProvider } from './stories';
import "./styles/chineseFont.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UIProvider>
      <App />
    </UIProvider>
  </React.StrictMode>
);

postMessage({ payload: 'removeLoading' }, '*');
