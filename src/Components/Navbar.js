import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar bg-primary navbar-dark">
                    {/* <Link to="/">
                    <img>
                    </Link> */}
                    <ul class="navbar-nav align-item-center">
                        
                       
                        <li className="nav-item ml-5">
                        <Link to="/product" className="nav-link">
                            PRODUCTS
                            </Link>
                        </li>
                        <button className="btn btn outline-light">Cart</button>
                </ul>

                
            </nav>
        )
    }
}
