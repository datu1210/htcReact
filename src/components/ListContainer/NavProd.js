import { NavLink } from "react-router-dom";
import "./container.css";

const NavProd = () => {
  return (
  
      <nav>        
        <NavLink activeClassName="category" exact to="/productos/electricidad">
          Electricidad
        </NavLink>
        <NavLink activeClassName="category" exact to="/productos/automatizacion">
          Automatización
        </NavLink>
        <NavLink activeClassName="category" exact to="/productos/iluminacion">
          Iluminación
        </NavLink>        
        <NavLink activeClassName="category" exact to="/productos/supresores">
          Supresores
        </NavLink>

      </nav>

  );
};

export default NavProd;
