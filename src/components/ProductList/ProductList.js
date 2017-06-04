import React, { Component } from 'react';
import ProductItem from './../ProductItem/ProductItem';
import Total from './ProductTotal';
import { connect } from 'react-redux';

const style = { width: '100%' };

class ProductList extends Component {
    getTotal() {
        let total = {
            calories: 0,
            macros: {
                protein: 0,
                carbs: 0,
                fat: 0
            }
        };

        this.props.counterProducts.forEach(function(element) {
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
        const total = this.getTotal();

        return (
            <div>
                <table style={ style } className="pure-table pure-table-bordered">
                    {
                        this.props.counterProducts.map((product, index) => (
                            <ProductItem key={ index } item={ product } />
                        ))
                    }
                </table>
                <Total counted={ total } />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counterProducts: state.counterProducts // allows to use this.props.products
    };
}

export default connect(mapStateToProps)(ProductList);