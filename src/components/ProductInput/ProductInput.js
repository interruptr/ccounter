import React from 'react';
import Autosuggest, { ItemAdapter } from 'react-bootstrap-autosuggest';
import './ProductInput.css';

class ProductAdapter extends ItemAdapter {
    getTextRepresentations(item) {
        return item.name;
    }

    renderItem(item) {
        return (
            <div>{item.name} ({ item.calories } calories)</div>
        );
    }
}

ProductAdapter.instance = new ProductAdapter();

const ProductInput = (props) => (
    <div className="product-input">
        <Autosuggest datalist={ props.dataset }
                     onChange={ props.onSelected }
                     itemAdapter={ ProductAdapter.instance }
                     valueIsItem={ true }
                     itemReactKeyPropName="name"
                     itemValuePropName="name"
                     placeholder="Product name..." />
    </div>
);

export default ProductInput;