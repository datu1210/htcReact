import React, { useState, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { ItemCount } from "../ItemCount/Itemcount";
import { CartContext } from "../../context/CartContext";
import {Link} from "react-router-dom";

const ItemDetail = ({
  id,
  name,
  price,
  img,
  description,
  categoria,
  stock,
}) => {
  const { goBack, push } = useHistory();

  const [cantidad, setCantidad] = useState(0);

  const { addToCart, isInCart } = useContext(CartContext);

  const handleAgregar = () => {
    const newItem = {
      id,
      name,
      price,
      categoria,
      cantidad,
    };
    if (cantidad > 0) {
      addToCart(newItem);
    }
  };

  return (
    <Card style={{ width: "18rem" }} className="containerCard m-5">
      <Card.Img src={img} />
      <Card.Body className="body">
        <Card.Title className="cardItem">{name}</Card.Title>
        <Card.Text className="cardItem">Categoria: {categoria}</Card.Text>
        <Card.Text className="cardItem">{description}</Card.Text>
        <Card.Text className="cardItem" id="precio">
          Precio: ${price}
        </Card.Text>

        { isInCart(id)
        ?<Link to="/cart" className="btn btn-success">Terminar Compra</Link>
        :        
        <>
          <ItemCount cantidad={cantidad} modify={setCantidad} max={stock} />

          <button className="btn btn-success my-3" onClick={handleAgregar}>
            Agregar al carrito
          </button>
        </>

        }


        <hr />
        <div className="container">
          <Button className="mx-2" onClick={() => goBack()}>
            volver
          </Button>
          <Button className="mx-2" onClick={() => push("/")}>
            ir al inicio
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
