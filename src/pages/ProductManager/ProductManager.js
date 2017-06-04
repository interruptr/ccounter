import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './ProductManager.css';
import Layout from './../../components/Layout';
import Header from './../../components/Header/Header';
import Title from './../../components/Header/Title';
import Button, { green } from './../../components/Button';
import Subtitle from './../../components/Header/Subtitle';
import EditableProductList from './../../components/EditableProductList/EditableProductList';
import EditableProductItem from './../../components/EditableProductItem/EditableProductItem';
import { deleteProduct, createProduct } from '../../actions/managedProductActions';

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
            <Layout>
                <Header>
                    <Title>Product Manager</Title>
                    <Subtitle>Create, edit, remove products at your will</Subtitle>
                </Header>

                <EditableProductList>
                    {
                        this.props.managedProducts.map((product, index) => (
                            <EditableProductItem key={ index }
                                                 product={ product }
                                                 onClickUpdate={ () => this.updateProduct(product) }
                                                 onClickDelete={ () => this.props.deleteProduct(product) }
                            />
                        ))
                    }
                </EditableProductList>

                <Link to="/product"><Button color={ green }>Create New</Button></Link>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
        managedProducts: state.managedProducts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createProduct: product => dispatch(createProduct(product)),
        deleteProduct: product => dispatch(deleteProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductManager);
