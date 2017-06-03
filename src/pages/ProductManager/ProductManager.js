import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './ProductManager.css';
import Header from './../../components/Header/Header';
import Title from './../../components/Header/Title';
import Subtitle from './../../components/Header/Subtitle';
import EditableProductList from './../../components/EditableProductList/EditableProductList';
import EditableProductItem from './../../components/EditableProductItem/EditableProductItem';
import ProductCreationForm from './../../components/ProductCreationForm/ProductCreationForm';
import { deleteProduct, createProduct } from './../../actions/productActions';

class ProductManager extends Component {
    updateProduct(product) {
        console.log(product);
    }

    createProduct(product) {
        return this.props.createProduct({
            id: Date.now(),
            name: product.name,
            calories: product.calories,
            macros: {
                protein: product.protein,
                carbs: product.carbs,
                fat: product.fat
            }
        });
    }

    render() {
        return (
            <div>
                <Header>
                    <Title>Product Manager</Title>
                    <Subtitle>Create, edit, remove products at your will</Subtitle>
                </Header>

                <EditableProductList>
                    {
                        this.props.products.map((product, index) => (
                            <EditableProductItem key={ index }
                                                 product={ product }
                                                 onClickUpdate={ () => this.updateProduct(product) }
                                                 onClickDelete={ () => this.deleteProduct(product) }
                            />
                        ))
                    }
                </EditableProductList>

                <ProductCreationForm onClickCreate={ (product) => this.createProduct(product)} />

                <Link to="/counter">Calorie counter</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createProduct: product => dispatch(createProduct(product)),
        deleteProduct: product => dispatch(deleteProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductManager);
