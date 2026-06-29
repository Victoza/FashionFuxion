import React, { useContext } from "react";
import { ShopContext } from "../assets/Components/ShopContext";
import CartDetails from "./CartDetails";
import { FaTrashCan } from "react-icons/fa6";

const Cart = () => {
  const { cart, total, clearCart, quantity } = useContext(ShopContext);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-[3fr_1fr] gap-8">

        {/* LEFT SECTION */}
        <div className="border rounded-3xl p-6 bg-white">

          <div className="grid grid-cols-4 pb-4 border-b text-gray-500 text-sm font-medium">
            <span>Product</span>
            <span className="text-center">Quantity</span>
            <span className="text-center">Total</span>
            <span className="text-center">Action</span>
          </div>

          {cart.length > 0 ? (
            cart.map((item) => (
              <CartDetails
                item={item}
                key={item.id}
              />
            ))
          ) : (
            <p className="py-10 text-center">
              Your cart is empty
            </p>
          )}

          <button
            
            className="mt-6 bg-black text-white px-8 py-3 rounded-full hover:opacity-90"
          >
            Update Cart
          </button>

        </div>

        {/* RIGHT SECTION */}
        <div className="border rounded-3xl p-6 bg-white h-fit">

          <h2 className="font-semibold text-lg mb-6">
            Order Summary
          </h2>

          <div className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Discount voucher"
              className="border rounded-full px-4 py-2 w-full"
            />

            <button className="border rounded-full px-5">
              Apply
            </button>
          </div>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between">
              <span>Items</span>
              <span>{quantity}</span>
            </div>

            <div className="flex justify-between">
              <span>Sub Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Discount</span>
              <span>$0.00</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>$0.00</span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

          </div>

          <button className="w-full mt-8 bg-black text-white py-4 rounded-full font-medium">
            Checkout Now
          </button>

        </div>

      </div>
    </div>
  );
};

export default Cart;