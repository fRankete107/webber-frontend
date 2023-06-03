import React from "react";
import { useState } from "react";
import "../nav.css";
import "../modal.css";
import "../MainContacto.css";



function Nav() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <nav className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
            <div className="menuicon--contenedor" onClick={()=>{
                setIsNavExpanded(!isNavExpanded);
            }}>
                <div className="menuicon"></div>
                <div className="menuicon"></div>
                <div className="menuicon"></div>
            </div>

            <a href="/#/"><p>Inicio</p></a>
            <a href="/#/web"><p>Páginas web</p></a>
            <a href="/#/servicio"><p>Sistema de gestión de datos</p></a>
            <a onClick={()=>setIsOpen(true)}><p>Contacto</p></a>
        </nav>
        <div id="myModal" className={
            isOpen ? "modal expanded" : "modal"
        } onClick={()=>setIsOpen(false)}>

        <div className="modal-content">
            <div className="imgfondocontacto"></div>
            <span className="close" onClick={()=>setIsOpen(false)}>&times;</span>
            <div className="maincontacto">
                <h1>Contacto</h1>
                <label>Ante cualquier pedido, reclamo o consulta:</label>
                <h2>francocabreradev@gmail.com</h2>
            </div>
        </div>

        </div>
        </>
    );
}

export default Nav;