import './About.css';
export default function About () {
return (
<div className = "about">
  <div className='about-first'>
  <img src="images/header-abandon.jpeg" className="about-img" alt = "about-img" width="100%"/>
    <div className = "about-text">

     <h1 className="about-title">CAN WE COME OVER</h1>
     <h2 className = "about-sectitle">Help Us, Help Them</h2>
     <p>
      Please let us know which animal you are protecting or which abandoned animal you found.
      The Tails has responded to animals in need through the generous support of individuals, businesses, and foundations. We provide shelter, food, medical treatment, love and care to every animal that is brought to our facility. Our mission is to promote the humane treatment of animals through care, education, and advocacy.</p>
      </div>
    </div>
    <div className = "how">
      <div className = "how-text">
        <h2 className = "about-sectitle">How to Use Website</h2>
          <p>1. We recommend "Sign Up / Sign In"
          </p><p>2. If you find an abandoned animal, press "Animal register" at the top to let us know the animal. If we judge they need help, we will contact you with the contact information written.
          </p><p>3. Check information about abandoned animal
          </p><p>4. Please feel free to contact us </p>
      </div>
    </div>
</div>

);
}
