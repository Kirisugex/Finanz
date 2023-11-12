import React from "react";
import { Link } from "react-router-dom";
import { InicioKAnimacion } from "../../components/InicioKAnimacion";
import "./style.css";
import logoTwitter from '../../static/img/vector.svg';

export const Inicio = () => {
  return (
    <div className="INICIO">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="rectangle" />
          <p className="div">Copyright © FinanZ 2023. Todos los derechos reservados.</p>
          <div className="text-wrapper-2">FinanZ</div>
          <img className="image" alt="Image" src={require('../../static/img/image-7.png')} />
          <div className="rectangle-2" />
          <img className="vector" alt="Vector" src={logoTwitter} />
          <div className="text-wrapper-3"><Link to="/" className="colorLink">INICIO</Link></div>
          <div className="text-wrapper-4"><Link to="/clientes" className="colorLink">CLIENTES</Link></div>
          <div className="text-wrapper-5"><Link to="/contacto" className="colorLink">CONTACTO</Link></div>
          <div className="text-wrapper-6"><Link to="/registrar" className="colorLink">REGISTRARSE</Link></div>
          <div className="text-wrapper-7"><Link to="/sobre-nosotros" className="colorLink">PENTATECH</Link></div>
          <div className="text-wrapper-8"><Link to="/servicios" className="colorLink">SERVICIOS</Link></div>
          <InicioKAnimacion className="INICIO-k-ANIMACION-instance" property1="group-5" />
          <div className="text-wrapper-9">¡Estamos aqui para ti!</div>
          <div className="text-wrapper-10"><Link>Mas Información</Link></div>
          <p className="p">Copyright © FinanZ 2023. Todos los derechos reservados.</p>
          <div className="group">
            <div className="frame">
              <img className="pngwing" alt="Pngwing" src={require("../../static/img/pngwing-2.png")} />
            </div>
          </div>
          <div className="group-2" />
          <div className="rectangle-3" />
          <div className="text-wrapper-11"><Link to="/iniciar-sesion" className="colorLink">INICIAR SESION</Link></div>
          <img className="whatsapp-image" alt="Whatsapp image" src={require("../../static/img/WhatsApp_Image_2023-11-08_at_22.02 1.png")} />
        </div>
      </div>
    </div>
  );
};