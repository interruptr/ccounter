import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/CalorieCounter/CalorieCounter';
import ProductManager from './pages/ProductManager/ProductManager';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
// import { Router, Route, browserHistory } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';

// You can hydrate the store from the server or local storage here
const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <Switch>
                <Route path="/counter" component={ App } />
                <Route path="/products" component={ ProductManager } />
            </Switch>
        </Router>
    </Provider>,
  document.getElementById('root')
);
