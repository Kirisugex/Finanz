import React from "react";
import { ReactIconsFaFatwitter } from "../../icons/ReactIconsFaFatwitter";
import "./style.css";

export const PantallaYaDentro = () => {
  return (
    <div className="PANTALLA-YA-DENTRO">
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
            <ReactIconsFaFatwitter className="react-icons-fa" color="white" />
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
            <div className="text-wrapper-7">Finanzhilfe</div>
          </div>
        </div>
      </div>
    </div>
  );
};
