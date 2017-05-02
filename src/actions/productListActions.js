import productApi from "../api/mockProductApi";

const ADD_PRODUCT = "product.add";
const MODIFY_PRODUCT_AMOUNT = "product.modifyAmount"

export function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        product
    };
};

export function modifyProductAmount(product, previousAmount, amount) {
    function multiply(a, b) {
        return (a || 1) * (b || 1);
    }

    let ratio = (amount || 1) / (previousAmount || 1);

    let payload = {
        calories: multiply(product.calories, ratio),
        macros: {
            protein: multiply(product.macros.protein, ratio),
            carbs: multiply(product.macros.carbs, ratio),
            fat: multiply(product.macros.fat, ratio)
        }
    }

    return {
        type: MODIFY_PRODUCT_AMOUNT,
        product,
        payload
    }
}

export function loadProductsSuccess(products) {
    return { type: "products.loaded", products };
}

export function loadProducts() {
    return function (dispatch) {
        return productApi.getAllProducts()
            .then(products => {
                dispatch(loadProductsSuccess(products));
            })
            .catch(error => {
                throw error;
            });
    }
}