import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import App from './App';
import store from './app/store';

render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename="/my-lms">
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
