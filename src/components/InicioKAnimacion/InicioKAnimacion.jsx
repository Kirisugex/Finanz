/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const InicioKAnimacion = ({ property1, className }) => {
  return (
    <div className={`INICIO-k-ANIMACION ${property1} ${className}`}>
      <div className="alcanzar-tus-metas">
        {property1 === "group-6" && <>alcanzar tus metas financieras?</>}

        {property1 === "group-5" && (
          <p className="text-wrapper-12">transformar tus sueños financieros en realidades?</p>
        )}

        {property1 === "group-7" && <p className="text-wrapper-12">tomar el control de tus finanzas?</p>}

        {property1 === "group-8" && <>potenciar tu bienestar economico?</>}

        {property1 === "group-9" && (
          <p className="text-wrapper-12">descubrir el camino hacia la estabilidad financiera?</p>
        )}
      </div>
      <p className="listo-para">
        <span className="text-wrapper">¿Listo para</span>
        <span className="span">&nbsp;</span>
      </p>
    </div>
  );
};

InicioKAnimacion.propTypes = {
  property1: PropTypes.oneOf(["group-7", "group-9", "group-8", "group-6", "group-5"]),
};
