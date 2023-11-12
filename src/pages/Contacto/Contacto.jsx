import React from "react";
import { ReactIconsFaFatwitter } from "../../icons/ReactIconsFaFatwitter";
import "./style.css";
import logoInstagram from "../../pages/Contacto/pngwing-2.png";
import logoLlamada from "../../pages/Contacto/image-16.png";
import logoInstagramNegro from "../../pages/Contacto/image-17.png";
import logoTwitterNegro from "../../pages/Contacto/image-18.png";
import logoLInkedinNegro from "../../pages/Contacto/image-20.png";
import { Link } from "react-router-dom";

export const Contacto = () => {
  return (
    <div className="CONTACTO">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">FinanZ</div>
          <div className="overlap-group">
            <div className="text-wrapper-2"><Link to="/" className="colorLink">INICIO</Link></div>
            <div className="text-wrapper-2"><Link to="/" className="colorLink">INICIO</Link></div>
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-3"><Link to="/clientes" className="colorLink">CLIENTES</Link></div>
            <div className="text-wrapper-3"><Link to="/clientes" className="colorLink">CLIENTES</Link></div>
          </div>
          <div className="overlap-3">
            <div className="text-wrapper-4"><Link to="/contacto" className="colorLink">CONTACTO</Link></div>
            <div className="text-wrapper-4"><Link to="/contacto" className="colorLink">CONTACTO</Link></div>
          </div>
          <div className="overlap-4">
            <div className="text-wrapper-5"><Link to="/registrar" className="colorLink">REGISTRARSE</Link></div>
            <div className="text-wrapper-5"><Link to="/registrar" className="colorLink">REGISTRARSE</Link></div>
          </div>
          <div className="overlap-5">
            <div className="text-wrapper-6"><Link to="/sobre-nosotros" className="colorLink">PENTATECH</Link></div>
            <div className="text-wrapper-6"><Link to="/sobre-nosotros" className="colorLink">PENTATECH</Link></div>
          </div>
          <div className="overlap-6">
            <div className="text-wrapper-7"><Link to="/servicios" className="colorLink">SERVICIOS</Link></div>
            <div className="text-wrapper-7"><Link to="/servicios" className="colorLink">SERVICIOS</Link></div>
          </div>
          <div className="overlap-7">
            <div className="text-wrapper-8"><Link to="/iniciar-sesion" className="colorLink">INICIAR SESION</Link></div>
            <div className="rectangle" />
            <div className="text-wrapper-8"><Link to="/iniciar-sesion" className="colorLink">INICIAR SESION</Link></div>
          </div>
          <img className="whatsapp-image" alt="Whatsapp image" src={require("../../static/img/WhatsApp_Image_2023-11-08_at_22.02 1.png")} />
        </div>
        <div className="group">
          <div className="overlap-group-2">
            <p className="p">Copyright © FinanZ 2023. Todos los derechos reservados.</p>
            <div className="rectangle-2" />
            <p className="text-wrapper-9">Copyright © FinanZ 2023. Todos los derechos reservados.</p>
            <div className="frame-wrapper">
              <div className="frame">
                <img className="pngwing" alt="Pngwing" src={logoInstagram} />
              </div>
            </div>
            <ReactIconsFaFatwitter className="react-icons-fa" color="white" />
            <div className="group-2" />
          </div>
        </div>
        <div className="overlap-8">
          <img className="image" alt="Image" src={require("../../static/img/image-14.png")} />
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="rectangle-5" />
          <div className="rectangle-6" />
          <div className="text-wrapper-10">CONTACTANOS</div>
          <p className="text-wrapper-11">
            ¡Estamos aquí para ayudarte! Si tienes preguntas o comentarios, no dudes en ponerte en contacto con nuestro
            equipo experto. Estamos listos para escucharte y ofrecerte la orientación que necesitas.
          </p>
          <div className="text-wrapper-12">Numero Telefonico</div>
          <div className="text-wrapper-13">Instagram</div>
          <div className="text-wrapper-14"><Link className="colorLinkRedes">@FinanZ_</Link></div>
          <div className="text-wrapper-15">Twitter</div>
          <div className="text-wrapper-16"><Link className="colorLinkRedes">@FinanZ_</Link></div>
          <div className="text-wrapper-17">LinkedIn</div>
          <div className="text-wrapper-18"><Link className="colorLinkRedes">@FinanZ</Link></div>
          <div className="text-wrapper-19">Redes Sociales</div>
          <p className="horarios-de-servicio">
            Horarios de Servicio:
            <br />
            Lunes a Viernes: 9:00am - 6:00pm
            <br />
            Sabados: 9:00am - 12:00pm
          </p>
          <div className="text-wrapper-20">+1 809 000 0000</div>
          <div className="text-wrapper-21">Formulario de Contacto</div>
          <div className="rectangle-7" />
          <input className="text-wrapper-22" type="text" placeholder="Nombres"/>
          <div className="rectangle-8" />
          <input className="text-wrapper-23" type="text" placeholder="Email"/>
          <div className="rectangle-9" />
          <input className="text-wrapper-24" type="text" placeholder="Asunto"/>
          <div className="rectangle-10" />
          <input className="text-wrapper-25" type="text" placeholder="Mensaje"/>
          <div className="rectangle-11" />
          <input className="text-wrapper-26" type="text" placeholder="Apellidos"/>
          <div className="rectangle-12" />
          <div className="text-wrapper-27">Enviar</div>
          <img className="img" alt="Image" src={logoLlamada} />
          <img className="image-2" alt="Image" src={logoInstagramNegro} />
          <img className="image-3" alt="Image" src={logoTwitterNegro}/>
          <img className="image-4" alt="Image" src={logoLInkedinNegro}/>
        </div>
      </div>
    </div>
  );
};
