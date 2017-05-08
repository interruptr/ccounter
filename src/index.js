import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/CalorieCounter/CalorieCounter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

// You can hydrate the store from the server or local storage here
const store = configureStore();

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
