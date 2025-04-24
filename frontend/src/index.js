import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DolarProvider } from './context/DolarContext';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DolarProvider>
        <App />
      </DolarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
