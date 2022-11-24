import React from 'react'
import { Link } from 'react-router-dom';

import './content.css';
import background from './images/header-abandon.jpeg';

const Content = () => {
    return (
            <div className='content'>
                <img src={background} className='Background' alt='Background' width="100%" />
                <div className='content-text'>
                    <h1>Giving Them a Happy Life</h1>
                </div>
            </div>
    )
}

export default Content