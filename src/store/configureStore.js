import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers';
import { loadState, saveState } from './localStorage';
import { loadProducts } from './../actions/productActions';
import throttle from 'lodash/throttle';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const configureStore = () => {
    const persistedState = loadState(),
          store = createStore(
              rootReducer,
              persistedState,
              applyMiddleware(thunk) //reduxImmutableStateInvariant()
          );

    // add action to dispatch once store is loaded
    store.dispatch(loadProducts());

    store.subscribe(throttle(() => saveState(store.getState()), 1000));

    return store;
};

export default configureStore;