import React, { useState, useEffect, Suspense } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

import "./styles.css";

import ArrowLeftIcon from "../../assets/icons/left-arrow.svg";
import MapIcon from "../../assets/icons/map.svg";
import WorldMapIcon from "../../assets/icons/worldmap.svg";
import NewsIcon from "../../assets/icons/news.svg";
import GovIcon from "../../assets/icons/government.svg";
import VirusIcon from "../../assets/icons/virus.svg";
import SeatchIcon from "../../assets/icons/searchIcon.svg";
import VaccineIcon from "../../assets/icons/vaccine.svg";

const ListAllCountries = React.lazy(() =>
  import("../../components/ListAllCountries")
);

const MapComponent = React.lazy(() => import("../../components/MapComponent"));

function Statistics() {
  const history = useHistory();
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  function voltarInicio() {
    history.push("/");
  }

  useEffect(() => {
    async function loadCountries() {
      const response = await api.get("countries?sort=cases");

      setCountries(response.data);
      setFilteredCountries(response.data);
    }

    loadCountries();
  }, []);

  function filter(value) {
    setTimeout(() => {
      if (value.length > 0) {
        console.log(countries);
        return setFilteredCountries(
          countries.filter(
            (country) =>
              country.country.toLowerCase().includes(value.toLowerCase()) &&
              country.country !== "Diamond Princess"
          )
        );
      }

      return setFilteredCountries(countries);
    }, 500);
  }

  return (
    <main id="statistics-page" className="wrapper">
      <div className="statistics-container">
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
            <div className="world-map-container">
              <Suspense fallback={"<div>Carregando mapa...</div>"}>
                <MapComponent markers={countries} />
              </Suspense>
            </div>
            <div className="world-map-text">
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
                <Link to="/newspage">
                  <img src={NewsIcon} alt="noticias" />
                  <div>
                    <span>Last News</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/newspage" target="_blank">
                  <img src={GovIcon} alt="noticias" />
                  <div>
                    <span>Last News</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/newspage" target="_blank">
                  <img src={VirusIcon} alt="noticias" />
                  <div>
                    <span>Last News</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/newspage" target="_blank">
                  <img src={VaccineIcon} alt="noticias" />
                  <div>
                    <span>Last News</span>
                  </div>
                </Link>
              </li>
            </ul>
          </main>
        </section>
        <section className="list-all">
          <div className="search">
            <input
              type="text"
              placeholder="Buscar..."
              onChange={(e) => filter(e.target.value)}
            />
            <img src={SeatchIcon} className="icon" alt="lupa de busca" />
          </div>
          <Suspense fallback={"<div>Carregando países...</div>"}>
            <ListAllCountries countries={filteredCountries} />
          </Suspense>
        </section>
      </div>
    </main>
  );
}

export default Statistics;
