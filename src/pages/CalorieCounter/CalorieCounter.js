import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './CalorieCounter.css';
import Header from './../../components/Header/Header';
import Title from './../../components/Header/Title';
import Subtitle from './../../components/Header/Subtitle';
import ProductList from './../../components/ProductList/ProductList';
import ProductInput from './../../components/ProductInput/ProductInput';
import * as productListActions from './../../actions/productListActions';

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
      <div className="app">
        <Header>
            <Title>Hello</Title>
            <Subtitle>Tell me what You've eaten today...</Subtitle>
        </Header>
        <ProductInput dataset={ this.props.availableProducts } onSelected={ this.addProduct } />
        <br />    
        <ProductList />
          <Link to="/products">Product manager</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        availableProducts: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addProduct: product => dispatch(productListActions.addProduct(product)),
        removeProduct: product => dispatch(productListActions.removeProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
