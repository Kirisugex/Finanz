import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import linea1 from "../../static/img/line-90.svg"
import linea2 from "../../static/img/line-39.svg"
import linea3 from "../../static/img/line-91.svg"
import flechaAtras from "../../static/img/arrow-1.svg"

export const AadirGastos = () => {
  return (
    <div className="AADIR-GASTOS">
      <div className="div">
        <div className="overlap-group">
          <div className="text-wrapper">DOP</div>
          <input className="text-wrapper-2" type="text" placeholder="0"/>
          <img className="line" alt="Line" src={linea1} />
          <img className="image" alt="Image" src={require("../../static/img/image-28.png")} />
          <div className="text-wrapper-3">Categorias:</div>
          <div className="text-wrapper-4">Fecha:</div>
          <div className="text-wrapper-5">Comentario:</div>
          <div className="text-wrapper-6">Foto:</div>
          <div className="text-wrapper-7">Salud</div>
          <div className="text-wrapper-8">Ocio</div>
          <div className="text-wrapper-9">Hogar</div>
          <div className="text-wrapper-10">Belleza</div>
          <div className="text-wrapper-11">Educacion</div>
          <div className="text-wrapper-12">Regalos</div>
          <div className="text-wrapper-13">Supermercado</div>
          <div className="text-wrapper-14">Transporte</div>
          <div className="text-wrapper-15">Crear</div>
          <div className="overlap">
            <img className="img" alt="Image" src={require("../../static/img/image-57.png")} />
          </div>
          <div className="ellipse" />
          <div className="image-wrapper">
            <img className="image-2" alt="Image" src={require("../../static/img/image-58.png")} />
          </div>
          <div className="ellipse-2" />
          <div className="img-wrapper">
            <img className="image-3" alt="Image" src={require("../../static/img/image-60.png")} />
          </div>
          <div className="overlap-2">
            <img className="image-4" alt="Image" src={require("../../static/img/image-61.png")} />
          </div>
          <div className="overlap-3">
            <img className="image-5" alt="Image" src={require("../../static/img/image-64.png")} />
          </div>
          <div className="overlap-4">
            <img className="image-6" alt="Image" src={require("../../static/img/image-63.png")} />
          </div>
          <div className="overlap-5">
            <div className="ellipse-3" />
            <div className="text-wrapper-16">+</div>
          </div>
          <input className="text-wrapper-17" type="text" placeholder="11-11-2023 (Hoy)"/>
          <img className="line-2" alt="Line" src={linea2} />
          <input className="text-wrapper-18" type="text" placeholder="Comentario"/>
          <img className="line-3" alt="Line" src={linea3} />
          <img className="image-7" alt="Image" src={require("../../static/img/image-29.png")} />
          <div className="overlap-6">
            <div className="rectangle" />
            <div className="text-wrapper-19">+</div>
          </div>
          <div className="overlap-7">
            <div className="rectangle" />
            <div className="text-wrapper-20">+</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-21">Registrar datos</div>
          </div>
        </div>
        <div className="text-wrapper-22">GASTOS</div>
        <div className="text-wrapper-23">Añadir Gastos</div>
        <div className="text-wrapper-24"><Link to="/añadir-ingresos" className="colorLink">INGRESOS</Link></div>
        <Link to="/pantalla-principal"><img className="arrow" alt="Arrow" src={flechaAtras} /></Link>
      </div>
    </div>
  );
};
