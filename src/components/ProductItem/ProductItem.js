import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProductItem.css';
import * as productListActions from './../../actions/productListActions';

class ProductItem extends Component {
    constructor() {
        super();

        this.amount = 100;
        this.recalculate = this.recalculate.bind(this);
    }

    recalculate(event) {
        this.props.modifyProductAmount(this.props.item, this.amount, event.target.value);
        this.amount = event.target.value;
    }

    render() {
        return (
            <div className="product-item">
                <div className="product-title">
                    { this.props.item.name }
                </div>
                <div className="product-calories">
                    <span>{ Math.round(this.props.item.calories) } calories</span>

                    <div className="product-amount">
                        <input onChange={ this.recalculate } type="number" value={ this.amount } />
                    </div>
                    {
                        this.props.item.name &&
                        <button className="button"
                                onClick={ () => this.props.removeProduct(this.props.item) }>
                            x
                        </button>
                    }
                </div>
                <div className="product-macros">
                    <span>{ Math.round(this.props.item.macros.protein) }g protein</span>
                    <span>{ Math.round(this.props.item.macros.carbs) }g carbohydrates</span>
                    <span>{ Math.round(this.props.item.macros.fat) }g fat</span>
                </div>
            </div>
        )
    }
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        removeProduct: product => dispatch(productListActions.removeProduct(product)),
        modifyProductAmount: (product, previousAmount, amount) => dispatch(productListActions.modifyProductAmount(product, previousAmount, amount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);