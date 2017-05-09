import React, { Component } from 'react';
import ProductItem from './../ProductItem/ProductItem';
import * as productListActions from './../../actions/productListActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ProductList.css';

class ProductList extends Component {
    constructor() {
        super();
    }

    getTotal() {
        let total = {
            calories: 0,
            macros: {
                protein: 0,
                carbs: 0,
                fat: 0
            }
        };

        this.props.addedProducts.forEach(function(element) {
            total = {
                calories: total.calories + element.calories,
                macros: {
                    protein: total.macros.protein + element.macros.protein,
                    carbs: total.macros.carbs + element.macros.carbs,
                    fat: total.macros.fat + element.macros.fat
                }
            }
        });

        return <ProductItem item={ total } />
    }

    render() {
        const addedProducts = this.props.addedProducts.map((product, index) => (
                  <ProductItem key={ index }
                               item={ product }
                  />
              )),
              total = this.getTotal();

        return (
            <div>
                <div className="product-list">
                    <div className="list-group">
                        { addedProducts }
                    </div>
                    <div className="list-group total">
                        { total }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        addedProducts: state.addedProducts // allows to use this.props.products
    };
}

ProductList.propTypes = {
    dispatch: PropTypes.func.isRequired,
    addedProducts: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(ProductList);