import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  //const [cartCount, setCartCount] = useState(0)

  const [cartItems, setCarItems] = useState([])

  //const addToCart = () => setCartCount(prev => prev + 1)

  const addToCart = (nombre) => {
    setCarItems(prev => {
      const existente = prev.find(item => item.nombre === nombre)
      if(existente){
        return prev.map(item =>
          item.nombre === nombre ? {...item, cantidad: item.cantidad + 1} : item
        )
      }
      return [...prev, {nombre, cantidad: 1 }]
    })
  }

  const removeFromCart = (nombre) => {
    setCarItems(prev => prev.filter(item => item.nombre !== nombre))
  }

  const increment = (nombre) => {
    setCarItems(prev =>
      prev.map(item =>
        item.nombre === nombre ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    )
  }

  const decrement = (nombre) => {
    setCarItems(prev =>
      prev.map(item =>
          item.nombre === nombre ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter(item => item.cantidad > 0)
    )
  }

  const totalCount = cartItems.reduce((sum, item) => sum + item.cantidad, 0)

  return (
    <CartContext.Provider value={{
      cartItems,
      totalCount, 
      addToCart,
      removeFromCart,
      increment,
      decrement
     }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)