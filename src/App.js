import "./App.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { AadirGastos } from "./pages/AadirGastos/AadirGastos";
import { AadirIngresos } from "./pages/AadirIngresos/AadirIngresos";
import { Ajustes } from "./pages/Ajustes/Ajustes";
import { ApoyoSocial } from "./pages/ApoyoSocial/ApoyoSocial";
import { Clientes } from "./pages/Clientes/Clientes";
import { Contacto } from "./pages/Contacto";
import { FormularioDeAyuda } from "./pages/FormularioAyuda/FormularioDeAyuda";
import { IniciarSesion } from "./pages/IniciarSesion/IniciarSesion";
import { Inicio } from "./pages/Inicio/Inicio";
import { InstitutoFinanz } from "./pages/InstitutoFinanz/InstitutoFinanz";
import { MenuDespegable } from "./pages/MenuDespegable/MenuDespegable";
import { MujeresAlPoder } from "./pages/MujeresAlPoder/MujeresAlPoder";
import { MujeresEnStem } from "./pages/MujeresEnStem/MujeresEnStem";
import { PagosRegulares } from "./pages/PagosRegulares/PagosRegulares";
import { PagosRegularesGastos } from "./pages/PagosRegularesGastos/PagosRegularesGastos";
import { PagosRegularesIngresos } from "./pages/PagosRegularesIngresos/PagosRegularesIngresos";
import { PantallaYaDentro } from "./pages/PantallaDentroOpcion/PantallaYaDentro";
import { PantallaPrincipal } from "./pages/PantallaPrincipal/PantallaPrincipal";
import { PantallaRegistroCuentaEmpresarial } from "./pages/PantallaRegistroCuentaEmpresarial/PantallaRegistro";
import { PantallaRegistroCuentaPersonal } from "./pages/PantallaRegistroCuentaPersonal/PantallaRegistro";
import { Pentatech } from "./pages/PentaTech";
import { PreguntasFrecuentes } from "./pages/PreguntasFrecuentes/PreguntasFrecuentes";
import { RecuperarContra } from "./pages/RecuperarContra";
import { RecursosEducativos } from "./pages/RecursosEducativos/RecursosEducativos";
import { Registrar } from "./pages/Registrar/Registrar";
import { RegistrarmeComoFundacion } from "./pages/RegistrarmeComoFundacion/RegistrarmeComo";
import { Seguimiento } from "./pages/SeguimientoFinanciero/Seguimiento";
import { Servicios } from "./pages/Servicios/Servicios";
import { VincularCuenta } from "./pages/VincularCuenta/VincularCuenta";

function App() {
  return (
    <div className="Aplicacion">
      <BrowserRouter>
      <Routes>
        <Route path="/añadir-gastos" element={ <AadirGastos /> } />
        <Route path="/añadir-ingresos" element={ <AadirIngresos /> } />
        <Route path="/ajustes" element={ <Ajustes /> } />
        <Route path="/apoyo-social" element={ <ApoyoSocial />} />
        <Route path="/clientes" element={ <Clientes /> } />
        <Route path="/contacto" element={ <Contacto /> } />
        <Route path="/formulario-ayuda" element={ <FormularioDeAyuda />} />
        <Route path="/iniciar-sesion" element={ <IniciarSesion /> } />
        <Route path="/" element={ <Inicio /> } />
        <Route path="/instituto-finanz" element={ <InstitutoFinanz />}/>
        <Route path="/menu-desplegable" element={ <MenuDespegable /> } />
        <Route path="/mujeres-al-poder" element={ <MujeresAlPoder />} />
        <Route path="/mujeres-en-stem" element={ <MujeresEnStem />} />
        <Route path="/pagos-regulares" element={ <PagosRegulares />} />
        <Route path="/pagos-regulares-gastos" element={ <PagosRegularesGastos />} />
        <Route path="/pagos-regulares-ingresos" element={ <PagosRegularesIngresos />} />
        <Route path="/pantalla-dentro" element={ <PantallaYaDentro /> } />
        <Route path="/pantalla-principal" element={ <PantallaPrincipal /> } />
        <Route path="/pantalla-registro-cuenta-empresarial" element={ <PantallaRegistroCuentaEmpresarial /> } />
        <Route path="/pantalla-registro-cuenta-personal" element={ <PantallaRegistroCuentaPersonal /> } />
        <Route path="/sobre-nosotros" element={ <Pentatech /> } />
        <Route path="/preguntas-frecuentes" element={ <PreguntasFrecuentes /> } />
        <Route path="/recuperar-contraseña" element={ <RecuperarContra /> } />
        <Route path="/recursos-educativos" element={ <RecursosEducativos /> } />
        <Route path="/registrar" element={ <Registrar /> } />
        <Route path="/registrarme-como-fundacion" element={ <RegistrarmeComoFundacion /> } />
        <Route path="/seguimiento" element={ <Seguimiento /> } />
        <Route path="/servicios" element={ <Servicios /> } />
        <Route path="vincular-cuenta" element={ < VincularCuenta />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;