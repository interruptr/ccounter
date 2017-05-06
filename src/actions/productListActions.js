import productApi from "../api/mockProductApi";
import { ADD_PRODUCT, MODIFY_PRODUCT_AMOUNT, REMOVE_PRODUCT } from "./actionTypes";

export function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        product
    };
}

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
    };

    return {
        type: MODIFY_PRODUCT_AMOUNT,
        product,
        payload
    }
}

export function removeProduct(product) {
    return {
        type: REMOVE_PRODUCT,
        product
    }
}