import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import "./container.css"


export const Item = ( {id, name, price, img, description, categoria} ) => {

    return (

        <Card style={{ width: '18rem' }} className="containerCard">
            <Card.Body className= "body">
                <Card.Title className="cardItem">{name}</Card.Title>     
            </Card.Body>
            <Card.Img variant="top" src={img} />
            <NavLink exact to={`/detail/${id}`}>
                <Button id="buttonBuy">ver Detalle</Button>
            </NavLink>
            
        </Card>
    )
}