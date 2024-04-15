import React from 'react'
import './Hero.css'



const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={'https://ik.imagekit.io/Jonnes/INO%20Decors/hand_icon.png?updatedAt=1711734922372'} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={'https://ik.imagekit.io/Jonnes/INO%20Decors/arrow.png?updatedAt=1711735339839'} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={'https://ik.imagekit.io/Jonnes/INO%20Decors/hero_image%20(1).jpg?updatedAt=1711900981076'} alt="" />
        </div>
    </div>
  )
}

export default Hero