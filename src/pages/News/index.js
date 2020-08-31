import React, { Component } from "react";
import logoImg from "../../assets/icons/covidhoje.svg";
import leftArrowRed from "../../assets/icons/left-arrow-red.svg";
import { Link } from "react-router-dom";
import "./index.css";

function NewsPage() {
  return (
    <div id="newspage">
        <div className="header">
            <div className="menu">
                <Link to="/statistics"><img src={leftArrowRed} alt="voltar"/></Link>
                <Link to="/"><img src={logoImg} alt="voltar"/></Link>
            </div>
            <h1 id="lastnews">Últimas notícias sobre o novo corona-virus.</h1>
        <div className="nav">
            <a href="/">Vacina</a>
            <a href="/">Covid</a>
            <a href="/">Governo</a>
        </div>
        </div>
        <div className="main">
            {/* AQUI VIRÁ O CONTEÚDO DA API */}
            <ul>
                <li>Casos VALOR X</li>
                <li>Total de casos VALOR X</li>
                <li>Total de casos VALOR X</li>
                <li>Mortes VALOR X</li>
                <li>Testes Valor X</li>
            </ul>
            {/* AQUI VIRA O CONTEÚDO DA API */}
        </div>
    </div>
  );
}

export default NewsPage;
