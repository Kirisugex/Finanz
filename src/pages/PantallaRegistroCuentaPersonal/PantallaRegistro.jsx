import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const PantallaRegistroCuentaPersonal = () => {
  return (
    <div className="PANTALLA-REGISTRO">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="group" alt="Group" src={require("../../static/img/group-3.png")} />
          <div className="rectangle" />
          <p className="estoy-de-acuerdo-con">
            <span className="text-wrapper">
              Estoy de acuerdo con el procesamiento y tratamiento de mis datos conforme a lo dispuesto en la politica de privacidad.
            </span>
            <span className="span">Política de Privacidad</span>  
          </p>
          <p className="si-he-le-do-y-presto">
            <span className="text-wrapper">Si, he leído los términos y condiciones de uso; y presto mi consentimiento.</span>
            <span className="span">Términos y Condiciones de Uso </span>
          </p>
          <div className="div">Registrate</div>
          <p className="p">Completa con tus datos personales</p>
          <div className="text-wrapper-2">Datos Personales</div>
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="text-wrapper-3">Nombres</div>
          <div className="rectangle-4" />
          <div className="rectangle-5" />
          <div className="text-wrapper-4">País</div>
          <div className="text-wrapper-5">Ubicación</div>
          <div className="text-wrapper-6">Apellidos</div>
          <div className="rectangle-6" />
          <div className="rectangle-7" />
          <div className="text-wrapper-7">Correo Electrónico</div>
          <div className="text-wrapper-8">Numero Telefónico</div>
          <div className="text-wrapper-9">+1</div>
          <div className="rectangle-8" />
          <div className="rectangle-9" />
          <div className="text-wrapper-10">Género</div>
          <div className="rectangle-10" />
          <div className="text-wrapper-11">Crea una Contraseña</div>
          <div className="rectangle-11" />
          <div className="text-wrapper-12">Confirmar Contraseña</div>
          <div className="text-wrapper-13">Cédula/Pasaporte</div>
          <div className="text-wrapper-14">Cuenta Personal</div>
          <img className="image" alt="Image" src={require("../../static/img/image-8.png")} />
          <img className="line" alt="Line" src={require("../../static/img/line-69.svg")} />
          <img className="polygon" alt="Polygon" src={require("../../static/img/Polygon 11.png")} />
          <div className="rectangle-12" />
          <div className="rectangle-13" />
          <p className="text-wrapper-15">¿Perteneces a alguna comunidad vulnerable</p>
          <p className="text-wrapper-16">¿Cual es el aproximado de tu ingreso mensual?</p>
          <div className="rectangle-14" />
          <div className="text-wrapper-17">Edad</div>
          <img className="img" alt="Polygon" src={require("../../static/img/Polygon 11.png")} />
          <img className="polygon-2" alt="Polygon" src={require("../../static/img/Polygon 11.png")} />
          <div className="rectangle-15" />
          <div className="rectangle-16" />
          <div className="rectangle-17" />
          <div className="text-wrapper-18"><Link to="/pantalla-principal" className="colorLink">Registrarse</Link></div>
          <img className="arrow" alt="Arrow" src={require("../../static/img/arrow-1.svg")} />
          <img className="image-2" alt="Image" src={require("../../static/img/image-9.png")} />
          <div className="text-wrapper-2">Datos Personales</div>
          <img className="line-2" alt="Line" src={require("../../static/img/line-71.svg")} />
          <div className="text-wrapper-19">Bienvenido a FinanZ</div>
        </div>
      </div>
    </div>
  );
};