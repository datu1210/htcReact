import React,{useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import "./NavBar.css";


const CartWidget = () => {

    const {calcularCantidad} = useContext(CartContext)

    return (
        <>
        <i className="fa fa-shopping-cart">  {calcularCantidad()}  </i>
        </>
    );
};

export default CartWidget;