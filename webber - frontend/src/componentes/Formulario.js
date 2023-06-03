import React from "react";
import { useState } from "react";
import { setMsj } from "../Api/Api";
import {v4 as uuidv4} from "uuid";

function Formulario() {

    const [mensaje, setMensaje] = useState({});

    const [contacto, setContacto] = useState("");
    const [cuerpo, setCuerpo] = useState("");

    const save = () => {
        mensaje.id = uuidv4();
        mensaje.contacto = contacto;
        mensaje. cuerpo = cuerpo;
        console.log(mensaje);
        setMensaje(mensaje);
        setMsj(mensaje);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Clickeaste submit!");
    }

    return(
        <form className="form" onSubmit={e=>handleSubmit(e)}>
            <label className="labelContacto form__child">Ingresa tu contacto:</label>
            <input className="inputContacto form__child" type="text" onChange={e=>setContacto(e.target.value)} value={mensaje.contacto} />
            <label className="labelPedido form__child">Ingrese su pedido:</label>
            <textarea className="textarea form__child" onChange={e=>setCuerpo(e.target.value)} value={mensaje.cuerpo} />
            <button className="enviar form__child" onClick={save}>Enviar</button>
        </form>
    );
}

export default Formulario;