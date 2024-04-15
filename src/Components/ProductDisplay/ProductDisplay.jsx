import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart} = useContext(ShopContext);
     return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src='https://ik.imagekit.io/Jonnes/INO%20Decors/star_icon.png?updatedAt=1712390044868' alt="" />
                <img src='https://ik.imagekit.io/Jonnes/INO%20Decors/star_icon.png?updatedAt=1712390044868' alt="" />
                <img src='https://ik.imagekit.io/Jonnes/INO%20Decors/star_icon.png?updatedAt=1712390044868' alt="" />
                <img src='https://ik.imagekit.io/Jonnes/INO%20Decors/star_icon.png?updatedAt=1712390044868' alt="" />
                <img src='https://ik.imagekit.io/Jonnes/INO%20Decors/star_dull_icon.png?updatedAt=1712390101831' alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">Ksh{product.old_price}</div>
                <div className="productdisplay-right-price-new">Ksh{product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
            The delicate petals of the flower gently unfurl like whispers of dawn, revealing a mesmerizing array of hues that dance in harmony with the sun's tender caress.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XXl</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span>Carpets and Curtains, Carpets, Rug Carpets</p>
            <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay