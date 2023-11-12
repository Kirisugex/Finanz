import React from "react";
import "./style.css";

export const RegistrarmeComoFundacion = () => {
  return (
    <div className="REGISTRARME-COMO">
      <div className="div">
        <p className="estoy-de-acuerdo-con">
          <span className="text-wrapper">
            Estoy de acuerdo con el procesamiento y tratamiento de mis datos conforme a lo dispuesto en la{" "}
          </span>
          <span className="span">Política de Privacidad</span>
          <span className="text-wrapper">&nbsp;&nbsp;</span>
        </p>
        <p className="si-he-le-do-y-presto">
          <span className="text-wrapper">Si, he leído y presto mi consentimiento&nbsp;&nbsp;a los </span>
          <span className="span">Términos y Condiciones de Uso </span>
          <span className="text-wrapper">del sitio.&nbsp;&nbsp;</span>
        </p>
        <div className="text-wrapper-2">Regístrate</div>
        <p className="p">Completa con los datos de tu fundación</p>
        <div className="text-wrapper-3">Datos</div>
        <div className="overlap">
          <div className="text-wrapper-4">Nombre</div>
        </div>
        <div className="overlap-group">
          <div className="text-wrapper-4">Sector</div>
          <img className="polygon" alt="Polygon" src={require("../../static/img/polygon-13.svg")} />
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-5">Ubicación</div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-4">Correo Electrónico</div>
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-6">Numero Telefónico</div>
          <div className="text-wrapper-4">+1</div>
          <img className="line" alt="Line" src={require("../../static/img/line-69.svg")} />
        </div>
        <div className="overlap-group-2">
          <div className="text-wrapper-4">Provincia</div>
          <img className="polygon" alt="Polygon" src={require("../../static/img/polygon-13.svg")} />
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-7">Número de Registro</div>
        </div>
        <div className="overlap-5">
          <div className="text-wrapper-4">Crea una Contraseña</div>
          <img className="image" alt="Image" src={require("../../static/img/image-9.png")} />
        </div>
        <div className="overlap-6">
          <div className="text-wrapper-8">Confirmar Contraseña</div>
        </div>
        <div className="text-wrapper-9">Fundación</div>
        <div className="overlap-7">
          <div className="text-wrapper-10">Misión y objetivos</div>
        </div>
        <div className="overlap-8">
          <div className="text-wrapper-11">Bienvenido a</div>
          <div className="text-wrapper-12">FinanZ</div>
        </div>
        <div className="overlap-9">
          <div className="text-wrapper-13">Instagram</div>
        </div>
        <div className="overlap-10">
          <div className="text-wrapper-14">Número de cuenta</div>
        </div>
        <div className="overlap-11">
          <div className="text-wrapper-15">Twitter</div>
        </div>
        <div className="overlap-12">
          <div className="text-wrapper-16">Facebook</div>
        </div>
        <div className="rectangle" />
        <div className="rectangle-2" />
        <div className="overlap-13">
          <div className="text-wrapper-17">Registrarse</div>
        </div>
        <img className="img" alt="Line" src={require("../../static/img/line-71.svg")} />
      </div>
    </div>
  );
};
