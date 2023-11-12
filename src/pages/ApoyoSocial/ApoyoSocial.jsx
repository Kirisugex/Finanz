import React from "react";
import { ReactIconsFaFatwitter1 } from "../../icons/ReactIconsFaFatwitter1";
import "./style.css";
import { Link } from "react-router-dom";
import rectangulo1 from "../../static/img/rectangle-932.svg";
import linea1 from "../../static/img/line-71.svg";
import linea2 from "../../static/img/line-74.svg";

export const ApoyoSocial = () => {
  return (
    <div className="APOYO-SOCIAL">
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
            <img className="img" alt="Rectangle" src={rectangulo1} />
            <div className="rectangle-2" />
            <div className="text-wrapper-2"><Link to="/servicios" className="colorLink">SERVICIOS</Link></div>
            <div className="text-wrapper-3"><Link to="/pentatech" className="colorLink">PENTATECH</Link></div>
            <div className="text-wrapper-4"><Link to="/contacto" className="colorLink">CONTACTO</Link></div>
            <div className="text-wrapper-5"><Link to="/clientes" className="colorLink">CLIENTES</Link></div>
            <div className="text-wrapper-6"><Link to="/inicio" className="colorLink">INICIO</Link></div>
            <div className="text-wrapper-7">FinanZ</div>
            <img className="whatsapp-image" alt="Whatsapp image" src={require("../../static/img/WhatsApp_Image_2023-11-08_at_22.02 1.png")} />
          </div>
        </div>
        <p className="text-wrapper-8">
          Realiza donaciones a ONGs certificadas a nivel nacional en la República Dominicana
        </p>
        <img className="line" alt="Line" src={linea1} />
        <div className="text-wrapper-9">Donaciones</div>
        <div className="overlap-2">
          <div className="text-wrapper-10">Desarrollo Comunitario</div>
          <img className="line-2" alt="Line" src={linea2} />
          <p className="text-wrapper-11">
            Ayuda a organizaciones destinadas a mejorar la educación, la salud y el bienestar general de las comunidades
            a las que asisten.
          </p>
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-10">Inclusión Financiera</div>
          <img className="line-2" alt="Line" src={linea2} />
          <p className="text-wrapper-12">
            Ayuda a organizaciones destinadas a mejorar el acceso que tienen las personas y las empresas a diversos
            productos y servicios financieros útiles y asequibles que atienden sus necesidades.
          </p>
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-10"><Link to="/mujeres-en-stem" className="colorLinkMujeres">Mujeres en STEM</Link></div>
          <img className="line-2" alt="Line" src={linea2} />
          <p className="text-wrapper-13">
            Ayuda a organizaciones destinadas a proveer soporte a mujeres en al área de STEM con fines educativos y como
            impulso para sacar adelante sus ideas de negocios.
          </p>
        </div>
      </div>
    </div>
  );
};
