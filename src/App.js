import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

import TodoList from './components/TodoList';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <TodoList/>
    </ThemeProvider>
  );
}

export default App;
