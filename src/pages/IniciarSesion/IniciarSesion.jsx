import React from "react";
import "./style.css";
import fondoDiseño from "../../../src/pages/IniciarSesion/image-3.png"
import { Link } from "react-router-dom";

export const IniciarSesion = () => {
  return (
    <div className="INICIAR-SESION">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper">He olvidado mi contraseña</div>
            </div>
          </div>
          <div className="div">Iniciar Sesion</div>
          <p className="p">Por favor, entra tus credenciales</p>
          <div className="rectangle" />
          <div className="inputs">
          <input className="text-wrapper-2" type="text" placeholder="Nombre de Usuario"/>
          <input className="text-wrapper-3" type="password" placeholder="Contraseña"/>
          </div>
          <div className="text-wrapper-4"><Link to="/pantalla-principal" className="colorLink">Iniciar Sesion</Link></div>
          <div className="text-wrapper-5">Recuerdame</div>
          <div className="group-2" />
          <img className="image" alt="Image" src={fondoDiseño} />
          <div className="text-wrapper-6">¿Eres nuevo?</div>
          <p className="reg-strate-y-d-jate">
            <span className="span"><Link to="/registrar" className="colorLink">Regístrate</Link></span>
            <span className="text-wrapper-7">
              {" "}
              y déjate guiar hacia un mundo de oportunidades financieras por descubrir.
            </span>
          </p>
          <img className="line" alt="Line" src={require("../../static/img/Line 39.png")} />
          <img className="img" alt="Line" src={require("../../static/img/Line 39.png")} />
          <input className="rectangle-2" type="checkbox"/>
        </div>
      </div>
    </div>
  );
};
