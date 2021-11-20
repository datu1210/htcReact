import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { UIContext } from "../../context/UIContext";
import { generarOrden } from "../../firebase/generarOrden";

export const Checkout = () => {
  const { loading, setLoading } = useContext(UIContext);
  const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);

  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
    tel: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.nombre.length < 3) {
      Swal.fire({
        icon: "error",
        title: "Nombre inválido",
        text: "ingresa un nombre válido",
      });
      return;
    }
    if (values.apellido.length < 3) {
      Swal.fire({
        icon: "error",
        title: "Apellido inválido",
        text: "ingresa un Apellido válido",
      });
      return;
    }
    if (values.email.length < 3) {
      Swal.fire({
        icon: "error",
        title: "email inválido",
        text: "ingresa un email válido",
      });
      return;
    }
    if (values.tel.length < 10) {
      Swal.fire({
        icon: "error",
        title: "teléfono inválido",
        text: "ingresa un télefono válido",
      });
      return;
    }

    setLoading(true);
    generarOrden(values, carrito, calcularTotal())
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Hemos recibido tu compra!",
          text: `tu numero de orden es: ${res}`,
          willClose: () => {
            vaciarCarrito();
          },
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Lo sentimos",
          text: `No hay stock de: ${err.map((el) => el.name).join(", ")}`,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      {carrito.length === 0 && <Redirect to="/productos" />}

      <div>
        <h2>checkout</h2>
        <br />
        <div className="container my-5">
          <form onSubmit={handleSubmit}>
            <h2>Formulario de Compra </h2>
            <br />
            <input
              className="form-control my-2"
              type="text"
              placeholder="Nombre"
              name="nombre"
              value={values.nombre}
              onChange={handleInputChange}
            />


            <input
              className="form-control my-2"
              type="text"
              placeholder="Apellido"
              name="apellido"
              value={values.apellido}
              onChange={handleInputChange}
            />


            <input
              className="form-control my-2"
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />


            <input
              className="form-control my-2"
              type="tel"
              placeholder="telefono"
              name="tel"
              value={values.tel}
              onChange={handleInputChange}
            />

            <br />
            <button
              className="btn btn-success my-2"
              type="submit"
              disabled={loading}
            >
              Enviar Pedido
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
