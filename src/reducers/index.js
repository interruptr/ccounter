import { combineReducers } from 'redux';
import products from './productReducer';
import addedProducts from './addedProductReducer';

const rootReducer = combineReducers({
    products,
    addedProducts
});

export default rootReducer;
