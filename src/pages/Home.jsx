import React from "react";
import "../styles/home.css";
import "../styles/projetos.css";
import banner from "../assets/imagens/logos/banner.png";
import simbolo from "../assets/imagens/logos/simbolo.png";
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
         
          <div class="sobre_intro_conteudo">
            <h1>Sobre Mim</h1>
            <p>
             Cursando Desenvolvimento de Software Multiplataforma na Fatec Praia Grande. Estudo programação há 2 anos com foco em desenvolvimento Full Stack. Atualmente trabalho com React no front-end, estudando Node.js no back-end e MongoDB/MySQL como banco de dados. Busco oportunidades para aplicar e expandir esse conhecimento em projetos reais.
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
              Tenho paciência em diversas situações desafiadoras. Além disso, sou criativo e proativo na criação de soluções, frequentemente contribuindo com ideias que ajudam a resolver problemas complexos, algo que colegas e parceiros reconhecem.
            </p>
          </div>
        </div>

        <div class="sobre_hardskills">
          <div class="sobre_conteudo">
            <h1>Hard skills</h1>
            <p>
              Utilizo React.js no desenvolvimento de interfaces dinâmicas e componentizadas. Além de usar Git e GitHub para versionamento e colaboração em equipe.
            </p>
          </div>
          <div class="sobre_imagem_engrenagem">
            <img src={engrenagem} alt="engrenagem"/>
          </div>
        </div>

        <div class="sobre_softskills">
          <div class="sobre_imagem_sol">
            <img src={sol} alt="sol"/>
          </div>
          <div class="sobre_conteudo">
            <h1>Estudando</h1>
            <p>
              Atualmente, estou me aprofundando em Node.js com Express para desenvolvimento back-end, além de aprender bancos de dados como MongoDB e MySQL para garantir a criação de aplicações completas e eficientes.
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}
