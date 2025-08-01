import React, { useState, useEffect } from "react";
import "../styles/header.css";
import "../styles/dark.css";
import logo from "../assets/imagens/logos/simbolo.png";
import texto from "../assets/imagens/logos/texto.png";
import Navegation from "./Navegation";
import { Link } from "react-scroll";
import { FaTimes, FaBars } from "react-icons/fa";

// COMPONENTE ThemeToggle MODIFICADO PARA RECEBER PROPS
function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
    >
      <div className="toggle-container">
        <div className={`toggle-slider ${isDark ? "dark" : ""}`}>
          <div className="icon-container">
            <svg
              className={`sun-icon ${!isDark ? "active" : ""}`}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            <svg
              className={`moon-icon ${isDark ? "active" : ""}`}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
}

// COMPONENTE PRINCIPAL Header COM ESTADO COMPARTILHADO
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Quando o componente carregar, verifica se o tema está ativo
  useEffect(() => {
    const currentTheme = document.body.classList.contains("dark");
    setIsDark(currentTheme);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <header>
      <Link to="inicio" smooth={true} duration={500} className="logo">
        <img className="simbolo" src={logo} alt="logo" />
        <img className="texto_logo" src={texto} alt="logo texto" />
      </Link>
      <Navegation />
      <div>
        <div className="menu_celular" onClick={toggleMenu}>
          <h3>{isMenuOpen ? <FaTimes/> : <FaBars/>}</h3>
          <div
            className={`menu_celular_content ${isMenuOpen ? "open" : ""}`}
            onClick={closeMenu}
          >
            <Navegation layout={"column"} />
            <div className="tema_menu_celular">
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            </div>
          </div>
        </div>
      </div>
      <div className="tema_menu">
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
}
