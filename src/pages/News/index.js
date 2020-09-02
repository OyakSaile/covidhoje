<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React from "react";
>>>>>>> 1c11cc597fd9ac2171b77fcbd2cfaa46caafedcc
import logoImg from "../../assets/icons/covidhoje.svg";
import leftArrowRed from "../../assets/icons/left-arrow-red.svg";
import { Link } from "react-router-dom";
import virusImg from "../../assets/icons/virussplash.svg";
import axios from "axios";
import "./index.css";

function NewsPage() {
  const [casesList, setCases] = useState([]);
  const { active, cases, recovered, deaths, affectedCountries } = casesList;
  useEffect(() => {
    //EVITA A API SER CHAMADA DIVERSAS VEZES
    getData();
  }, []);

  async function getData(response) {
    response = await axios.get("https://disease.sh/v3/covid-19/all");
    const dados = response.data;
    setCases(dados);
    console.log(dados);
  }

  return (
    <div id="newspage">
      <div className="header">
        <div className="menu">
          <Link to="/statistics">
            <img src={leftArrowRed} alt="voltar" />
          </Link>
          <Link to="/">
            <img src={logoImg} alt="voltar" />
          </Link>
<<<<<<< HEAD
        </div>
        <h1 id="lastnews">Últimas notícias sobre o novo corona-virus.</h1>
      </div>
      <div className="main">
        <div className="status-main">
          <h2>Veja o Status atual do novo corona-virus.</h2>
          <span id="virus">
            <img src={virusImg} alt="" srcset="" />
          </span>
        </div>

        <div className="status-info">
          <ul>
            <li>
              <strong>Casos ativos: </strong> {active}
            </li>
            <li>
              <strong>Casos Recuperados: </strong>
              {recovered}
            </li>
            <li>
              <strong>Mortes pelo novo corona-virus: </strong>
              {deaths}
            </li>
            <li>
              <strong>Países afetados: </strong>
              {affectedCountries}
            </li>
          </ul>
        </div>
        <div className="nav">
          <a href="">Vacina</a>
          <a href="">Governo</a>
          <a href="">Covid</a>
        </div>
      </div>
=======
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
>>>>>>> 1c11cc597fd9ac2171b77fcbd2cfaa46caafedcc
    </div>
  );
}

export default NewsPage;
