import React from "react";
import { ReactIconsFaFatwitter1 } from "../../icons/ReactIconsFaFatwitter1";
import "./style.css";

export const PreguntasFrecuentes = () => {
  return (
    <div className="PREGUNTAS-FRECUENTES">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />
          <div className="text-wrapper">Manejo de Finanzas Personales</div>
          <p className="cu-les-son-las">+&nbsp;&nbsp;¿Cuáles son las opciones de inversión recomendadas?</p>
          <p className="c-mo-puedo-reducir">+&nbsp;&nbsp;¿Cómo puedo reducir mis deudas de manera efectiva?</p>
          <p className="c-mo-puedo-crear-un">+&nbsp;&nbsp;¿Cómo puedo crear un presupuesto personal?</p>
          <p className="p">+&nbsp;&nbsp;¿Cuáles son las mejores prácticas para ahorrar dinero?</p>
        </div>
        <div className="group">
          <div className="overlap-group">
            <p className="text-wrapper-2">Copyright © Finanzhilfe 2023. Todos los derechos reservados.</p>
            <div className="rectangle-2" />
            <p className="text-wrapper-3">Copyright © Finanzhilfe 2023. Todos los derechos reservados.</p>
            <div className="frame-wrapper">
              <div className="frame">
                <img className="pngwing" alt="Pngwing" src="/img/pngwing-2.png" />
              </div>
            </div>
            <ReactIconsFaFatwitter1 className="react-icons-fa" color="white" />
            <div className="group-2" />
          </div>
        </div>
        <div className="text-wrapper-4">Ayuda</div>
        <div className="overlap-2">
          <div className="overlap-wrapper">
            <div className="overlap-3">
              <img className="img" alt="Rectangle" src="/img/rectangle-932.svg" />
              <div className="rectangle-3" />
              <div className="text-wrapper-5">SERVICIOS</div>
              <div className="text-wrapper-6">PENTATECH</div>
              <div className="text-wrapper-7">CONTACTO</div>
              <div className="text-wrapper-8">CLIENTES</div>
              <div className="text-wrapper-9">INICIO</div>
              <div className="text-wrapper-10">Finanzhilfe</div>
            </div>
          </div>
          <div className="mask-group" />
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-11">Donaciones</div>
          <p className="qu-medidas-de">
            +&nbsp;&nbsp;¿Qué medidas de seguridad tienen en su plataforma para garantizar la integridad de las
            donaciones?
          </p>
          <div className="overlap-5">
            <p className="cu-les-son-las-2">+&nbsp;&nbsp;¿Cuáles son las organizaciones recomendadas para donar?</p>
            <p className="puedo-elegir-a-qu">
              +&nbsp;&nbsp;¿Puedo elegir a qué causa&nbsp;&nbsp;o proyecto se destinará mi donación?
            </p>
          </div>
          <p className="cu-les-son-las-3">
            +&nbsp;&nbsp;¿Cuáles son las opciones de pago disponibles para hacer donaciones a través de su sitio?
          </p>
        </div>
        <div className="overlap-6">
          <div className="text-wrapper-12">Seguimiento Financiero</div>
          <div className="overlap-7">
            <p className="c-mo-puedo-gestionar">
              +&nbsp;&nbsp;¿Cómo puedo gestionar mis inversiones de manera eficiente?
            </p>
            <p className="cu-les-son-las-4">
              +&nbsp;&nbsp;¿Cuáles son las mejores estrategias para planificar mi jubilación?
            </p>
          </div>
          <p className="c-mo-registro-y">+&nbsp;&nbsp;¿Cómo registro y categorizo mis transacciones financieras?</p>
          <p className="c-mo-puedo-analizar">+&nbsp;&nbsp;¿Cómo puedo analizar mis gastos y ganancias?</p>
        </div>
        <p className="encuentra-respuestas">
          <span className="span">
            Encuentra respuestas en nuestros manuales de ayuda. Tu guía para el éxito financiero y la ayuda social{" "}
          </span>
          <a href="http://www.ejemplolinkficticio.com/ayuda-finanzhilfe" rel="noopener noreferrer" target="_blank">
            <span className="text-wrapper-13">Manual de Ayuda Finanzhilfe</span>
          </a>
        </p>
        <div className="div-wrapper">
          <p className="text-wrapper-14">Inicia tu formulario de ayuda</p>
        </div>
      </div>
    </div>
  );
};
