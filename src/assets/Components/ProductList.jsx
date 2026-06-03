import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const {products, addToCart} = useContext(ShopContext)
  return (
    <div className='py-12 px-4 max-w-7xl mx-auto'>
      <h2 className='text-4xl font-bold text-center mb-10 text-gray-800'>OUR UNIQUE COLLECTIONS</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {products.map((product) => {
          const {id, name, image, price} = product
          return (
            <div key={id} className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group'>
              <Link to={`/product/${id}`}>
                <img src={image} alt={name} className='w-full h-80 object-cover'/>
              </Link>
              <div className='p-6'>
                <h4 className='text-xl font-semibold text-gray-900 mb-2 truncate'>{name}</h4>
                <p className='text-2xl font-bold text-gray-700 mb-4'>${price}</p>
                <button
                  className='w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
                  onClick={() => addToCart(product, id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductList