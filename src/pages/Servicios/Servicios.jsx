import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Servicios = () => {
    return (
        <div className="SERVICIOS">
            <div className="div">
                <div className="overlap">
                    <div className="rectangle" />
                    <div className="text-wrapper">FinanZ</div>
                    <div className="text-wrapper-2"><Link to="/" className="colorLink">INICIO</Link></div>
                    <div className="text-wrapper-3"><Link to="/clientes" className="colorLink">CLIENTES</Link></div>
                    <div className="text-wrapper-4"><Link to="/contacto" className="colorLink">CONTACTO</Link></div>
                    <div className="text-wrapper-5"><Link to="/contacto" className="colorLink">REGISTRARSE</Link></div>
                    <div className="text-wrapper-6"><Link to="/sobre-nosotros" className="colorLink">PENTATECH</Link></div>
                    <div className="text-wrapper-7"><Link to="/servicios" className="colorLink">SERVICIOS</Link></div>
                    <div className="text-wrapper-8"><Link to="/iniciar-sesion" className="colorLink">PENTATECH</Link></div>
                    <div className="rectangle-2" />
                    <p className="p">FINANZ</p>
                    <div className="text-wrapper-9"><Link to="/" className="colorLink">INICIO</Link></div>
                    <div className="text-wrapper-10"><Link to="/clientes" className="colorLink">CLIENTES</Link></div>
                    <div className="text-wrapper-11"><Link to="/contacto" className="colorLink">CONTACTO</Link></div>
                    <div className="text-wrapper-12"><Link to="/sobre-nosotros" className="colorLink">REGISTRARSE</Link></div>
                    <div className="text-wrapper-13"><Link to="/sobre-nosotros" className="colorLink">PENTATECH</Link></div>
                    <div className="text-wrapper-14"><Link className="colorLink" to="/servicios">SERVICIOS</Link></div>
                    <div className="rectangle-3" />
                    <div className="text-wrapper-15"><Link to="/iniciar-sesion" className="colorLink">INICAR SESION</Link></div>
                    <img className="whatsapp-image" alt="Whatsapp image" src={require("../../static/img/WhatsApp_Image_2023-11-08_at_22.02 1.png")} />
                </div>
                <div className="frame">
                    <div className="overlap-group">
                        <div className="rectangle-4" />
                        <div className="rectangle-5" />
                        <div className="rectangle-6" />
                        <div className="rectangle-7" />
                        <div className="text-wrapper-16">Proyecto Mujeres al poder</div>
                        <p className="se-enfoca-en-brindar">
                            Se enfoca en brindar servicios de asesoramiento financiero personalizado a mujeres y a pequeñas y medianas
                            empresas (PYMEs) lideradas por mujeres, se organizaran eventos, webinarios o reuniones en línea para crear
                            una comunidad de mujeres financieramente empoderadas y empresarias. Esto permitiría a las mujeres
                            compartir experiencias, aprender unas de otras y establecer contactos. Se trabajará en las donaciones
                            dirigidas a mujeres estudiantes y aquellas que se encuentren en situaciones de vulnerabilidad. <br />
                            <br />
                            Esta iniciativa busca brindar apoyo adicional a las mujeres que buscan mejorar sus perspectivas educativas
                            o que enfrentan desafíos financieros en situaciones de dificultad. De esta manera, el &#34;Proyecto
                            Mujeres al Poder&#34; se convierte en un motor de empoderamiento que contribuye al crecimiento y
                            desarrollo de las mujeres en todos los aspectos de sus vidas.
                        </p>
                        <img className="img" alt="Rectangle" src={require("../../static/img/Rectangle 946.png")} />
                    </div>
                    <div className="overlap-2">
                        <div className="text-wrapper-17">Apoyo Social</div>
                        <p className="finanz-promueve-la">
                            <span className="span">Finanz</span>
                            <span className="text-wrapper-18">
                                {" "}
                                promueve la responsabilidad social y la solidaridad al ofrecer a los usuarios la oportunidad de
                                contribuir a organizaciones sin fines de lucro.
                                <br />
                                <br />
                                Los usuarios pueden realizar donaciones a ONGs dedicadas a causas de inclusión financiera, desarrollo
                                comunitario y universidades que apoyen la educacion para mujeres en STEM. Esto fomenta una cultura de
                                apoyo a las comunidades y permite a los usuarios contribuir de manera significativa a causas sociales e
                                inclusion educativa.
                            </span>
                        </p>
                    </div>
                    <div className="overlap-group-2">
                        <div className="text-wrapper-19">Asesoramiento Financiero</div>
                        <p className="este-asesoramiento">
                            Este asesoramiento se basa en la información recopilada e ingresada por el usuario, tambien existe la
                            opcion de conectar la pagina web con el banco de su preferiencia y se adapta a las necesidades financieras
                            individuales de cada usuario. Para usuarios empresariales, incluye herramientas de análisis de flujo de
                            efectivo, previsiones y seguimiento de inversiones
                            <br />
                            <br />
                            Los usuarios pueden recibir recomendaciones sobre ahorro, inversión, gestión de deudas y otros aspectos
                            importantes de sus finanzas.
                        </p>
                    </div>
                    <div className="overlap-3">
                        <p className="text-wrapper-19">
                            Instituto <br />FINANZ
                        </p>
                        <p className="finanz-cuenta-con">
                            <span className="span">Finanz </span>
                            <span className="text-wrapper-18">
                                cuenta con una amplia gama de recursos educativos que incluyen artículos, videos y tutoriales.
                                <br />
                                <br />
                                Estos recursos educativos están diseñados para ayudar a los usuarios a comprender conceptos financieros,
                                mejorar su alfabetización financiera y tomar decisiones financieras sólidas. <br />
                                <br />
                                Los materiales educativos son accesibles para usuarios de diferentes niveles de conocimiento financiero.
                            </span>
                        </p>
                    </div>
                    <div className="text-wrapper-20">FUNCIONES PRINCIPALES DE FINANZ</div>
                </div>
            </div>
        </div>
    );
};
