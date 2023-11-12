import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import FlechaAtras from "../../static/img/arrow-1.svg";
import { useNavigate } from 'react-router-dom';

export const Registrar = () => {
  const navigate = useNavigate(); 

  function handleGoBack() {
    navigate(-1); // go back
  }

  return (
    <div className="REGISTRAR">
      <div className="div">
        <div className="overlap">
          <img className="image" alt="Image" src={require("../../static/img/image 4.png")} />
          <div className="text-wrapper">Cuenta Empresarial</div>
          <p className="perfil-dedicado-a">
            {" "}
            Perfil dedicado a las necesidades financieras de una empresa, donde se pueden ingresar y gestionar los datos
            financieros, acceder a herramientas y análisis personalizados.
          </p>
          <div className="overlap-group">
            <div className="text-wrapper-2"><Link to="/pantalla-registro-cuenta-empresarial" className="colorLink">Crear Cuenta Empresarial</Link></div>
          </div>
        </div>
        <div className="overlap-group-2">
          <div className="overlap-2">
            <div className="text-wrapper-3">Empresarial</div>
            <img className="img" alt="Image" src={require("../../static/img/image 5.png")} />
          </div>
          <div className="text-wrapper-4">Cuenta Personal</div>
          <p className="p">
            Perfil dedicado a usuarios individuales, donde se podra obtener un asesoramiento financiero personalizado
            que le ayudarán en el logro de sus metas económicas.
          </p>
          <div className="overlap-group">
            <div className="text-wrapper-5"><Link to="/pantalla-registro-cuenta-personal" className="colorLink">Crear Cuenta Personal</Link></div>
          </div>
        </div>
        <button onClick={handleGoBack} style={{backgroundColor: 'transparent', border: 'none'}}><img className="arrow" alt="Arrow" src={FlechaAtras} /></button>
      </div>
    </div>
  );
};

