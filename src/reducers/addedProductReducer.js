import { ADD_PRODUCT, MODIFY_PRODUCT_AMOUNT, REMOVE_PRODUCT } from "./../actions/actionTypes";

export default function addedProductReducer(state = [], action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return [
                ...state, 
                Object.assign({}, action.product)
            ];

        case MODIFY_PRODUCT_AMOUNT:
            return state.map(product => {
                if (product.id === action.product.id) {
                    return { ...product, ...action.payload }
                }

                return product;
            });

        case REMOVE_PRODUCT:
            return state.filter(product => product.id !== action.product.id);

        default:
            return state;
    }
}