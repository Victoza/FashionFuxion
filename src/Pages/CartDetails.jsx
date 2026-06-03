import React, { useContext } from 'react'
import { ShopContext } from '../assets/Components/ShopContext'
import { FaTrash, FaTrashCan } from 'react-icons/fa6'

const CartDetails = ({item}) => {
  const{removeFromCart, increaseQuantity,decreaseQuantity} = useContext(ShopContext)
  const{id,name,image,price,amount} = item
  return (
    <div>
      <div>
        <div className='product-detail'>
          <img src={image} alt="" className='w-100 h-160 object-cover' />
          <div className="product-info">
            <h3>{name}</h3>
            <FaTrashCan onClick={()=>removeFromCart(id)}/>
          </div>
        </div>
        <div className='quantity'>
          <button onClick={()=>decreaseQuantity(id)}>-</button>
          <span>{amount}</span>
          <button onClick={()=>increaseQuantity(id)}>+</button>
        </div>
        <div className='price'>${price}</div>
        <div className='total'>{price*amount}</div>
      </div>
    </div>
  )
}

export default CartDetails