import React from 'react'
import { Link } from 'react-router-dom';

import './content.css';
import background from './images/header-abandon.jpeg';

const Content = () => {
    return (
            <header className='content'>
                <img src={background} class="Background" alt="Background" width="100%" />
                <hi>Can</hi>
            </header>
    )
}

export default Content