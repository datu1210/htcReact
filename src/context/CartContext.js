import React, { createContext, useState } from 'react'


export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ( {children} ) => {

    const [carrito, setCarrito] = useState(init)

    console.log(carrito)
    
    const addToCart = (item) => {
      setCarrito( [...carrito, item] )
    }
    
    const removeItem = (itemId) => {
      const newCart = carrito.filter( (prod) => prod.id !== itemId)
      setCarrito( newCart )
    }
  
    const calcularCantidad = () => {
      return carrito.reduce( (acc, prod) => acc + prod.cantidad, 0 )
    }

    const isInCart = (itemId) => {
      //some es como un .find pero en vez de devolver el objeto, devuelve true/false
      return carrito.some( (prod) => prod.id === itemId )
    }


    const calcularTotal = () => {
      return carrito.reduce( (acc, prod) => acc + prod.cantidad * prod.price, 0)
    }
  
    const vaciarCarrito = () => {
      setCarrito([])
    }
    
  
    return (
        <CartContext.Provider value={ {
            carrito,
            addToCart,
            removeItem,
            calcularCantidad,
            vaciarCarrito,
            isInCart,
            calcularTotal
        }}>
            {children}
        </CartContext.Provider>
    )

}