import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider
} from '@mui/material/styles';
import App from './App';

const theme = createTheme({
  typography: {
    fontFamily: ['Corporate S Pro'].join(',')
  }
});
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
