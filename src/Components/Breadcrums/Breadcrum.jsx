import React from 'react'
import './Breadcrum.css'

const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
        HOME <img src="https://ik.imagekit.io/Jonnes/INO%20Decors/breadcrum_arrow.png?updatedAt=1712327849376" alt="" /> SHOP <img src="https://ik.imagekit.io/Jonnes/INO%20Decors/breadcrum_arrow.png?updatedAt=1712327849376" alt="" /> {product.category} <img src="https://ik.imagekit.io/Jonnes/INO%20Decors/breadcrum_arrow.png?updatedAt=1712327849376" alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum