const ADD_PRODUCT = "product.add";
const CREATE_PRODUCT = "product.create";

export function createProduct(product) {
    return { 
        type: CREATE_PRODUCT, 
        product 
    };
} 

export function addProduct(product) {
    return { 
        type: ADD_PRODUCT, 
        product 
    };
} 