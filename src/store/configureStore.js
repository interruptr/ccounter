import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers';
import { loadState, saveState } from './localStorage';
import { loadProducts } from '../actions/managedProductActions';
import throttle from 'lodash/throttle';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
    const persistedState = loadState(),
          store = createStore(
              rootReducer,
              persistedState,
              composeWithDevTools(
                  applyMiddleware(thunk)
              )
          );

    // if there are no products, add action to dispatch once store is loaded
    if (!store.managedProducts) {
        store.dispatch(loadProducts());
    }

    store.subscribe(throttle(() => saveState(store.getState()), 1000));

    return store;
};

export default configureStore;