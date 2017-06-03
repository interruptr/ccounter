import React from 'react';
import './Header.css';

const Header = (props) => (
    <div className="app-header">
        {props.children}
    </div>
);

export default Header;