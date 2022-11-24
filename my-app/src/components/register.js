import React from 'react'
import { Link } from 'react-router-dom';

import registerImage from './images/register.jpg'
import './register.css';

function register() {
    return (
        <div className='register-container'>
            <div className='register-image'>
                <img src={registerImage} alt='' />
            </div>
            <div className='register-content'>
                <div className='register-title'>
                    <h3>Register Animals</h3>
                </div>
                <div className='register-body'>
                    <p>Help Animal Rescues</p>
                </div>
            </div>
            
            <div className='btn'>
                <button>
                    <Link to="/register">
                        VIEW
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default register