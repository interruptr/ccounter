import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadProducts } from './actions/productListActions';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

// You can hydrate the store from the server or local storage here
const store = configureStore();
store.dispatch(loadProducts());

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
