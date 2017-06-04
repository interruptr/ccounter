import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './ProductForm.css';
import Layout from './../../components/Layout';
import Header from './../../components/Header/Header';
import Title from './../../components/Header/Title';
import Subtitle from './../../components/Header/Subtitle';
import ProductCreationForm from './../../components/ProductCreationForm/ProductCreationForm';
import { createProduct } from '../../actions/managedProductActions';

class ProductForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shouldRedirect: false
        };
    }

    createProduct(product) {
        this.props.createProduct(product);

        this.setState((prevState) => Object.assign({}, prevState, { shouldRedirect: true }));
    }

    render() {
        return (
            <Layout>
                { this.state.shouldRedirect && <Redirect to="/products" />}

                <Header>
                    <Title>Add a new product</Title>
                    <Subtitle>Missing a product in products list? No problem.</Subtitle>
                </Header>

                <ProductCreationForm onClickCreate={ product => this.props.createProduct(product) }/>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
        // Nothing
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createProduct: product => dispatch(createProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);