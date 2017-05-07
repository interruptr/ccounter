import React, { Component } from 'react';
import Autosuggest, { ItemAdapter } from 'react-bootstrap-autosuggest';
import { connect } from 'react-redux';
import './ProductInput.css';

class ProductAdapter extends ItemAdapter {
    getTextRepresentations(item) {
        return item.name;
    }

    renderItem(item) {
        return (
            <div>{item.name} ({ item.calories } calories)</div>
        );
    }
}

ProductAdapter.instance = new ProductAdapter();

class ProductInput extends Component {
    constructor() {
        super();

        this.availableProducts = [
            {
                id: 1,
                name: "Oats",
                calories: 387,
                macros: {
                    protein: 9,
                    carbs: 63,
                    fat: 6
                }
            },
            {
                id: 2,
                name: "Fish",
                calories: 140,
                macros: {
                    protein: 19,
                    carbs: 2,
                    fat: 6
                }
            },
            {
                id: 3,
                name: "Greens",
                calories: 24,
                macros: {
                    protein: 9,
                    carbs: 24,
                    fat: 0
                }
            }
        ];

        this.onProductSelected = (product) => {
            this.props.onSelected(product);
        }
    }

    render() {
        return (
            <div className="product-input">
                <Autosuggest datalist={ this.props.dataset }
                             onChange={ this.onProductSelected }
                             itemAdapter={ ProductAdapter.instance }
                             valueIsItem={ true }
                             itemReactKeyPropName="name"
                             itemValuePropName="name"
                             placeholder="Product name..." />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        dataset: state.products
    }
}

export default connect(mapStateToProps)(ProductInput);