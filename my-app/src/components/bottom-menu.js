import React from 'react'
import { Link } from 'react-router-dom';

import './bottom-menu.css'

const bottom = () => {
    return (
        <div className="bottom-menu">
            
            <div className='bottom-text'>
            {/* <div className = "bottom-headers"> */}
                <h4 className = "bottom-title">Hours of Operation</h4>
                <h4 className = "bottom-title">Address</h4>
                <h4 className = "bottom-title">Get In Touch</h4>
            {/* </div> */}

            {/* <div className = "bottom-para"> */}
                <p className = "bottom-content">Open by appointment</p>
                <p className = "bottom-content">30602 GA Athens</p>
                <p className = "bottom-content">tails@mail.com</p>
            {/* </div> */}
            </div>
            
            <hr width="100%" />

             <p>©2022 TAILS</p>

        </div>
    )
}

export default bottom