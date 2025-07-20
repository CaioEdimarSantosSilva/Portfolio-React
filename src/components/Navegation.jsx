import React from "react";
import "../styles/navegation.css"


export default function Navegation( {layout} ) {
    return (
        <nav className={`navegation_${layout} navegation`}> 
        <a className="menu" href="/main">
          Inicio
        </a>
        <a className="menu" href="#sobre">
          Sobre
        </a>
        <a className="menu" href="/">
          Projetos
        </a>
        <a className="menu" href="#contato">
          Contato
        </a>
      </nav>
    )

}