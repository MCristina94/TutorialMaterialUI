import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import './index.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#004d40",
    },
    secondary: {
      main: "#f50057",
    },
  },
})
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline/>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
