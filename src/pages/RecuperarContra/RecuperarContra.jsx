import React from "react";
import { HeOlvidadoMi } from "../../components/HeOlvidadoMi";
import "./style.css";

export const RecuperarContra = () => {
  return (
    <div className="RECUPERAR-CONTRASEA">
      <div className="RECUPERAR-CONTRASEA-wrapper">
        <div className="frame-wrapper">
          <div className="frame">
            <HeOlvidadoMi className="HE-OLVIDADO-MI-CONTRASE-a" />
          </div>
        </div>
      </div>
    </div>
  );
};
