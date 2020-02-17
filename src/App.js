import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <p>Hello</p>
    </ThemeProvider>
  );
}

export default App;
