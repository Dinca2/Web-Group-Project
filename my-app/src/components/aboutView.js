import React from 'react'
import { Link } from 'react-router-dom';

import './aboutView.css';
import aboutViewBackground from './images/header-abandon.jpeg';
import catOnStreet from './images/cat-on-street.jpeg'

const aboutView = () => {
    return (
            <div className='aboutViewContent'>
                <div className='BackImages'>
                <img src={aboutViewBackground} className='AboutViewBackground' alt='Background' width="100%" />
                <img src={catOnStreet} className='catOnStreet' alt='Background' width="100%" />
                </div>
                <div className='about-content-text'>
                    <div className='canWeComeOver'>
                    <h1>CAN WE COME OVER</h1>
                    <h2>Help Us, Help Them</h2>
                    <p>
      Please let us know which animal you are protecting or which abandoned animal you found.
      The Tails has responded to animals in need through the generous support of individuals, businesses, and foundations. We provide shelter, food, medical treatment, love and care to every animal that is brought to our facility. Our mission is to promote the humane treatment of animals through care, education, and advocacy.
                    </p>
                    </div>
                    <div className='howToAdopt'>
                    <h2>How to Adopt?</h2>
                    <p>
                    Thank you so much for considering an adoption from our shelter! Our goal is to find the pet that is right for YOUR family. The adoption process does require you filling out any paperwork ahead of time.
      If you have another dog at home, and you would like to have a supervised introduction, we can set that up as well. We recommend visiting an animal first to make sure that it is a good candidate for your home. If you decide you would like to proceed with a meet and greet, our staff can coordinate this at the shelter. We have a secured outside fenced in area next to our adoption building that provides ample space for this introduction.
                    </p>
                    </div>
                </div>
            </div>
    )
}

export default aboutView