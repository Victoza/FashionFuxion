import React, { useContext, useState } from 'react'
import { ShopContext } from './ShopContext'
import { Link } from 'react-router-dom'
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

const ProductList = () => {
  const { products, addToCart } = useContext(ShopContext)

  // store liked products by id
  const [likedItems, setLikedItems] = useState({})

  const toggleLike = (id) => {
    setLikedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <div className='py-12 px-4 max-w-7xl mx-auto bg-[radial-gradient(circle,_#fafafa_0%,_#e5e5e5_40%,_#fafafa_80%)]'>
      
      <h2 className='text-center text-2xl font-medium my-8'>SHOP OUR RANGE</h2>
      <h2 className='text-4xl font-bold text-center mb-10 text-gray-800'>
        Our Unique Collection
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>

        {products.map((product) => {
          const { id, name, image, price } = product
          const isLiked = likedItems[id]

          return (
            <div key={id} className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group'>

              <Link to={`/product/${id}`}>
                <img src={image} alt={name} className='w-full h-80 object-cover' />
              </Link>

              <div className='p-6'>

                <h4 className='text-xl font-semibold text-gray-900 mb-2 truncate'>
                  {name}
                </h4>

                <p className='text-2xl font-bold text-gray-700 mb-4'>
                  ${price}
                </p>

                <div className='flex justify-center items-center'>

                  <button
                    className='flex justify-center w-full bg-black text-white py-3 px-4 mr-8 rounded-lg font-medium hover:bg-gray-800 transition'
                    onClick={() => addToCart(product, id)}
                  >
                    Add to Cart
                  </button>

                  {/* LIKE BUTTON */}
                  <div
                    onClick={() => toggleLike(id)}
                    className='flex justify-center items-center cursor-pointer bg-gray-800 p-3 rounded-full hover:scale-105 transition'
                  >
                    {isLiked ? (
                      <IoMdHeart size={28} className='text-red-500' />
                    ) : (
                      <IoMdHeartEmpty size={28} className='text-white' />
                    )}
                  </div>

                </div>

              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default ProductList