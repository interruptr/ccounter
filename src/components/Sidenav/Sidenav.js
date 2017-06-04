import React from 'react';
import { Link } from 'react-router-dom';

const Sidenav = (props) => (
    <div className="pure-menu">
        <h2 className="pure-menu-heading">Calorie counter</h2>
        <ul className="pure-menu-list">
            <div className="pure-menu-item">
                <Link className="pure-menu-link" to="/counter">Calorie counter</Link>
            </div>
            <div className="pure-menu-item">
                <Link className="pure-menu-link" to="/products">Product manager</Link>
            </div>
        </ul>
    </div>
);

export default Sidenav;
