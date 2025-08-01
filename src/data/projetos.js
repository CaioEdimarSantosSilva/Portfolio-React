// src/data/projetos.js

// Importar as imagens
import peoes_pingado from '../assets/imagens/fotos/peos_pingado.png';
import re_assistencia from '../assets/imagens/fotos/RE_assistencia.png';



export const projetos = [
  {
    id: 1,
    titulo: "Peões e Pingado",
    resumo: "Landing page institucional desenvolvida para uma cafeteria temática com jogos de tabuleiro e cartas.",
    imagem: peoes_pingado,
    repositorio: "https://github.com/CaioEdimarSantosSilva/peoes_pingado",
    linkAo: "https://caioedimarsantossilva.github.io/peoes_pingado/",
    tecnologias: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 2,
    titulo: "R.E Assistencia Técnica",
    resumo: "Site institucional desenvolvido para a R.E Assistência Técnica, empresa especializada em manutenção de eletrônicos.",
    imagem: re_assistencia,
    repositorio: "https://github.com/CaioEdimarSantosSilva/R.E-Assistencia",
    linkAo: "https://caioedimarsantossilva.github.io/R.E-Assistencia/index.html",
    tecnologias: ["HTML", "CSS", "JavaScript"]
  }
];