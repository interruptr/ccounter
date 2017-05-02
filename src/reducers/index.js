import { combineReducers } from 'redux';
import products from './productReducer';

const rootReducer = combineReducers({
    products // adds products to state
});

export default rootReducer;
