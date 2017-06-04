import React from 'react';
import Sidenav from './Sidenav/Sidenav';
import 'purecss';

const Layout = (props) => (
    <div className="layout">
        <Sidenav />
        <div className="content">
            { props.children }
        </div>
    </div>
);

export default Layout;
