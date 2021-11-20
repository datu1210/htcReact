import React,{useContext} from "react";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget.js";
import HTCLogo from "../../Assets/images/HTCLogo.png";

import "./NavBar.css";
import { CartContext } from "../../context/CartContext.js";

export const NavBar = () => {
  const { carrito } = useContext(CartContext);

  return (
    <header className="topnav">
      <NavLink exact to="/">
        <img src={HTCLogo} alt="lightning" className="navlogo" />
      </NavLink>
      <div>
        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/productos">
            Productos
          </NavLink>
          <NavLink exact to="/contacto">
            Contacto
          </NavLink>
          {carrito.length > 0 && (
            <Link to="/cart">
              <CartWidget />
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
