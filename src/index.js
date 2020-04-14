import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/my-lms">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
