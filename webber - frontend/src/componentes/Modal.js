import { React, useState } from "react";
import "../modal.css";

function Modal() {
    return(
        <>
        <button id="myBtn" onClick={ ()=>{
            setIsOpen(true);
        }}>Open Modal</button>

        
        </>
        
    );
}

export default Modal;