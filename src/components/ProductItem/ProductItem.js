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
            <div className="product-item list-group-item">
                <div className="product-title list-group-item-heading">
                    { this.props.item.name }
                </div>
                <div className="product-description list-group-item-text">
                    <span>{ Math.round(this.props.item.calories) } calories</span>
                    <span>{ Math.round(this.props.item.macros.protein) }g protein</span>
                    <span>{ Math.round(this.props.item.macros.carbs) }g carbohydrates</span>
                    <span>{ Math.round(this.props.item.macros.fat) }g fat</span>

                    <span className="product-amount">
                        <input onChange={ this.recalculate } type="number" value={ this.amount } />
                    </span>

                    {
                        this.props.item.name &&
                        <button className="btn btn-default"
                                onClick={ () => this.props.removeProduct(this.props.item) }>
                            x
                        </button>
                    }
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