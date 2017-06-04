import { combineReducers } from 'redux';
import managedProducts from './managedProducts';
import counterProducts from './counterProducts';

const rootReducer = combineReducers({
    managedProducts,
    counterProducts
});

export default rootReducer;
