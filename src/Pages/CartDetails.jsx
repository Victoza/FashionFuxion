import React, { useContext } from 'react'
import { ShopContext } from '../assets/Components/ShopContext'
import { FaTrashCan } from 'react-icons/fa6'

const CartDetails = ({ item }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(ShopContext)

  const { id, name, image, price, amount } = item

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 mb-6">
      <div className="flex items-center justify-between gap-8">

        <div className="product-detail flex items-center gap-5">
          <img
            src={image}
            alt=""
            className="w-32 h-40 object-cover rounded-xl"
          />

          <div className="product-info flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-gray-800">
              {name}
            </h3>

            <FaTrashCan
              onClick={() => removeFromCart(id)}
              className="text-red-500 text-xl cursor-pointer hover:text-red-700 transition"
            />
          </div>
        </div>

        <div className="quantity flex items-center gap-4 border border-gray-300 rounded-full px-4 py-2">
          <button
            onClick={() => decreaseQuantity(id)}
            className="text-lg font-bold hover:text-red-500 transition"
          >
            -
          </button>

          <span className="font-semibold text-lg">
            {amount}
          </span>

          <button
            onClick={() => increaseQuantity(id)}
            className="text-lg font-bold hover:text-green-500 transition"
          >
            +
          </button>
        </div>

        <div className="price text-lg font-medium text-gray-700">
          ${price}
        </div>

        <div className="total text-xl font-bold text-green-600">
          ${(price * amount).toFixed(2)}
        </div>

      </div>
    </div>
  )
}

export default CartDetails