import React, { Component } from 'react';
import './ProductItem.css';

class ProductItem extends Component {
    render() {
        return (
            <div className="product-item">
                <span>Apple</span>
                <span>38 calories</span>
                <span>9 carbohydrates</span>
                <span>1 protein</span>
                <span>0 fat</span>
            </div>
        )
    }
}

export default ProductItem;