import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logoLinea1 from "../../static/img/line-90.svg"
import logoLinea2 from "../../static/img/line-39.svg"
import logoLinea3 from "../../static/img/line-91.svg"
import flechaAtras from "../../static/img/arrow-1.svg"

export const AadirIngresos = () => {
  return (
    <div className="AADIR-INGRESOS">
      <div className="div">
        <div className="overlap-group">
          <div className="text-wrapper">DOP</div>
          <input className="text-wrapper-2" type="text" placeholder="0"/>
          <img className="line" alt="Line" src={logoLinea1} />
          <img className="image" alt="Image" src={require("../../static/img/image-28.png")} />
          <div className="text-wrapper-3">Categorias:</div>
          <div className="text-wrapper-5">Fecha:</div>
          <div className="text-wrapper-6">Comentario:</div>
          <div className="text-wrapper-7">Foto:</div>
          <div className="text-wrapper-8">Cheque</div>
          <div className="text-wrapper-9">Regalo</div>
          <div className="text-wrapper-10">Intereses</div>
          <div className="text-wrapper-11">Crear</div>
          <div className="overlap">
            <img className="img" alt="Image" src={require("../../static/img/image-66.png")} />
          </div>
          <div className="image-wrapper">
            <img className="image-2" alt="Image" src={require("../../static/img/image-65.png")} />
          </div>
          <div className="img-wrapper">
            <img className="image-3" alt="Image" src={require("../../static/img/image-67.png")} />
          </div>
          <div className="overlap-2">
            <div className="ellipse" />
            <div className="text-wrapper-12">+</div>
          </div>
          <input className="text-wrapper-13" type="text" placeholder="11-11-2023 (Hoy)"/>
          <img className="line-2" alt="Line" src={logoLinea2} />
          <div className="overlap-3">
          <input className="text-wrapper-14" type="text" placeholder="Comentario"/>
            <img className="line-3" alt="Line" src={logoLinea3} />
          </div>
          <img className="image-4" alt="Image" src={require("../../static/img/image-29.png")} />
          <div className="overlap-4">
            <div className="rectangle" />
            <div className="text-wrapper-15">+</div>
          </div>
          <div className="overlap-5">
            <div className="rectangle" />
            <div className="text-wrapper-16">+</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-17">Registrar datos</div>
          </div>
        </div>
        <div className="text-wrapper-18"><Link to="/añadir-gastos" className="colorLink">GASTOS</Link></div>
        <div className="text-wrapper-19">Añadir Ingresos</div>
        <div className="text-wrapper-20">INGRESOS</div>
        <Link to="/pantalla-principal"><img className="arrow" alt="Arrow" src={flechaAtras}></img></Link>
      </div>
    </div>
  );
};
