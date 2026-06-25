import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ProductData } from "./Data";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : ProductData;
  });

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [quantity, setQuantity] = useState(() => {
    const savedQuantity = localStorage.getItem("quantity");
    return savedQuantity ? JSON.parse(savedQuantity) : 0;
  });

  const [total, setTotal] = useState(() => {
    const savedTotal = localStorage.getItem("total");
    return savedTotal ? JSON.parse(savedTotal) : 0;
  });

  // Calculate total price whenever cart changes
  useEffect(() => {
    const totalPrice = cart.reduce((accumulator, currentItem) => {
      const priceAsNumber = parseFloat(currentItem.price);

      if (isNaN(priceAsNumber)) {
        return accumulator;
      }

      return accumulator + priceAsNumber * currentItem.amount;
    }, 0);

    setTotal(totalPrice);
  }, [cart]);

  // Calculate quantity whenever cart changes
  useEffect(() => {
    const amount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    }, 0);

    setQuantity(amount);
  }, [cart]);

  // Save products to localStorage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Save quantity to localStorage
  useEffect(() => {
    localStorage.setItem("quantity", JSON.stringify(quantity));
  }, [quantity]);

  // Save total to localStorage
  useEffect(() => {
    localStorage.setItem("total", JSON.stringify(total));
  }, [total]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: cartItem.amount + 1,
          };
        }
        return item;
      });

      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
      toast.success("Product added to cart");
    }
  };

  const clearCart = () => {
    setCart([]);
    toast.success("Cart cleared!");
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);

    setCart(newCart);
    toast.success("Product removed successfully");
  };

  const increaseQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      addToCart(cartItem, id);
    }
  };

  const decreaseQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      if (cartItem.amount > 1) {
        const newCart = cart.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              amount: cartItem.amount - 1,
            };
          }
          return item;
        });

        setCart(newCart);
      } else {
        removeFromCart(id);
      }
    }
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        quantity,
        total,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;