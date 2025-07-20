import React from "react";
import "../styles/home.css";
import "../styles/projetos.css";
import banner from "../assets/imagens/logos/banner.png";
import logo_lampada from "../assets/imagens/logos/logo_lampada_sem_fundo.png";
import sol from "../assets/imagens/logos/sol_sem_fundo.png";
import engrenagem from "../assets/imagens/logos/engrenagem_sem_fundo.png";
import ProjetoCard from "../components/ProjetoCard";
import { projetos } from "../data/projetos";

export default function Home() {
  return (
    <main>
      <section id="inicio" class="banner">
        <img src={banner} alt="banner" />
      </section>

      <section id="projetos" className="projetos">
        <div className="projetos-container">
          <h1>Projetos</h1>
          <div className="projetos-grid">
            {projetos.map(projeto => (
              <ProjetoCard key={projeto.id} projeto={projeto} />
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" class="sobre">
        <div class="sobre_intro">
          <div class="sobre_intro_imagem">
            <img src={logo_lampada} alt="logo" />
          </div>
          <div class="sobre_intro_conteudo">
            <h1>Sobre Mim</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate, odit beatae laborum esse rem aliquid voluptas ratione
              soluta accusantium explicabo sed enim iste numquam repellendus
              alias, quo, nesciunt ipsam fugiat.
            </p>
          </div>
        </div>

        <div class="sobre_softskills">
          <div class="sobre_imagem_sol">
            <img src={sol} alt="sol"/>
          </div>
          <div class="sobre_conteudo">
            <h1>Soft skills</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus alias doloribus voluptate officia repudiandae nisi unde ullam vero nostrum cupiditate inventore soluta.
            </p>
          </div>
        </div>

        <div class="sobre_hardskills">
          <div class="sobre_conteudo">
            <h1>Hard skills</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis adipisci quis repudiandae ad perspiciatis ipsa error omnis impedit illo voluptas? Mollitia deserunt voluptatum adipisci.
            </p>
          </div>
          <div class="sobre_imagem_engrenagem">
            <img src={engrenagem} alt="engrenagem"/>
          </div>
        </div>

      </section>
    </main>
  );
}
