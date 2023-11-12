import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import linea from "../../static/img/line-88.svg";

export const MujeresAlPoder = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="MUJERES-AL-PODER">
<div className="overlap-wrapper">
<div className="overlap">
<div className="overlap-group">
<img className="rectangle" alt="Rectangle" src={require("../../static/img/Rectangle 996.png")} />
<div className="group">
<div className="div">
<p className="text-wrapper">Copyright © Finanzhilfe 2023. Todos los derechos reservados.</p>
<div className="rectangle-2" />
<p className="copyright-f-i-n-a-n">
Copyright © F I N A N Z&nbsp;&nbsp;2023. Todos los derechos reservados.
</p>
</div>
</div>
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
          <div className="text-wrapper">XXXXXXXXXXXXX</div>
          <div className="text-wrapper-2"><Link to="/pantalla-principal" className="colorLink">Asesoramiento Financiero</Link></div>
          <div className="text-wrapper-3"><Link className="colorLink">Establecer metas financieras</Link></div>
          <div className="text-wrapper-7"><Link className="colorLink">Reportes con IA</Link></div>
          <div className="text-wrapper-5"><Link to="/pagos-regulares" className="colorLink">Pagos Regulares</Link></div>
          <div className="text-wrapper-6"><Link to="/vincular-cuenta" className="colorLink">Vincular Correo</Link></div>
          <div className="text-wrapper-9"><Link to="/instituto-finanz" className="colorLink">Instituto Finanz</Link></div>
          <div className="text-wrapper-8"><Link to="/mujeres-al-poder" className="colorLink">Proyecto: Mujeres al poder</Link></div>
          <div className="text-wrapper-10"><Link to="/preguntas-frecuentes" className="colorLink">Centro de ayuda</Link></div>
          <div className="text-wrapper-4"><Link className="colorLink">Recordatorios</Link></div>
          <div className="text-wrapper-12"><Link className="colorLink">¡Queremos saber tu opinion!</Link></div>
          <div className="text-wrapper-13"><Link className="colorLink">Compartir con amigos</Link></div>
          <div className="text-wrapper-14"><Link to="/ajustes" className="colorLink">Ajustes</Link></div>
          <div className="text-wrapper-16"><Link to="/inicio" className="colorLink">Cerrar sesion</Link></div>
          <p className="perfil-personal">
          <span className="span">Perfil </span>
          <span className="text-wrapper-15">Personal</span>
        </p>
      </div>
          </div>
        )}
</div>
<img className="image" alt="Image" src={require("../../static/img/image-39.png")} />
</div>
<div className="div-wrapper">
<div className="text-wrapper-2">Financiamiento PYMEs</div>
</div>
<div className="overlap-2">
<div className="text-wrapper-2">Mujeres en STEM</div>
</div>
<div className="overlap-3">
<div className="text-wrapper-3">Webinar</div>
</div>
<div className="overlap-4">
<div className="text-wrapper-4">Eventos Presenciales</div>
</div>
<div className="overlap-5">
<div className="text-wrapper-5">Chat Personalizado</div>
</div>
<p className="p">
Este proyecto tiene como objetivo respaldar a mujeres que buscan mejorar su educación, o enfrentan
dificultades financieras. Este proyecto actúa como un impulso empoderador que promueve el crecimiento
integral y el desarrollo de las mujeres en diversas áreas de sus vidas.
</p>
<div className="text-wrapper-6">MUJERES AL PODER</div>
</div>
</div>
</div>
  );
};
