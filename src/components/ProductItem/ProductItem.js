import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button, { red } from '../Button';
import * as productListActions from '../../actions/counterProductActions';

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
            <tr>
                <td>
                    { this.props.item.name }
                </td>
                <td>
                    <input onChange={ this.recalculate } type="number" value={ this.amount } />
                </td>
                <td>
                    <span>{ Math.round(this.props.item.macros.protein) }g protein</span>
                </td>
                <td>
                    <span>{ Math.round(this.props.item.macros.carbs) }g carbohydrates</span>
                </td>
                <td>
                    <span>{ Math.round(this.props.item.macros.fat) }g fat</span>
                </td>
                <td >
                    <span>{ Math.round(this.props.item.calories) } calories</span>
                </td>
                <td>
                    {
                        this.props.item.name &&
                        <Button color={ red } className="button"
                                onClick={ () => this.props.removeProduct(this.props.item) }>
                            Remove
                        </Button>
                    }
                </td>
            </tr>
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