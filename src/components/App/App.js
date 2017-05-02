import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './../Header/Header.js';
import ProductList from './../ProductList/ProductList.js';
import ProductInput from './../ProductInput/ProductInput';
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
        <Header />
        <ProductInput onSelected={ this.addProduct } />
        <br />    
        <ProductList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
        addProduct: product => dispatch(productListActions.addProduct(product))
    }
}

export default connect(null, mapDispatchToProps)(App);
