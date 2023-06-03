import React from "react";
import stocknapaurban from "../imagenes/stocknapaurban.png";
import napaurbanpage from "../imagenes/napaurbanpage.png";

function Main() {


    return (
        <main>
            <div className="quienessomos">
                <div className="texto flex-item">
                    <p className="quienessomos--titulo">¿Quiénes somos?</p>
                    <p className="quienessomos--main">
                        Somos una empresa que busca satisfacer las necesidades tecnológicas de los clientes
                        relacionada con los sistemas de información (clientes, stock, etc), páginas web para
                        complementar a su negocio y aplicaciones web para desarrollarse tecnológicamente.
                    </p>
                </div>
                <div className="imagenes flex-item">
                    <img src={stocknapaurban} className="stocknapaurban" alt="Napa Urban stock"/>
                    <img src={napaurbanpage} className="napaurbanpage" alt="Napa Urban page" />
                </div>
            </div>
        </main>
    );
}

export default Main;