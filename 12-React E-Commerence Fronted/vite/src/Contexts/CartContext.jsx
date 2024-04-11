import React, { createContext, useState, useEffect } from 'react'

// create context
export const CartContext = createContext()

function CartProvider({ children }) {

  // cart state
  const [cart, setCart] = useState(() => {
    let lscart = JSON.parse(localStorage.getItem('cart'))
    return lscart ? lscart : [];
  });
  // item amount state
  const [itemAmount, setItemAmount] = useState(0)
  // total price
  const [total, setTotal] = useState(0);

  // update total amount
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0)
    setTotal(total)
  })

  // update item amount:
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0)
      setItemAmount(amount);
    }
  }, [cart])


  // addToCart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    console.log(newItem);
    // check if the item is already inthe cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // if cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          // Increase the amount of the existing item
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      // Update localStorage with the new cart
      localStorage.setItem('cart', JSON.stringify(newCart))
      // Update the cart state
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
      // Update localStorage with the new cart
      localStorage.setItem('cart', JSON.stringify([...cart, newItem]))
    }
    {/* why we use in else line no.58,59 setCart([...cart,newItem])====>>:
In the setCart([...cart, newItem]) line, the spread operator (...) is used to create a new array containing all the elements of the existing cart array along with the newItem being added to it.

Here's what's happening step by step:

1-...cart: This spreads out all the elements of the existing cart array. It essentially creates a shallow copy of the cart array.

2-,: This comma separates the elements of the new array.

3-newItem: This adds the newItem object at the end of the new array.

So, setCart([...cart, newItem]) is a way to create a new array that includes all the elements of the existing cart array, along with the newItem added to the end of it. This new array is then used to update the state of the cart via the setCart function. This approach ensures immutability, meaning that the original cart array remains unchanged, and a new array with the updated contents is created and set as the new state. */}
  };

  // console.log(cart);


  // Remove from Cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    })
    setCart(newCart);
  }

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  }

  // Increment Amount
  const increaseAmount = (id) => {
    const cartitem = cart.find((item) => item.id === id);
    addToCart(cartitem, id); {/* you said how this use and work  simply go to the line no.22*/ }
    // localStorage.setItem('cart',JSON.stringify(addToCart))
  }


  // Decrease Amount
  const decreaseAmount = (id) => {
    const cartitem = cart.find((item) => {
      return item.id === id;
    });
    if (cartitem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartitem.amount - 1 }

        } else {
          return item;
        }
      });
      // localStorage.setItem('cart',JSON.stringify(newCart));
      setCart(newCart);
    }
    if (cartitem.amount < 2) {
      removeFromCart(id);
    }
  }
  // localStorage:
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
