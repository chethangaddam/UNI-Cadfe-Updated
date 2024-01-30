// CartContext.js
import {createContext, useContext, useState} from 'react'

const CartContext = createContext()

const CartProvider = ({children}) => {
  const [cartList, setCartList] = useState([])

  const addCartItem = item => {
    const existingItem = cartList.find(
      cartItem => cartItem.dish_id === item.dish_id,
    )

    if (existingItem) {
      setCartList(prevCartList =>
        prevCartList.map(cartItem =>
          cartItem.dish_id === item.dish_id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem,
        ),
      )
    } else {
      setCartList(prevCartList => [...prevCartList, {...item, quantity: 1}])
    }
  }

  const removeCartItem = item => {
    setCartList(prevCartList =>
      prevCartList.filter(cartItem => cartItem.dish_id !== item.dish_id),
    )
  }

  const removeAllCartItems = () => {
    setCartList([])
  }

  const updateCartItemQuantity = (item, operation) => {
    setCartList(prevCartList =>
      prevCartList.map(cartItem =>
        cartItem.dish_id === item.dish_id
          ? {...cartItem, quantity: operation(cartItem.quantity)}
          : cartItem,
      ),
    )
  }

  const incrementCartItemQuantity = item => {
    updateCartItemQuantity(item, quantity => quantity + 1)
  }

  const decrementCartItemQuantity = item => {
    updateCartItemQuantity(item, quantity => Math.max(0, quantity - 1))
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCartItem,
        removeCartItem,
        removeAllCartItems,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => useContext(CartContext)

export {CartProvider, useCartContext, CartContext}
