import React from 'react'
import { Link } from 'react-router-dom';

import adoptImage from './images/adopt.jpeg'
import './adopt.css';

function adopt() {
    return (
        <div className='adopt-container'>
            <div className='adopt-image'>
                <img src={adoptImage} alt='' />
            </div>
            <div className='adopt-content'>
                <div className='adopt-title'>
                    <h3>Adopt Animals</h3>
                </div>
                <div className='adopt-body'>
                    <p>Pets Available for Adoption</p>
                </div>
            </div>
            
            <div className='btn'>
                <button>
                    <Link to="/adopt">
                        VIEW
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default adopt