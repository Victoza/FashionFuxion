import React, { useContext } from "react";
import { ShopContext } from "../assets/Components/ShopContext";
import { FaTrashCan } from "react-icons/fa6";

const CartDetails = ({ item }) => {
  const {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(ShopContext);

  const {
    id,
    name,
    image,
    price,
    amount,
  } = item;

  return (
    <div className="grid grid-cols-4 items-center py-6 border-b">

      {/* PRODUCT */}
      <div className="flex items-center gap-4">

        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-xl object-cover"
        />

        <div>
          <h3 className="font-semibold">
            {name}
          </h3>

          <p className="text-sm text-gray-500">
            Product Item
          </p>
        </div>

      </div>

      {/* QUANTITY */}
      <div className="flex justify-center">

        <div className="flex items-center border rounded-full px-4 py-2 gap-4">

          <button
            onClick={() => decreaseQuantity(id)}
            className="font-bold"
          >
            -
          </button>

          <span>{amount}</span>

          <button
            onClick={() => increaseQuantity(id)}
            className="font-bold"
          >
            +
          </button>

        </div>

      </div>

      {/* TOTAL */}
      <div className="text-center font-semibold">
        ${(price * amount).toFixed(2)}
      </div>

      {/* ACTION */}
      <div className="flex justify-center">

        <FaTrashCan
          onClick={() => removeFromCart(id)}
          className="cursor-pointer hover:text-red-500"
        />

      </div>

    </div>
  );
};

export default CartDetails;