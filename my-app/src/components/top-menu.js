import * as React from 'react';
import { Link } from 'react-router-dom';

import './top-menu.css';
import logo from './images/logo.jpg'

const Header = () => {
    
    return (
            <header className='top-menu'>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </header>
    )
}

export default Header