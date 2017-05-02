export default function productReducer(state = [], action) {
    switch (action.type) {
        case "products.loaded": 
            return action.products;
        case "product.add":
            return [
                ...state, 
                Object.assign({}, action.product)
            ];
        case "product.create":
            return [
                ...state, 
                Object.assign({}, action.product)
            ]; 
        case "product.modifyAmount":
            const updatedItem = state.map(product => {
                if (product.id === action.product.id) {
                    return { ...product, ...action.payload }
                }

                return product;
            });

            return updatedItem;    
        default: 
            return state;
    }
}