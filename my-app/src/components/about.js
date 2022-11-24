import React from 'react'
import { Link } from 'react-router-dom';

import aboutImage from './images/about.jpeg'
import './about.css';

function about() {
    return (
        <div className='about-container'>
            <div className='about-image'>
                <img src={aboutImage} alt='' />
            </div>
            <div className='about-content'>
                <div className='about-title'>
                    <h3>About Us</h3>
                </div>
                <div className='about-body'>
                    <p>TAILS Information</p>
                </div>
            </div>
            
            <div className='btn'>
                <button>
                    
                    <Link to="/about">
                        VIEW
                    </Link>
                    
                </button>
            </div>
            
        </div>
    )
}

export default about