import { CartWidget } from "../cartWidget/CartWidget";
import "./Navbar.css";
//import logoCeleste from '../../assets/icons/logoCelesteTienda.png';

export const Navbar = ({ contador }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-estilopropio">
      <div className="container-fluid">

        {/* <a href="#"><img className="logonav" src={logoCeleste} alt="Logo Consultorios Podológicos"/></a> */}

        <h2 className="logonav">Consultorios Podológicos Tienda</h2>

        <div className="d-flex align-items-center gap-3">
          <CartWidget />
          <span className="counterClass"> {contador} </span> 
        </div>

      </div>
    </nav>
  );
};