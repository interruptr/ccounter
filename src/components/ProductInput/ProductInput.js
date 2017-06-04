import React from 'react';
import Autocomplete from 'react-autocomplete';
import './ProductInput.css';

const menuStyle = {
    background: 'white',
    zIndex: 2,
    position: 'fixed',
    paddingTop: '2px'
};

const ProductInput = (props) => (
    <div className="product-input">
        <Autocomplete items={ props.dataset }
                      onSelect={ (event, item) => props.onSelected(item) }
                      getItemValue={ item => item.name }
                      renderItem={item => (
                          <div>{item.name} ({ item.calories } calories)</div>
                      )}
                      wrapperStyle={ {} }
                      menuStyle={menuStyle}
        />
    </div>
);

export default ProductInput;