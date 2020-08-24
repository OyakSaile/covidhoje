import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./styles.css";

import ArrowLeftIcon from "../../assets/icons/left-arrow.svg";
import MapIcon from "../../assets/icons/map.svg";
import WorldMapIcon from "../../assets/icons/worldmap.svg";
import NewsIcon from "../../assets/icons/news.svg";
import GovIcon from "../../assets/icons/government.svg";
import VirusIcon from "../../assets/icons/virus.svg";
import VaccineIcon from "../../assets/icons/vaccine.svg";

function Statistics() {
  const history = useHistory();

  function voltarInicio() {
    history.push("/");
  }

  return (
    <main id="statistics-page" className="wrapper">
      <header>
        <button type="button" title="Voltar ao inicio" onClick={voltarInicio}>
          <img src={ArrowLeftIcon} alt="Flecha para voltar" />
        </button>
        <h2>Covid Hoje</h2>
      </header>

      <section className="map">
        <header className="title">
          <h3>Veja os principais países com casos do novo covid-19.</h3>
          <img src={MapIcon} alt="Icone de mapa" />
        </header>
        <main>
          {/* aqui vai o mapa */}
          <div className="world-map">
            <span>World Map</span>
            <img src={WorldMapIcon} alt="Mapa mundo" />
          </div>
        </main>
      </section>
      <section className="news">
        <header className="title">
          <h3>Confira as notícias sobre o novo Covid-19.</h3>
        </header>
        <main>
          <ul className="news-container">
            <li>
              <Link href="/" target="_blank">
                <img src={NewsIcon} alt="noticias" />
                <div>
                  <span>Last News</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/" target="_blank">
                <img src={GovIcon} alt="noticias" />
                <div>
                  <span>Last News</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/" target="_blank">
                <img src={VirusIcon} alt="noticias" />
                <div>
                  <span>Last News</span>
                </div>
              </Link>
            </li>
            <li>
              <a href="#" target="_blank">
                <img src={VaccineIcon} alt="noticias" />
                <div>
                  <span>Last News</span>
                </div>
              </a>
            </li>
          </ul>
        </main>
      </section>
    </main>
  );
}

export default Statistics;
