import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App';

const rootElem = document.getElementById('root');
const createdRoot = createRoot(rootElem);

createdRoot.render(
  <App/>
)