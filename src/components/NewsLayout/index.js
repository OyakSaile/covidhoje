import React, { useState, useEffect } from "react";
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
        </div>
        <h1 id="lastnews">Últimas notícias sobre o novo corona-virus.</h1>
      </div>
      <div className="main">
        <header>
          <div className="status-main">
            <h2>Veja o Status atual do novo corona-virus.</h2>
            <span id="virus">
              <img src={virusImg} alt="" srcset="" />
            </span>
          </div>
        </header>
        <main>
          <div className="status-info">
            <main>
              <ul>
                <li>
                  <strong>Casos</strong> {cases}
                </li>
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
            </main>
          </div>
        </main>
        <nav>
          <div className="nav">
            <a href="">Vacina</a>
            <a href="">Governo</a>
            <a href="">Covid</a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NewsPage;
