import React, { Component } from 'react';
import './App.css';
import Header from './../Header/Header.js';
import ProductInput from './../ProductInput/ProductInput.js';
import ProductList from './../ProductList/ProductList.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <ProductInput />
        <ProductList />
      </div>
    );
  }
}

export default App;
