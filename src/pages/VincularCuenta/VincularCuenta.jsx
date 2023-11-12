import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import linea1 from "../../static/img/line-72.svg";
import poligono1 from "../../static/img/polygon-12.svg";

export const VincularCuenta = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="VINCULAR-CUENTA">
      <div className="div">
        <div className="group">
          <div className="overlap-group">
            <p className="text-wrapper">Copyright © FinanZ 2023. Todos los derechos reservados.</p>
            <div className="rectangle" />
            <p className="p">Copyright © FinanZ 2023. Todos los derechos reservados.</p>
          </div>
        </div>
        <div className="overlap">
          <div className="group-2">
            <button className="group-3" onClick={toggleMenu}>
      <img
        src={require("../../static/img/Group 13.png")}
        alt="Group"
        style={{ width: '50px', height: '50px' }} 
      />
    </button>
        { menuOpen && (
          <div className="MENU-DESPEGABLE">
          <div className="div">
          <div className="ellipse" />
          <div className="text-wrapper-20">XXXXXXXXXXXXX</div>
          <div className="text-wrapper-21"><Link to="/pantalla-principal" className="colorLink">Asesoramiento Financiero</Link></div>
          <div className="text-wrapper-22"><Link className="colorLink">Establecer metas financieras</Link></div>
          <div className="text-wrapper-23"><Link className="colorLink">Reportes con IA</Link></div>
          <div className="text-wrapper-24"><Link to="/pagos-regulares" className="colorLink">Pagos Regulares</Link></div>
          <div className="text-wrapper-25"><Link to="/vincular-cuenta" className="colorLink">Vincular Cuenta Bancaria</Link></div>
          <div className="text-wrapper-26"><Link to="/apoyo-social" className="colorLink">Apoyo Social</Link></div>
          <div className="text-wrapper-27"><Link to="/instituto-finanz" className="colorLink">Instituto Finanz</Link></div>
          <div className="text-wrapper-28"><Link to="/mujeres-al-poder" className="colorLink">Mujeres al poder</Link></div>
          <div className="text-wrapper-29"><Link to="/preguntas-frecuentes" className="colorLink">Centro de ayuda</Link></div>
          <div className="text-wrapper-30"><Link className="colorLink">Recordatorios</Link></div>
          <div className="text-wrapper-31"><Link className="colorLink">¡Queremos saber tu opinion!</Link></div>
          <div className="text-wrapper-32"><Link className="colorLink">Compartir con amigos</Link></div>
          <div className="text-wrapper-33"><Link to="/ajustes" className="colorLink">Ajustes</Link></div>
          <div className="text-wrapper-34"><Link to="/cerrar-sesion" className="colorLink">Cerrar sesion</Link></div>
          <p className="perfil-personal">
          <span className="span">Perfil </span>
          <span className="text-wrapper-15">Personal</span>
        </p>
      </div>
          </div>
        )}
          </div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-2">VINCULAR CUENTA BANCARIA</div>
          <img className="line-3" alt="Line" src={linea1} />
          <div className="div-wrapper">
            <div className="text-wrapper-3">Vincular</div>
          </div>
          <div className="overlap-3">
            <div className="text-wrapper-4">Direccion de email</div>
          </div>
          <div className="overlap-4">
            <p className="text-wrapper-4">Nombre que figura en la tarjeta</p>
          </div>
          <div className="overlap-5">
            <div className="text-wrapper-4">Nombre</div>
          </div>
          <div className="overlap-6">
            <div className="text-wrapper-5">Apellidos</div>
          </div>
          <div className="overlap-7">
            <div className="text-wrapper-4">Numero de Tarjeta</div>
          </div>
          <div className="overlap-8">
            <div className="text-wrapper-4">MM/AA</div>
          </div>
          <div className="overlap-9">
            <div className="text-wrapper-6">CVV</div>
          </div>
          <p className="text-wrapper-7">Usar como nombre para la facturacion</p>
          <div className="rectangle-2" />
          <p className="text-wrapper-8">
            Autorizo a F I N A N Z a vincular esta cuenta bancaria para facilitar un mejor seguimiento de mis
            actividades. Entiendo y Acepto que la información de mi cuenta bancaria será tratada de manera confidencial
            y segura.
          </p>
          <div className="rectangle-3" />
          <div className="overlap-10">
            <div className="text-wrapper-4">Pais</div>
            <img className="polygon" alt="Polygon" src={poligono1} />
          </div>
          <div className="overlap-11">
            <div className="text-wrapper-9">Codigo Postal</div>
          </div>
          <p className="si-he-le-do-y-presto">
            <span className="span">Si, he leído y presto mi consentimiento&nbsp;&nbsp;a los </span>
            <span className="text-wrapper-10">Términos y Condiciones de Uso </span>
            <span className="span">del sitio.&nbsp;&nbsp;</span>
          </p>
          <div className="rectangle-4" />
        </div>
        <img className="image" alt="Image" src={require("../../static/img/image-39.png")} />
        <div className="overlap-12">
          <div className="overlap-wrapper">
            <div className="overlap-group">
              <p className="text-wrapper">Copyright © Finanzhilfe 2023. Todos los derechos reservados.</p>
              <div className="rectangle" />
              <p className="p">Copyright © Finanzhilfe 2023. Todos los derechos reservados.</p>
            </div>
          </div>
          <img className="image-2" alt="Image" src={require("../../static/img/image-40.png")} />
        </div>
      </div>
    </div>
  );
};
