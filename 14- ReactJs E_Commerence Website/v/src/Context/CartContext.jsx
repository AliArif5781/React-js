import React, { createContext, useEffect, useState } from 'react';

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
        const newItem = { ...product, amount: 1 };
        let cartItem = cart.find((item) => item.id === id);

        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
    }

    // IncreaseAmount
    const IncreaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        if (cartItem) addToCart(cartItem, id);
    }

    // RemoveFromCart
    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    }

    // DecrementAmount
    const decrementAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id);

        if (cartItem) {
            if (cartItem.amount <= 1) {
                removeFromCart(id);
            } else {
                const newCart = cart.map((item) => {
                    if (item.id === id) {
                        return { ...item, amount: item.amount - 1 };
                    } else {
                        return item;
                    }
                });
                setCart(newCart);
            }
        }
    }

    // ProductCount
    const [ItemAmount, setItemAmount] = useState(0);
    useEffect(() => {
        if (cart) {
            const total = cart.reduce((accumulator, currentItem) => accumulator + currentItem.amount, 0);
            setItemAmount(total);
        }
    }, [cart]);

    // Total_Product Price
    const [price, setPrice] = useState(0);
    useEffect(() => {
        if (cart) {
            let total = cart.reduce((accumulator, currentValue) => accumulator + currentValue.amount * currentValue.price, 0);
            setPrice(total);
        }
    }, [cart]);

    // Total_Product_Discount Price
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        if (cart) {
            let totalPrice = cart.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.amount, 0) - 5;  // Subtracting the discount after summing up the total price
            setTotalPrice(totalPrice);
        }
    }, [cart]);

    // LocalStorage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ addToCart, cart, ItemAmount, removeFromCart, IncreaseAmount, decrementAmount, price, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
