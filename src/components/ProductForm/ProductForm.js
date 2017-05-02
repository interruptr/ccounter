import React, { Component } from 'react';

class ProductForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {
                name: "",
                calories: "",
                macros: {
                    protein: 0,
                    carbs: 0,
                    fat: 0
                }
            }
        };

        this.onProductDataChanged = this.onProductDataChanged.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onProductDataChanged(event) {
        const product = this.state.product;
        product.name = event.target.value;

        this.setState({ product: product });
    }

    onClickSave() {
        alert("Saving product:" . this.state.product.name);
    }

    render() {
        return (
            <div>
                <h1>New Product</h1>

                <input type="text" onChange={ this.onProductDataChanged } value={ this.state.product.name } />
                <input type="text" onChange={ this.onProductDataChanged } value={ this.state.product.calories } />
                <input type="text" onChange={ this.onProductDataChanged } value={ this.state.product.macros.carbs } />
                <input type="text" onChange={ this.onProductDataChanged } value={ this.state.product.macros.protein } />
                <input type="text" onChange={ this.onProductDataChanged } value={ this.state.product.macros.fat } />
                
                <input type="submit" value="Save" onClick={ this.onClickSave } />
            </div>
        )
    }
}

export default ProductForm;