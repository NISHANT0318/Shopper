import React, { useContext } from 'react'
import './RelatedProducts.css'
// import data_product from '../Assets/Assets/all_product'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'

const RelatedProducts = ({category}) => {
    const {all_products} = useContext(ShopContext)

    const filteredProducts = all_products.filter(product => product.category ===category )
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {filteredProducts.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
export default RelatedProducts;