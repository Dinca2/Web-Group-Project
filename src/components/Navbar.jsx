import './Navbar.css';
import AnimalReg from './AnimalReg';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router';

export default function Navbar () {

  return (
    <div className = "top-menu">
        <nav migration_allowed="1" migrated="0" role="navigation">
         <img src = "images/logo.png" className = "logo" alt = "logo" width="150"/>
          <ul className="menu-ul">
            <li className = "menu-item">
              <Link to = "/about" className ="item_button">ABOUT </Link>
            </li>
            <li className = "menu-item">
              <Link to = "/adopt" className ="item_button">ADOPT</Link>
            </li>
            <li className = "menu-item">
              <Link to ="/animalregister" id="animalRegBtn" >ANIMAL REGISTER</Link>
            </li>
            <li className = "menu-item-login">
              <Link to = "/signup" id="signUpBtn">
                <button class="signup-btn" role="button">Sign Up</button>
              </Link>
            </li>
            <li className = "menu-item-login">
              <Link to = "/login" id="loginBtn">
                <button class="signin-btn" role="button">Sign In</button>
              </Link>
            </li>
          
          </ul>
        </nav>
    </div>
  );
}
