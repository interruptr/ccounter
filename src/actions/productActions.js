import productApi from "../api/mockProductApi";
import { CREATE_PRODUCT, PRODUCTS_LOADED } from "./actionTypes";

export function createProduct(product) {
    return {
        type: CREATE_PRODUCT,
        product: product
    }
}

export function loadProductsSuccess(products) {
    return {
        type: PRODUCTS_LOADED,
        products
    };
}

export function loadProducts() {
    return function (dispatch) {
        return productApi.getAllProducts() // returns promise
            .then(products => {
                dispatch(loadProductsSuccess(products)); // dispatch an action creator and pass products list
            })
            .catch(error => {
                throw error;
            });
    }
}