import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

ReactDOM.render(
  <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
  </Router>,
  document.getElementById('root')
);

