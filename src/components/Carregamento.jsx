import React, { useEffect } from "react";
import "../styles/carregamento.css";
import loadingImage from "../assets/imagens/logos/simbolo.png";

export default function Carregamento() {
  useEffect(() => {
    const MIN_LOADING_TIME = 300;
    const startTime = performance.now();

    const onLoad = () => {
      const elapsed = performance.now() - startTime;
      const wait = Math.max(MIN_LOADING_TIME - elapsed, 0);

      setTimeout(() => {
        const overlay = document.getElementById("loadingOverlay");
        if (overlay) overlay.classList.add("hidden");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, wait);
    };

    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <div id="loadingOverlay" className="loading-overlay">
      <img src={loadingImage} alt="Carregando..." className="spinner-img" />
    </div>
  );
}
