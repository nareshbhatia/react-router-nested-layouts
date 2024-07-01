import { AppProvider } from './providers';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './globals.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>
);
