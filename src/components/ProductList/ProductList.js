import React, { Component } from 'react';
import ProductItem from './../ProductItem/ProductItem';
import './ProductList.css';

class ProductList extends Component {
    render() {
        return (
            <div className="product-list">
                <ul>
                    <li><ProductItem /></li>
                    <li><ProductItem /></li>
                    <li><ProductItem /></li>
                </ul>
            </div>
        )
    }
}

export default ProductList;