import React from 'react';
import './EditableProduct.css';

const EditableProductList = (props) => (
    <div className="list-of-products">
        { props.children }
    </div>
);

export default EditableProductList;