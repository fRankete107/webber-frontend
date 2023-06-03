import React from "react";
import Home from "./paginas/Home";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Web from "./paginas/Web";
import Servicios from "./paginas/Servicios";
import Contacto from "./paginas/Contacto";


const RoutesLister = () => (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web" element={<Web />} />
        {/*<Route path="/contact" component={Contact} />*/}
        <Route path="/servicio" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </HashRouter>
  );

  export default RoutesLister;
  