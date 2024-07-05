import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();
const CartProvider = ({ children }) => {


    const lsFun = () => {
        let LsCart = JSON.parse(localStorage.getItem('cart'));
        return LsCart ? LsCart : [];
    }

    // CartState
    const [cart, setCart] = useState(lsFun);
    // AddToCart
    const addToCart = (product, id) => {
        const newItem = { ...product, amount: 1 };  // We create a new object called newItem by spreading the properties of the product object passed to the function and adding a new property amount initialized to 1. This newItem represents the product to be added to the cart.
        // console.log(newItem);
        let cartItem = cart.find((item) => {   // We search for an item in the cart array whose id matches the id passed to the function. This is done using the find method. If a matching item is found, cartItem will contain that item; otherwise, it will be undefined.
            return item.id === id;
        });
        // If the item is already in the cart
        if (cartItem) {           // We create a new array newCart by mapping over each item in the cart array. If the id of the current item matches the id passed to the function, we create a new object with the same properties as the current item but with the amount increased by 1. Otherwise, we return the current item unchanged.
            const newCart = [...cart].map((item) => { // The function creates a new cart array where the item's amount is increased by 1.   //We use [...cart] whenever we need to create a new copy of the cart array with some modifications. The map method allows us to iterate over the cart array and create a new array with updated items.
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1 }
                } else {
                    return item;
                }
            });
            setCart(newCart);
            localStorage.setItem('cart', JSON.stringify(newCart))
        } else {
            setCart([...cart, newItem])
            localStorage.setItem('cart', JSON.stringify([...cart, newItem]))
        }
    }
    // RemoveFromCart
    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart)
    }
    // IncreaseAmount
    const IncreaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id)
        addToCart(cartItem, id)
    }
    // decrementAmount
    const decrementAmount = (id) => {
        const cartItem = cart.find((item) => {   // The function checks if the item is in the cart by finding it with the given ID.
            return item.id === id
        });
        if (cartItem) {   // If the item is found
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount - 1 }     // If the item amount is greater than 1, decrease the amount by 1
                } else {
                    item;
                }
            })
            setCart(newCart);
        }
        if (cartItem.amount < 2) {
            removeFromCart(id)
        }

    }
    // ProductCount
    const [ItemAmount, setItemAmount] = useState(0)
    useEffect(() => {
        if (cart) {
            const total = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount;
            }, 0);
            setItemAmount(total)
        }
    }, [cart])

    // Total_Product Price
    const [price, setPrice] = useState(0);
    useEffect(() => {
        if (cart) {
            let total = cart.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.amount * currentValue.price
            }, 0)
            setPrice(total)
        }
    }, [cart])

    // Total_Product_Discount Price
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        if (cart) {
            let totalPrice = cart.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.price * currentValue.amount
            }, 0) - 5;                       // Subtracting the discount after summing up the total price
            setTotalPrice(totalPrice)
        }
    }, [cart])


    // LocalStorage:
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])


    return (
        <CartContext.Provider value={{ addToCart, cart, ItemAmount, removeFromCart, IncreaseAmount, decrementAmount, price, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
