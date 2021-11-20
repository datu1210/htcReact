import React from "react";
import about from "../../Assets/images/about.jpg";
import "./Home.css";

export const About = () => {
  return (
    <div>
      <div className="container-about">
        <div className="row"></div>
        <div className="containerTexto">
          <h1>Acerca de Nosotros</h1>
          <p>
            Somos una empresa familiar que desde el año 2012 decidimos emprender
            nuestro propio negocio, brindando soluciones de diseño,
            mantenimiento, adecuación e instalación de sistemas eléctricos,
            residenciales, comerciales e industriales, unos meses después,
            decidimos abrir nuestras puertas al público en general, no solo
            ofreciendo servicios, sino también brindando suministro de todo tipo
            de materiales eléctricos de buena calidad y a precios competitivos.
          </p>
          <p>
            Después de casi 10 años de años de experiencia, nos hemos convertido
            en una empresa reconocida en el sector de la electricidad, tanto en
            nuestra ciudad como en el departamento, gracias a la confianza
            depositada por nuestros clientes, algunos de los cuales nos
            acompañan desde nuestros inicios, así como aquellos que han confiado
            en nosotros, atraídos por nuestra asesoría personalizada, nuestros
            precios accesibles y trabajo de calidad.
          </p>
          <p>
            Hoy hemos convertido a eléctricos HTC en especialistas de la
            electricidad en media y baja tensión, la automatización, el cableado
            estructurado, la protección contra rayos y puestas a tierra, tanto a
            nivel residencial como comercial y esperamos seguir día a día,
            mejorando para brindar a nuestros clientes la mejor atención y
            soluciones.
          </p>
        </div>
        <div className="htcImage">
          <img src={about} alt="HTCgroup" width="400" height="400" />
        </div>
      </div>
    </div>
  );
};
