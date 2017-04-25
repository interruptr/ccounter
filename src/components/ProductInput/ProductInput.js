import React, { Component } from 'react';
import './ProductInput.css';

class ProductInput extends Component {
    render() {
        return (
            <div className="product-input">
                <input type="text" name="product"/>
            </div>
        )
    }
}

export default ProductInput;