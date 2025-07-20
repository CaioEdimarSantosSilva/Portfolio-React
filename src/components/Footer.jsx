import React from "react";
import "../styles/footer.css";
import logo from "../assets/imagens/logos/simbolo.png";
import Navegation from "./Navegation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Ícones SVG simples para substituir lucide-react
  const IconMail = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );

  const IconGithub = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );

  const IconLinkedin = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );

  const IconWhatsapp = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  );

  const IconMapPin = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );

  const contactLinks = [
    {
      icon: <IconMail />,
      label: 'Email',
      href: 'mailto:caioformula1@hotmail.com',
      external: false
    },
    {
      icon: <IconGithub />,
      label: 'Github',
      href: 'https://github.com/CaioEdimarSantosSilva',
      external: true
    },
    {
      icon: <IconLinkedin />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/caio-edimar-santos-silva-93a27027a/',
      external: true
    },
    {
      icon: <IconWhatsapp />,
      label: 'WhatsApp',
      href: 'https://wa.me/5513982000527',
      external: true
    }
  ];

  return (
    <footer id="contato" className="footer">
      <section className="conteudo_footer">
        <div className="conteudo_logo_footer">
          <div className="logo_footer">
            <img src={logo} alt="Logo Caio Silva" />
          </div>
          <div className="info_desenvolvedor">
            <h4>Caio Silva</h4>
            <p>Desenvolvedor Full Stack</p>
            <div className="localizacao">
              <IconMapPin />
              <span>Peruibe/SP, Brasil</span>
            </div>
          </div>
        </div>

        <div className="conteudo_navegacao_footer">
          <h3>Navegação</h3>
          <Navegation layout={"column"} />
        </div>

        <div className="conteudo_contato_footer">
          <h3>Contatos</h3>
          <ul className="lista_contatos">
            {contactLinks.map((contact, index) => (
              <li key={index}>
                <a 
                  href={contact.href}
                  target={contact.external ? "_blank" : "_self"}
                  rel={contact.external ? "noopener noreferrer" : undefined}
                  className="link_contato"
                >
                  {contact.icon}
                  <span>{contact.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="conteudo_skills_footer">
          <h3>Tecnologias</h3>
          <div className="skills_grid">
            <span className="skill_tag">React</span>
            <span className="skill_tag">Node.js</span>
            <span className="skill_tag">JavaScript</span>
          </div>
        </div>
      </section>

      <section className="copyright">
        <div className="copyright_content">
          <p>
            {currentYear} Caio Silva - Desenvolvedor Full Stack &copy; Todos os direitos reservados.
          </p>
        </div>
      </section>
    </footer>
  );
}