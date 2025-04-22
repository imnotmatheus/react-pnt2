// Cabecera.jsx
import React from "react";
import "./cabecera.css";
import { useState } from "react";

function Cabecera({ carrito }) {

  // TODO: Agregar carrito con contador. Contador se incrementa siempre
  // que se clique el boton comprar
  // (estilo para el contador ya está en elCSS de cabecera .carrito__contador)
  

  return (
    <header className="cabecera">
      <div className="cabecera__logo">
        <img src="img/ortLogo.png" alt="Logo de la empresa" />
      </div>
      <nav className="cabecera__nav">
        <a href="/home">Inicio</a>
        <a href="/servicios">Servicios</a>
        <a href="/nosotros">Nosotros</a>
        <a href="/contacto">Contacto</a>
      </nav>
      <div className="cabecera__carrito">
        <p className="carrito__contador">{ carrito }</p>
      </div>

      <div className="cabecera__usuario">
        <img src="img/Adele Vance.jpg" alt="Usuario logueado" />
      </div>
    </header>
  );
}

export default Cabecera;
