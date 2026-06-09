import React, { useContext } from 'react'
import { ProductData } from '../assets/Components/Data'
import { ShopContext } from '../assets/Components/ShopContext'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { addToCart } = useContext(ShopContext)
  const { id } = useParams()

  const product = ProductData.find(product => product.id === parseInt(id))

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center px-6 py-12">

      <div className="product-detail flex flex-col md:flex-row gap-12 bg-white shadow-xl rounded-2xl p-10 max-w-6xl w-full">

        {/* LEFT */}
        <div className="detail-left flex justify-center items-center bg-gray-100 rounded-xl p-6 w-full md:w-1/2">
          <img
            src={product.image}
            alt=""
            className="w-full h-[450px] object-contain hover:scale-105 transition duration-300"
          />
        </div>

        {/* RIGHT */}
        <div className="detail-right flex flex-col justify-center w-full md:w-1/2">

          <h3 className="py-2 text-3xl font-bold text-gray-900">
            {product.name}
          </h3>

          <p className="py-2 text-2xl font-semibold text-green-600">
            ${product.price}
          </p>

          <p className="py-4 text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product, id)}
            className="mt-6 bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 w-full md:w-fit"
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  )
}

export default ProductDetail