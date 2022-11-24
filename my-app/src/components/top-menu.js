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
                <div className="widget-container">
                    <nav migration_allowed="1" migrated="0" role="navigation" className='nav-menu'>
                        <ul className = 'menu-ul'>
                        <li className = 'menu-item-login'>
                            <a href = "#signup" id ="item_button_signup">Sign Up</a>
                        </li>
                        <li className = 'menu-item-login'>
                            <a href = "#signin" id ="item_button_signin">Sign In</a>
                        </li>
                        </ul>
                    </nav>
                </div>

            </header>

            
    )
}

export default Header