import React from "react";
import "../styles/navegation.css";
import { Link } from "react-scroll";



export default function Navegation({ layout }) {
  return (
    <nav className={`navegation_${layout} navegation` }>
      <Link
        to="inicio"
        smooth={true}
        duration={500}
        className="menu"
      >
        Inicio
      </Link>

      <Link
        to="projetos"
        smooth={true}
        duration={500}
        className="menu"
      >
        Projetos
      </Link>

      <Link
        to="sobre"
        smooth={true}
        duration={500}
        className="menu"
      >
        Sobre
      </Link>

      <Link
        to="contato"
        smooth={true}
        duration={500}
        className="menu"
      >
        Contato
      </Link>
      
    </nav>
  );
}
