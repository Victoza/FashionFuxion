import React, {useContext} from 'react'
import { ShopContext } from '../assets/Components/ShopContext'
import CartDetails from './CartDetails'
import { FaTrashCan } from 'react-icons/fa6'

const Cart = () => {
  const {cart,total, clearCart, quantity} = useContext(ShopContext)
  return (
    <div>
      <div className="cart-container">
        <div className="cart-left">
          <div className="cart-header">
            <h1>Shopping Cart</h1>
            <h1>Items:({quantity})</h1>
            <h2><FaTrashCan onClick={clearCart} className="cursor-pointer"/></h2>
          </div>
          <div className="cart-header">
            <span>Product Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Total</span>
          </div>
          <div className="card-details">
            {cart.length > 0 ? (cart.map((item)=>(
              <CartDetails item={item} key={item}/>
            ))) : (<p>Your cart is empty</p>)}
          </div>
        </div>
        <div className="cart-right">
          <h2>Cart Summary</h2>
          <div className="summary-tem">
            <span>Items:</span>
            <span>{quantity}</span>
          </div>
          <div className="summary-tem">
            <span>Subtotal</span>
            <span>${total}</span>
          </div>
          <div className="summary-tem">
            <span>Shipping Fee</span>
            <span>Free</span>
          </div>
          <div className="summary-tem">
            <span>Total Cost</span>
            <span>${total}</span>
          </div>
          <button className='check-out'>CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default Cart