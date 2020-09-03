import React from 'react';
import { Router } from '@reach/router';
import ErrorBoundary from './helpers/errorBoundary';
import Home from './components/Home';

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Home path="/" />
      </Router>
    </ErrorBoundary>
  );
};

export default App;
