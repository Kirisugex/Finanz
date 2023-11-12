import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const InstitutoFinanz = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="INSTITUTO-FINANZ">
      <div className="div">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <p className="text-wrapper">Copyright © FinanZ 2023. Todos los derechos reservados.</p>
              <div className="rectangle" />
              <p className="p">Copyright © FinanZ 2023. Todos los derechos reservados.</p>
            </div>
          </div>
          <img className="image" alt="Image" src={require("../../static/img/image-52.png")} />
          <div className="overlap-wrapper">
            <div className="overlap-group">
              <p className="text-wrapper">Copyright © FinanZ 2023. Todos los derechos reservados.</p>
              <div className="rectangle" />
              <p className="p">Copyright © F I N A N Z 2023. Todos los derechos reservados.</p>
            </div>
          </div>
          <img className="img" alt="Image" src={require("../../static/img/image-52.png")} />
        </div>
        <div className="text-wrapper-2">OCT `23</div>
        <div className="text-wrapper-3">40 min</div>
        <div className="text-wrapper-4">NOV `23</div>
        <div className="text-wrapper-5">9 min.</div>
        <div className="overlap-2">
          <div className="text-wrapper-6">AGO `23</div>
          <div className="text-wrapper-7">Lectura</div>
          <p className="text-wrapper-8">Cómo Transformar tus Finanzas Personales: Consejos Prácticos y Efectivos</p>
        </div>
        <div className="text-wrapper-9">SEP `23</div>
        <div className="text-wrapper-10">10 min</div>
        <p className="text-wrapper-11">
          Inversiones Responsables: Construyendo un Futuro Financiero Sostenible - Capitulo 3
        </p>
        <p className="text-wrapper-12">Invierte con Impacto: Opciones en Rep. Dominicana</p>
        <p className="text-wrapper-13">Acceso Financiero Justo 01: Transformando Vidas</p>
        <div className="text-wrapper-14">Podcast</div>
        <div className="text-wrapper-15">Tutoriales</div>
        <div className="text-wrapper-16">Tutoriales</div>
        <div className="text-wrapper-17">Webinar</div>
        <div className="image-wrapper">
          <img className="image-2" alt="Image" src={require("../../static/img/image-51.png")} />
        </div>
        <img className="mask-group" alt="Mask group" src={require("../../static/img/mask-group-1.png")} />
        <div className="img-wrapper">
          <img className="image-3" alt="Image" src={require("../../static/img/image-51.png")} />
        </div>
        <div className="text-wrapper-18">SEP `23</div>
        <div className="text-wrapper-19">21 min</div>
        <p className="text-wrapper-20">Entrevista: ¿Cómo optimizar las finanzas y tecnología en las PYMES?</p>
        <div className="text-wrapper-21">Podcast</div>
        <div className="overlap-3">
          <img className="image-4" alt="Image" src="/img/image-51.png" />
        </div>
        <img className="mask-group-2" alt="Mask group" src={require("../../static/img/mask-group-6.png")} />
        <img className="mask-group-3" alt="Mask group" src={require("../../static/img/mask-group-5.png")} />
        <img className="mask-group-4" alt="Mask group" src={require("../../static/img/mask-group-4.png")} />
        <img className="mask-group-5" alt="Mask group" src={require("../../static/img/mask-group-3.png")} />
        <div className="overlap-4">
          <img className="image-5" alt="Image" src={require("../../static/img/image-32.png")} />
        </div>
        <div className="navbar">
          <div className="text-wrapper-22">General</div>
          <div className="text-wrapper-23">Glosario</div>
          <div className="text-wrapper-24">Tutoriales</div>
          <div className="text-wrapper-25">Podcast</div>
          <div className="text-wrapper-26">Webinars</div>
          <div className="text-wrapper-27">Quiz</div>
          <div className="text-wrapper-28">Instrumentos</div>
        </div>
        <div className="overlap-5">
          <p className="f-i-n-a-n-z">
            <span className="span">F I N A N Z</span>
            <span className="text-wrapper-29">&nbsp;</span>
            <span className="text-wrapper-30">Instituto</span>
          </p>
          <img className="whatsapp-image" alt="Whatsapp image" src={require("../../static/img/whatsapp-image-2023-11-08-at-22-02-1.png")} />
          <div className="group-2">
            <img className="line" alt="Line" src="/img/line-88.svg" />
            <img className="line-2" alt="Line" src="/img/line-88.svg" />
            <img className="line-3" alt="Line" src="/img/line-88.svg" />
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-31">Buscar</div>
          </div>
        </div>
        <div className="text-wrapper-32">Podcast</div>
      </div>
    </div>
  );
};
