import React from "react";
import imagen from "../imagenes/stocknapaurban.png"
import "../estiloMainPag.css";
import Formulario from "./Formulario";

function MainService () {
    return(
        <><div className="img"></div><main className="mainpag">
            <img src={imagen} className="img--servicio" />
            <div className="content">
                <p className="titulo">Somos <b>Webber</b>. Somos <b>Web</b>.</p>
                <p className="cuerpo">
                    La información es la variable en torno a la cual se toman decisiones. Para saber cuál es 
                    la mejor ruta a seguir para tu empresa, ¿cómo podrías hacerlo sin tener organizados los datos 
                    de valor? ¡Por eso son importantes los sistemas de gestión de la información!
                </p>
                <div className="precios">
                    <div className="dolar">$90 USD + $20 USD/mes (mantenimiento)</div>
                    <div className="pesos">$32.670 ARS + $7260 ARS/mes (mantenimiento)</div>
                </div>
                <Formulario />
            </div>
        </main></>
    );
};

export default MainService;