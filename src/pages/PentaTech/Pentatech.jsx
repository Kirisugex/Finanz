import React from "react";
import { ReactIconsFa } from "../../components/ReactIconsFa";
import { ReactIconsFaWrapper } from "../../components/ReactIconsFaWrapper";
import "./style.css";
import { Link } from "react-router-dom";

export const Pentatech = () => {
  return (
    <div className="PENTATECH">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />
          <div className="text-wrapper">FinanZ</div>
          <div className="text-wrapper-26"><Link to="/" className="colorLink">INICIO</Link></div>
          <div className="text-wrapper-28"><Link to="/clientes" className="colorLink">CLIENTES</Link></div>
          <div className="text-wrapper-31"><Link to="/contacto" className="colorLink">CONTACTO</Link></div>
          <div className="text-wrapper-29"><Link to="/registrar" className="colorLink">REGISTRARSE</Link></div>
          <div className="text-wrapper-30"><Link to="/sobre-nosotros" className="colorLink">PENTATECH</Link></div>
          <div className="text-wrapper-27"><Link to="/servicios" className="colorLink">SERVICIOS</Link></div>
          <div className="rectangle-2" />
          <div className="text-wrapper-2"><Link to="/iniciar-sesion" className="colorLink">INICIAR SESION</Link></div>
          <img className="whatsapp-image" alt="Whatsapp image" src={require("../../static/img/WhatsApp_Image_2023-11-08_at_22.02 1.png")} />
        </div>
        <div className="frame">
          <div className="text-wrapper-3">PENTATECH</div>
          <p className="penta-proviene-del">
            <span className="span">“Penta”</span>
            <span className="text-wrapper-4">
              {" "}
              Proviene del griego, significa cinco.
              <br />
            </span>
            <span className="span">“Tech”</span>
            <span className="text-wrapper-4">
              {" "}
              Abreviatura de Technology, significa Tecnologia en Español.
              <br />
              <br />
              PentaTech es un equipo de desarrollo y diseño de software calificado y multidisciplinario compuesto por
              cinco ingenieros de software apasionados por la tecnología, el equipo PentaTech se destaca por su enfoque
              innovador, su compromiso con la calidad y su capacidad para abordar desafíos tecnológicos de manera
              efectiva. La colaboración y creatividad son pilares fundamentales, lo que nos permite diseñar soluciones
              de software que satisfacen las necesidades de sus clientes y marcan la diferencia en el mercado
              tecnologico dominicano.
            </span>
          </p>
          <img className="img" alt="Rectangle" src={require('../../static/img/rectangle-941.png')} />
          <div className="text-wrapper-5">MISION</div>
          <div className="overlap-group">
            <div className="text-wrapper-6">VISION</div>
            <img className="image" alt="Image" src={require('../../static/img/image-25.png')} />
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-6">VALORES</div>
            <img className="image-2" alt="Image" src={require('../../static/img/image-26.png')} />
          </div>
          <p className="p">
            Desarrollar productos de software innovadores y funcionales que aborden problemas sociales, impulsando el
            cambio positivo en la sociedad. Crear soluciones tecnológicas de calidad que mejoren la vida de las personas
            y promuevan un mundo más sostenible.
          </p>
          <p className="text-wrapper-7">
            Ser reconocidos como líderes en la creación de software con un propósito, inspirando a otras empresas y
            comunidades a adoptar la innovación tecnológica para abordar desafíos sociales. Nos esforzamos por ser una
            fuente de inspiración en la industria, impulsando la responsabilidad social y la excelencia en el diseño de
            software.
          </p>
          <div className="innovaci-n">
            Innovación
            <br />
            Creatividad
            <br />
            Calidad
            <br />
            Responsabilidad Social
            <br />
            Colaboración
            <br />
            Empoderamiento
            <br />
            Transparencia
          </div>
          <img className="line" alt="Line" src={require('../../static/img/line-77.svg')} />
          <img className="line-2" alt="Line" src={require('../../static/img/line-77.svg')} />
          <img className="image-3" alt="Image" src={require('../../static/img/image-24.png')} />
          <div className="text-wrapper-8">Compromisos Centrales</div>
          <img className="line-3" alt="Line" src={require('../../static/img/line-79.svg')} />
          <img className="line-4" alt="Line" src={require('../../static/img/line-79.svg')} />
          <img className="ellipse" alt="Ellipse" src={require('../../static/img/ellipse-15.png')} />
          <img className="ellipse-2" alt="Ellipse" src={require('../../static/img/ellipse-16.png')} />
          <img className="ellipse-3" alt="Ellipse" src={require('../../static/img/ellipse-17.png')} />
          <img className="ellipse-4" alt="Ellipse" src={require('../../static/img/ellipse-18.png')} />
          <img className="ellipse-5" alt="Ellipse" src={require('../../static/img/ellipse-19.png')} />
          <div className="text-wrapper-9">Miembros del Equipo</div>
          <p className="text-wrapper-10">
            Apasionada en el área de Diseño y Arquitectura de Software así como en la Gestion de Proyectos Tecnologicos.
            Se identifica como una comunicadora agil, líder colaborativa y una eficiente solucionadora de problemas
          </p>
          <div className="text-wrapper-11">Keisy Polanco</div>
          <div className="text-wrapper-12">Lider</div>
          <p className="amante-de-la">
            Amante de la tecnología. Experimentado en diferentes áreas de la programación,&nbsp;&nbsp;como el desarrollo
            de paginas web. Por otro lado manejo de servidores como Azure, y también manejo de bases de datos como SQL
            Server y Postgres. Cuenta experiencia en el manejo de contenedores para controlar el desarrollo de las
            aplicaciones en diferentes ambientes&nbsp;de&nbsp;producción.
          </p>
          <div className="text-wrapper-13">Ismael Polanco</div>
          <div className="text-wrapper-14">Desarrollador Full-Stack</div>
          <p className="text-wrapper-15">
            Con experiencia en diversas áreas, como herramientas de gestión de proyectos, programación en varios
            lenguajes, bases de datos, administración de sistemas operativos Windows y Linux, gestión de redes de
            computadoras y la aplicación de metodologías ágiles.
          </p>
          <div className="text-wrapper-16">Alejandro Beltre</div>
          <div className="text-wrapper-17">Desarrollador Back-End</div>
          <p className="text-wrapper-18">
            Entusiasmada por el fascinante mundo de la tecnología, con un sólido conocimiento en áreas que incluyen
            metodologías ágiles, análisis de requisitos, y el uso de herramientas como Azure y SQL Server. Su enfoque es
            elevar de forma continua los estándares de calidad, con la finalidad de alcanzar la excelencia
            en cada proyecto.
          </p>
          <div className="text-wrapper-19">Diana Rondón</div>
          <div className="text-wrapper-20">Analista de QA</div>
          <p className="text-wrapper-21">
          Interesada en el diseño web, específicamente en aumentar la usabilidad y accesibilidad de los productos 
          de software para mejorar la experiencia de los usuarios.
          </p>
          <div className="text-wrapper-22">Maria Valdez</div>
          <div className="text-wrapper-23">Diseñador UI/UX</div>
        </div>
        <div className="group">
          <div className="overlap-3">
            <p className="text-wrapper-24">Copyright © Finanzhilfe 2023. Todos los derechos reservados.</p>
            <div className="rectangle-3" />
            <p className="text-wrapper-25">Copyright © Finanzhilfe 2023. Todos los derechos reservados.</p>
            <div className="frame-wrapper">
              <div className="pngwing-wrapper">
                <img className="pngwing" alt="Pngwing" src="../../static/img/react-icons-fa-falinkedinin-1.png" />
              </div>
            </div>
            <div className="react-icons-fa-wrapper">
              <ReactIconsFa />
            </div>
          </div>
          <ReactIconsFaWrapper />
        </div>
      </div>
    </div>
  );
};
