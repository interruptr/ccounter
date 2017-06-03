import productApi from "../api/mockProductApi";
import { CREATE_PRODUCT, PRODUCTS_LOADED, DELETE_PRODUCT } from "./actionTypes";

export const createProduct = (product) => ({
    type: CREATE_PRODUCT,
    product: product
});

export const deleteProduct = (product) => ({
    type: DELETE_PRODUCT,
    product: product
});

export const loadProductsSuccess = (products) => ({
    type: PRODUCTS_LOADED,
    products
});

export const loadProducts = () => (function (dispatch) {
    return productApi.getAllProducts() // returns promise
        .then(products => {
            dispatch(loadProductsSuccess(products)); // dispatch an action creator and pass products list
        })
        .catch(error => {
            throw error;
        });
});
