import React from 'react'
import { Link } from 'react-router-dom';

import './adoptView.css';
import dog1 from './images/dog1.jpg'
import dog2 from './images/dog2.jpg'
import dog3 from './images/dog3.jpg'
import cat1 from './images/cat1.jpg'
import cat2 from './images/cat2.jpg'
import cat3 from './images/cat3.jpg'

const adoptView = () => {
    return (
        <div className="ViewContainer">

            <h1>I have no idea how to show slide in react</h1>
            <h1>Need to be fixed</h1>

            {/*blow code is not working properly. There's 
            a different way to show slide in react}

        {/* <div className="mySlides">
            <img src={dog1} className='dog1' width="100%" />
        </div>
      
        <div className="mySlides">
            <img src={dog2} className='dog2' width="100%" />
        </div>
      
        <div className="mySlides">
            <img src={dog3} className='dog3' width="100%" />
        </div>
          
        <div className="mySlides">
            <img src={cat1} className='cat1' width="100%" />
        </div>
      
        <div className="mySlides">
            <img src={cat2} className='cat2' width="100%" />
        </div>
          
        <div className="mySlides">
            <img src={cat3} className='cat3' width="100%" />
        </div>
          
        <a className="prev" onClick={()-}>❮</a>
        <a className="next" onClick="plusSlides(1)">❯</a>
      
        <div className="caption-container">
          <p id="caption"></p>
        </div>
      
        <div className="row">
          <div className="column">
            <img src={dog1} className="demo cursor"  width="100%" onClick="currentSlide(1)" alt="BELLA / Male, Young , Mixed Breed " />
          </div>
          <div className="column">
            <img src={dog2} className="demo cursor"  width="100%" onClick="currentSlide(2)" alt="MAX / Felmale, Large, Mixed Breed" />
          </div>
          <div className="column">
            <img src={dog3} className="demo cursor"  width="100%" onClick="currentSlide(3)" alt="KINGSTON / Felmale, Large, Mixed Breed" />
          </div>
          <div className="column">
            <img src={cat1} className="demo cursor"  width="100%" onClick="currentSlide(4)" alt="GIGI / Female, Mixed, 2 years" />
          </div>
          <div className="column">
            <img src={cat2} className="demo cursor"  width="100%" onClick="currentSlide(5)" alt="TOM / Male, Mixed, 3 years" />
          </div>
          <div className="column">
            <img src={cat3} className="demo cursor"  width="100%" onClick="currentSlide(6)" alt="SANDY / Female, Mixed, 2 years" />
          </div>
        </div> */}
      </div>
    )
}

export default adoptView