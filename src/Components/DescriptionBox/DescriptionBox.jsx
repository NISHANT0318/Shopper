import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (123)</div>
        </div>
        <div className="descriptionbox-description">
        An ecommerce website is an online platform where style meets convenience. Welcome to SHOPPER, your destination for chic and affordable fashion. Explore our curated collections of trendsetting clothing, from casual essentials to statement pieces. With a commitment to quality and exceptional customer service, we strive to make your shopping experience seamless and enjoyable. Join us and elevate your wardrobe effortlessly.
        </div>
    </div>
  )
}

export default DescriptionBox;