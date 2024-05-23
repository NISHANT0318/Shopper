import React, { createContext, useState,useContext } from "react";
import all_products from '../Components/Assets/Assets/all_product'
import CartItems from "../Components/CartItems/CartItems";
import {UserContext} from './userContext'
import { useEffect } from "react";
import axios from "axios";

export const ShopContext = createContext(null)

const getDefaultCart = () =>{
    let cart = {}
    for (let index = 0; index < all_products.length; index++) {
        
        cart[all_products[index].id] = 0;
        
    }
    return cart

}

const ShopContextProvider = (props) => {
    const { user } = useContext(UserContext);
     const [cartItems,setCartItems] = useState(getDefaultCart())
     useEffect(() => {
        const fetchCart = async () => {
            if (user) {
                try {
                    const { data } = await axios.get('/api/cart', { params: { userId: user._id },withCredentials: true });
                    setCartItems(data);
                } catch (error) {
                    console.error('Error fetching cart:', error);
                }
            }
        };
        fetchCart();
    }, [user]);

    const saveCart = async (cart) => {
        if (user) {
            try {
                await axios.post('/api/cart', { userId: user._id, cart },{ withCredentials: true });
            } catch (error) {
                console.error('Error saving cart:', error);
            }
        }
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const newCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
            saveCart(newCart);
            return newCart;
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCart = { ...prev, [itemId]: (prev[itemId] || 0) - 1 };
            saveCart(newCart);
            return newCart;
        });
    };


    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for (const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo= all_products.find((product)=>product.id === Number(item))
                
                 totalAmount += itemInfo.new_price*cartItems[item]
            }
            
        }
        
        console.log(totalAmount)
        return totalAmount;
        
    }


    const  getTotalCartItems = () =>{
        let totalItems = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                totalItems += cartItems[item]
            }
        }
        return totalItems

    }

   const contextValue = {all_products,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems}
    return(
        <ShopContext.Provider value={contextValue} >

            {props.children}

        </ShopContext.Provider>
    )
     
}

export default ShopContextProvider;