import React, { useState, useEffect } from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import logoLineaVerde1 from "../../static/img/1200.svg"
import logoLineaRoja1 from "../../static/img/3000.svg"
import logoLineaNaranja1 from "../../static/img/300.svg"
import logoLineaAmarilla1 from "../../static/img/800.svg"
import logoLineaVerde2 from "../../static/img/2500.svg"
import logoLineaRoja2 from "../../static/img//20000.svg"

export const PantallaPrincipal = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const [transacciones, setTransacciones] = useState([{
    "tipo": "",
    "descripcion": "",
    "total": 0
  }]);

  useEffect(() => {
    const cargarTransacciones = async () => {
      const usuarioId = 1;
      const periodo = 'diario';
      const data = await fetchTransacciones(usuarioId, periodo);
      if (data) {
        setTransacciones(data);
      }
    };

    cargarTransacciones();
  }, []);

  const fetchTransacciones = async (usuarioId, periodo) => {
    try {
      const response = await fetch(`http://localhost:4000/transacciones?usuario_id=${usuarioId}&periodo=${periodo}`);
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener transacciones:', error);
    }
  };

  console.log(transacciones)

  return (
    <div className="ASESORAMIENTO">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Gastos</div>
          <div className="text-wrapper-2">Ingresos</div>
          <div className="overlap-2">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <img className="element" alt="Element" src={logoLineaVerde1} />
                <img className="img" alt="Element" src={logoLineaAmarilla1} />
                <img className="element-2" alt="Element" src={logoLineaRoja1} />
                <img className="element-3" alt="Element" src={logoLineaNaranja1} />  
              </div>
            </div>
            <div className="text-wrapper-4">DOP$5,300.00</div>
          </div>
          <div className="overlap-3">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <img className="element-4" alt="Element" src={logoLineaVerde2} />
                <img className="overlap-group-wrapper" alt="Element" src={logoLineaRoja2} />
              </div>
            </div>
            <div className="text-wrapper-5">DOP$22,500.00</div>
          </div>
          
          {transacciones.length > 5 ? (
  <>
    <div className="text-wrapper-6">DOP${transacciones[0].total}.00</div>
    <div className="text-wrapper-7">DOP${transacciones[1].total}.00</div>
    <div className="text-wrapper-8">DOP${transacciones[4].total}.00</div>
    <div className="text-wrapper-9">DOP${transacciones[3].total}.00</div>
    <div className="text-wrapper-10">DOP${transacciones[2].total}.00</div>
    <div className="text-wrapper-11">DOP${transacciones[5].total}.00</div>
    <div className="text-wrapper-50">Salud</div>
    {/* ...resto del código... */}
  </>
) : (
  // Manejar el caso en que no hay suficientes transacciones
  <div>No hay suficientes transacciones para mostrar</div>
)}
          <div className="image-wrapper">
            <img className="image" alt="Image" src={require("../../static/img/image-57.png")} />
          </div>
          <div className="text-wrapper-51">Ocio</div>
          <div className="img-wrapper">
            <img className="image-2" alt="Image" src={require("../../static/img/image-56.png")} />
          </div>
          <div className="text-wrapper-14">Belleza</div>
          <div className="overlap-4">
            <img className="image-3" alt="Image" src={require("../../static/img/image-59.png")} />
          </div>
          <div className="text-wrapper-15">Transporte</div>
          <div className="overlap-5">
            <img className="image-4" alt="Image" src={require("../../static/img/image-63.png")} />
          </div>
          <div className="text-wrapper-16">Cheque</div>
          <div className="overlap-6">
            <img className="image-5" alt="Image" src={require("../../static/img/image-66.png")} />
          </div>
          <div className="text-wrapper-17">Regalo</div>
          <div className="overlap-7">
            <img className="image-6" alt="Image" src={require("../../static/img/image-65.png")} />
          </div>
          <p className="p">11 Nov - 18 Nov</p>
          <img className="image-7" alt="Image" src={require("../../static/img/image-29.png")} />
        </div>
        <div className="text-wrapper-18"><Link to="/añadir-gastos" className="colorLink">GASTOS</Link></div>
        <div className="text-wrapper-19"><Link to="/añadir-ingresos" className="colorLink">INGRESOS</Link></div>
        <div className="text-wrapper-20">GENERAL</div>
        <div className="text-wrapper-21">BALANCE</div>
        <div className="text-wrapper-22">DOP$ 24,855</div>
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
        <div className="group">
        </div>
        <div className="navbar">
          <div className="text-wrapper-23">Diario</div>
          <div className="text-wrapper-24">Mes</div>
          <div className="text-wrapper-25">Año</div>
          <div className="text-wrapper-26">Período</div>
          <div className="text-wrapper-27">Semana</div>
        </div>
      </div>
    </div>
  );
};
