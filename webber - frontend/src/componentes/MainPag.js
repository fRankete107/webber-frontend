import React from "react";
import imagen from "../imagenes/napaurbanpage-reduced.png"
import "../estiloMainPag.css";
import Formulario from "./Formulario";

function MainPag () {
    

    

    return(
        <><div className="img"></div><main className="mainpag">
            <img src={imagen} className="imgfondopag" />
            <div className="content">
                <p className="titulo">Somos <b>Webber</b>. Somos <b>Web</b>.</p>
                <p className="cuerpo">
                    Los sitios web son escenciales para lograr una óptima presencia en web. Existen variados
                    tipos: Tiendas webs, blogs, landing page, noticieros web y otros. Todos ellos, manejados
                    de la mejor manera, pueden generar miles y miles. En Webber te creamos tu propio sitio web
                    a uno de los mejores precios del mercado.
                </p>
                <div className="precios">
                    <div className="dolar"><b>$50 USD (pago unico)</b><br /> + $15 USD/mes (mantenimiento)</div>
                    <div className="pesos"><b>$18.150 ARS (pago unico)</b><br />  + $5445 ARS/mes (mantenimiento)</div>
                </div>
                {/*<a href="contacto">Contactar para encargar</a>*/}
                <Formulario />
            </div>
        </main></>
    );
};

export default MainPag;