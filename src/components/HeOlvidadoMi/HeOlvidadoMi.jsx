/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const HeOlvidadoMi = ({ className }) => {
  return (
    <div className={`HE-OLVIDADO-MI ${className}`}>
      <div className="overlap">
        <div className="group">
          <div className="overlap-group">
            <div className="text-wrapper">Recuperar contraseña</div>
            <div className="div-wrapper">
              <div className="div">Recuperar contraseña</div>
            </div>
          </div>
        </div>
        <div className="rectangle" />
        <p className="p">
          Introduzca el correo electronico asociado a la cuenta, esnseguida te enviaremos las instrucciones para
          reestablecer tu contraseña
        </p>
      </div>
    </div>
  );
};
