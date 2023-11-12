import React, {useState} from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const PagosRegularesIngresos = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="PAGOS-REGULARES">
    <div className="div">
      <div className="overlap-group">
      </div>
      <div className="text-wrapper-301"><Link to="/pagos-regulares-gastos" className="colorLink">GASTOS</Link></div>
      <div className="text-wrapper-302">INGRESOS</div>
      <div className="text-wrapper-303"><Link to="/pagos-regulares" className="colorLink">PAGOS REGULARES</Link></div>
      <div className="group">
      <button className="group" onClick={toggleMenu}>
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
    </div>
  </div>
  );
};
