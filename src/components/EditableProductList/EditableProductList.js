import React from 'react';

const style = { width: '100%' };

const EditableProductList = (props) => (
    <table style={ style } className="pure-table pure-table-bordered">
        { props.children }
    </table>
);

export default EditableProductList;