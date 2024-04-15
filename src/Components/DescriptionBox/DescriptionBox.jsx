import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
            At its heart, a golden crown of pollen beckons to the wandering bee, offering sweet nectar as a gift of nature's grace. The fragrance, a symphony of floral notes mingled with hints of citrus and spice, floats on the breeze, enchanting all who draw near.
            </p>
            <p>
            Standing tall upon a slender stem, adorned with emerald leaves that sway in the gentle rhythm of the wind, the flower embodies elegance and grace, a fleeting beauty captured in a timeless moment of perfection.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox