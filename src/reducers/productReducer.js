import { CREATE_PRODUCT, PRODUCTS_LOADED } from "./../actions/productActions";

export default function productReducer(state = [], action) {
    switch (action.type) {
        case CREATE_PRODUCT:
            return [
                ...state,
                Object.assign({}, action.product)
            ];

        case PRODUCTS_LOADED:
            return [
                ...state,
                Object.assign({}, action.products)
            ];

        default:
            return state;
    }
}