import React from 'react';
import Button, { red } from '../../components/Button';

const EditableProductItem = (props) => (
    <tr>
        <td>{ props.product.name }</td>
        <td>{ props.product.calories }</td>
        <td>{ props.product.macros.protein }</td>
        <td>{ props.product.macros.carbs }</td>
        <td>{ props.product.macros.fat }</td>
        <td>
                <Button onClick={props.onClickUpdate}>Update</Button>
                <Button color={ red } onClick={props.onClickDelete}>Delete</Button>
        </td>
    </tr>
);

export default EditableProductItem;