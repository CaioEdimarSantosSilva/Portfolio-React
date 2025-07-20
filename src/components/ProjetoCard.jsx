import React from 'react';

const ProjetoCard = ({ projeto }) => {
  return (
    <div className="projeto-card">
      <div className="projeto-imagem">
        <img src={projeto.imagem} alt={projeto.titulo} />
        <div className="projeto-overlay">
          <div className="projeto-links">
            <a
              href={projeto.repositorio}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-repo"
            >
              <i className="fab fa-github"></i>
              Código
            </a>
            <a
              href={projeto.linkAo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-demo"
            >
              <i className="fas fa-external-link-alt"></i>
              Visualizar
            </a>
          </div>
        </div>
      </div>
      <div className="projeto-conteudo">
        <h3>{projeto.titulo}</h3>
        <p>{projeto.resumo}</p>
        <br />
        <div className="skills_grid">
          {projeto.tecnologias?.map((tech, index) => (
            <span className="skill_tag" key={index}>{tech}</span>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProjetoCard;
