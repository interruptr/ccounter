import React from 'react';

const EditableProductItem = (props) => (
    <div className="editable-product">
        <div>{ props.product.name }</div>
        <div>{ props.product.calories }</div>
        <div>{ props.product.macros.protein }</div>
        <div>{ props.product.macros.carbs }</div>
        <div>{ props.product.macros.fat }</div>
        <button onClick={props.onClickUpdate}>Update</button>
        <button onClick={props.onClickDelete}>Delete</button>
    </div>
);

export default EditableProductItem;