import React from 'react';
import Autocomplete from 'react-autocomplete';
import './ProductInput.css';

const ProductInput = (props) => (
    <div className="product-input">
        <Autocomplete items={ props.dataset }
                      onSelect={ (event, item) => props.onSelected(item) }
                      getItemValue={ item => item.name }
                      placeholder="Product name..."
                      renderItem={item => (
                          <div>{item.name} ({ item.calories } calories)</div>
                      )}
        />
    </div>
);

export default ProductInput;