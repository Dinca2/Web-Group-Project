import React from 'react'
import { Link } from 'react-router-dom';

import './menu.css';
import About from './about'
import Adopt from './adopt'
import Register from './register'

function menu() {
    return (
        <React.Fragment>
            <div className='menu'>
                <About />
                <Adopt />
                <Register /> 
            </div>
            
        </React.Fragment>
        
    )
}

export default menu