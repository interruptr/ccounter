import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CalorieCounter.css';
import Layout from './../../components/Layout';
import Header from './../../components/Header/Header';
import Title from './../../components/Header/Title';
import Subtitle from './../../components/Header/Subtitle';
import ProductList from './../../components/ProductList/ProductList';
import ProductInput from './../../components/ProductInput/ProductInput';
import * as counterProductActions from '../../actions/counterProductActions';

class App extends Component {
    constructor() {
        super();
        this.addProduct = this.addProduct.bind(this);
    }

    addProduct(product) {
        this.props.addProduct(product);
    }
    
    render() {
        return (
            <Layout>
                <Header>
                    <Title>Hello</Title>
                    <Subtitle>Tell me what You've eaten today...</Subtitle>
                </Header>
                <ProductInput dataset={ this.props.managedProducts } onSelected={ this.addProduct } />
                <br />
                <ProductList />
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
        addProduct: product => dispatch(counterProductActions.addProduct(product)),
        removeProduct: product => dispatch(counterProductActions.removeProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
