import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src="https://ik.imagekit.io/Jonnes/INO%20Decors/logo_big.png?updatedAt=1711897135838" alt="" />
            <p>Indoor Outdoor Decors</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src="https://ik.imagekit.io/Jonnes/INO%20Decors/instagram_icon.png?updatedAt=1711897167285" alt="" />
            </div>
            <div className="footer-icons-container">
                <img src="https://ik.imagekit.io/Jonnes/INO%20Decors/pintester_icon.png?updatedAt=1711897195183" alt="" />
            </div>
            <div className="footer-icons-container">
                <img src="https://ik.imagekit.io/Jonnes/INO%20Decors/whatsapp_icon.png?updatedAt=1711897224942" alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @2024 - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer