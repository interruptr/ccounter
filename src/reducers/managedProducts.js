import { CREATE_PRODUCT, PRODUCTS_LOADED, DELETE_PRODUCT } from "./../actions/actionTypes";

export default function productReducer(state = [], action) {
    switch (action.type) {
        case CREATE_PRODUCT:
            return [
                ...state,
                action.product
            ];

        case DELETE_PRODUCT:
            return state.filter(element => element !== action.product);

        case PRODUCTS_LOADED:
            return action.products;

        default:
            return state;
    }
}