import { connect } from 'react-redux';
import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import './ProductInput.css';

const menuStyle = {
    background: 'white',
    zIndex: 2,
    position: 'fixed',
    paddingTop: '2px'
};

const fetchProducts = (input) => {
    fetch("https://www.kilo.lt/recipes/getProductsJSON/" + input).then(console.log);
};

class ProductInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            searchText: ''
        }
    }

    componentDidMount() {
        this.setState((prevState) => (
            prevState.products.length === 0
                ? Object.assign({}, prevState, {
                    products: this.props.managedProducts
                })
                : prevState
        ));
    }

    fetchProducts(value) {
        const apiBaseUrl = "https://api.nal.usda.gov/ndb/reports/V2?ndbno=01009&ndbno=01009&ndbno=45202763&ndbno=35193&type=b&format=json&api_key=DEMO_KEY";

        return fetch(apiBaseUrl)
            .then((response) => console.log(response));
    }

    onSearchTextChanged(event, value) {
        this.fetchProducts(value);

        this.setState((prevState) => Object.assign({}, prevState, {
            searchText: value,
            products: value
                ? this.props.managedProducts.filter(
                    product => product.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
                )
                : this.props.managedProducts
        }));
    }

    render() {
        let { products, searchText } = this.state;

        return (
            <div className="product-input">
                <Autocomplete inputProps={{ name: 'product', placeholder: 'Enter product name...' }}
                              ref="autocomplete"
                              onChange={ (event, value) => this.onSearchTextChanged(event, value) }
                              value={ searchText }
                              items={ products }
                              onSelect={ (event, item) => this.props.onSelected(item) }
                              getItemValue={ item => item.name }
                              renderItem={item => (
                                  <div>{item.name} ({ item.calories } calories)</div>
                              )}
                              wrapperStyle={ {} }
                              menuStyle={menuStyle}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        managedProducts: state.managedProducts
    }
}

export default connect(mapStateToProps)(ProductInput);