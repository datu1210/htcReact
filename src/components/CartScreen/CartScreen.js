import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {Link} from "react-router-dom"

export const CartScreen = () => {
  const { carrito, removeItem, vaciarCarrito, calcularTotal } =
    useContext(CartContext);

  return (
    <div className="container my-5">
      <h1>Resumen de Compra</h1>
      <hr />

      {carrito.length === 0 ? (
        <>
          <h3>No hay items en el carrito</h3>
          <Link to="/productos" className="btn btn-primary">
            ver productos
          </Link>
        </>
      ) : (
        <>
          {carrito.map((prod) => (
            <div className="my-4">
              <h4>{prod.name}</h4>
              <p>cantidad:{prod.cantidad}</p>
              <p>Total: {prod.price * prod.cantidad}</p>
              <button
                className="btn btn-danger"
                onClick={() => removeItem(prod.id)}
              >
                eliminar
              </button>
            </div>
          ))}

          <hr />
          <h3 className="my-3">Precio Total: $ {calcularTotal()}</h3>
          <button className="btn btn-danger" onClick={vaciarCarrito}>
            Vaciar el carito
          </button>
          <Link to="/checkout" className="btn btn-success mx-2">
          Finalizar compra
          </Link>
        </>
      )}
    </div>
    
  );
};
