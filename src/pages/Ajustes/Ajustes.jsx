import React from "react";
import { ReactIconsFaFatwitter1 } from "../../icons/ReactIconsFaFatwitter1";
import "./style.css";
import poligono from "../../pages/Ajustes/polygon-15.svg";
export const Ajustes = () => {
  return (
    <div className="AJUSTES">
      <div className="div">
        <div className="group">
          <div className="overlap-group">
            <p className="text-wrapper">Copyright © FinanZ 2023. Todos los derechos reservados.</p>
            <div className="rectangle" />
            <p className="p">Copyright © FinanZ 2023. Todos los derechos reservados.</p>
            <div className="frame-wrapper">
              <div className="frame">
                <img className="pngwing" alt="Pngwing" src={require("../../static/img/pngwing-2.png")} />
              </div>
            </div>
            <ReactIconsFaFatwitter1 className="react-icons-fa" color="white" />
            <div className="group-2" />
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap">
            <img className="img" alt="Rectangle" src={require("../../static/img/rectangle-932.svg")} />
            <div className="rectangle-2" />
            <div className="text-wrapper-2">SERVICIOS</div>
            <div className="text-wrapper-3">PENTATECH</div>
            <div className="text-wrapper-4">CONTACTO</div>
            <div className="text-wrapper-5">CLIENTES</div>
            <div className="text-wrapper-6">INICIO</div>
            <div className="text-wrapper-7">FinanZ</div>
          </div>
        </div>
        <p className="text-wrapper-8">Realiza cambios en la interfaz para mejorar tu experiencia de uso.</p>
        <img className="line" alt="Line" src={require("../../static/img/line-71.svg")} />
        <div className="text-wrapper-9">Ajustes</div>
        <div className="text-wrapper-10">Modo de pantalla</div>
        <div className="overlap-2">
          <div className="text-wrapper-11">Claro</div>
          <img className="polygon" alt="Polygon" src={poligono} />
        </div>
        <div className="text-wrapper-12">Idioma</div>
        <div className="overlap-3">
          <div className="text-wrapper-11">Español</div>
          <img className="polygon" alt="Polygon" src={poligono} />
        </div>
        <div className="text-wrapper-13">Moneda</div>
        <div className="overlap-4">
          <div className="text-wrapper-11">$DOP</div>
          <img className="polygon" alt="Polygon" src={poligono} />
        </div>
        <div className="text-wrapper-14">Tamaño de letra</div>
        <div className="aumentar-wrapper">
          <div className="text-wrapper-11">
            Aumentar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            +
          </div>
        </div>
        <div className="disminuir-wrapper">
          <div className="text-wrapper-11">
            Disminuir&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            -
          </div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-15">Guardar cambios</div>
        </div>
      </div>
    </div>
  );
};
