import React, { useContext } from 'react'
import { ProductData } from '../assets/Components/Data'
import { ShopContext } from '../assets/Components/ShopContext'
import {useParams} from 'react-router-dom'
const ProductDetail = () => {
  const{addToCart} = useContext(ShopContext)

  const{id} = useParams()
  const product = ProductData.find(product=>{
    return product.id===parseInt(id)
  })

  
  return (
    <div>
      <div className='product-detail flex justify-center gap-8 py-8 px-16'>
        <div className='detail-left '>
          <img src={product.image} alt="" className='w-100 h-160 object-contain '  />
        </div>
        <div className='detail-right py-24 px-16'>
          <h3 className='py-2'>{product.name}</h3>
          <p className='py-2'>${product.price}</p>
          <p className='py-2'>${product.description}</p>
          <button onClick={()=>addToCart(product,id)} className='p-4 bg-gray-500 rounded-2xl cursor-pointer'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail