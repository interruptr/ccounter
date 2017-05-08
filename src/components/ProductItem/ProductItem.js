import React from 'react';
import './ProductItem.css';

const ProductItem = (props) => {
    let amount = 100;

    const recalculate = (event) => {
        props.updateProductAmount(props.item, amount, event.target.value);
        amount = event.target.value;
    };

    return (
        <div className="product-item list-group-item">
            <div className="product-title list-group-item-heading">
                { props.item.name }
            </div>
            <div className="product-description list-group-item-text">
                <span>{ Math.round(props.item.calories, 2) } calories</span>
                <span>{ Math.round(props.item.macros.protein, 2) }g protein</span>
                <span>{ Math.round(props.item.macros.carbs, 2) }g carbohydrates</span>
                <span>{ Math.round(props.item.macros.fat, 2) }g fat</span>

                <span className="product-amount">
                    <input onChange={ recalculate } type="number" value={ amount } />
                </span>

                {
                    props.item.name &&
                    <button className="btn btn-default"
                            onClick={ () => props.removeProduct(props.item) }>
                        x
                    </button>
                }
            </div>
        </div>
    )
};

export default ProductItem;