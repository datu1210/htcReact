import React from "react";
import { CardGroup, Card, Button } from "react-bootstrap";

import "./Home.css";

import instalaciones from "../../Assets/images/instalaciones.jpg";
import automatizacion2 from "../../Assets/images/automatizacion2.jpg";
import mantenimiento from "../../Assets/images/mantenimiento.jpg";

export const ServicesList = () => {
  return (
    <CardGroup className="CardGroup">
      <Card className="serviceCard">
        <Card.Img variant="top" src={instalaciones} />
        <Card.Body className="body">
          <Card.Title className="cardItem">INSTALACIONES ELECTRICAS</Card.Title>
          <Card.Text className="cardItem">
            <p>
              Somos especialistas en instalaciones eléctricas de baja y media
              tensión, diseñamos, adecuamos y construimos instalaciones
              eléctricas según su necesidad. Aplicamos todos los más altos
              estándares y normas vigentes, para que usted pueda recibir energía
              de la mejor calidad.
            </p>
            <ul>
              <li>Diseño y construcción de instalaciones residenciales.</li>
              <li>Diseño y construcción de instalaciones de iluminación.</li>
              <li>
                Tableros de Transferencias. Corrección de factor de potencia
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
        <Button id="buttonBuy">comprar</Button>
      </Card>
      <Card className="serviceCard">
        <Card.Img variant="top" src={automatizacion2} />
        <Card.Body className="body">
          <Card.Title className="cardItem">INSTALACIONES ELECTRICAS</Card.Title>
          <Card.Text className="cardItem">
            <p>
              Somos especialistas en instalaciones eléctricas de baja y media
              tensión, diseñamos, adecuamos y construimos instalaciones
              eléctricas según su necesidad. Aplicamos todos los más altos
              estándares y normas vigentes, para que usted pueda recibir energía
              de la mejor calidad.
            </p>
            <ul>
              <li>Diseño y construcción de instalaciones residenciales.</li>
              <li>Diseño y construcción de instalaciones de iluminación.</li>
              <li>
                Tableros de Transferencias. Corrección de factor de potencia
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
        <Button id="buttonBuy">comprar</Button>
      </Card>
      <Card className="serviceCard">
        <Card.Img variant="top" src={mantenimiento} />
        <Card.Body className="body">
          <Card.Title className="cardItem">INSTALACIONES ELECTRICAS</Card.Title>
          <Card.Text className="cardItem">
            <p>
              Somos especialistas en instalaciones eléctricas de baja y media
              tensión, diseñamos, adecuamos y construimos instalaciones
              eléctricas según su necesidad. Aplicamos todos los más altos
              estándares y normas vigentes, para que usted pueda recibir energía
              de la mejor calidad.
            </p>
            <ul>
              <li>Diseño y construcción de instalaciones residenciales.</li>
              <li>Diseño y construcción de instalaciones de iluminación.</li>
              <li>
                Tableros de Transferencias. Corrección de factor de potencia
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
        <Button id="buttonBuy">comprar</Button>
      </Card>
    </CardGroup>
  );
};
