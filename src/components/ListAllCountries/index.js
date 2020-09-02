import React, { useState, useEffect } from "react";
import "./styles.css";

function ListAllCountries({ countries }) {
  const [text, setText] = useState("Carregando países.");

  useEffect(() => {
    setText("Nenhum país encontrado.");
  }, []);
  return (
    <ul className="countries">
      {countries.length > 0 ? (
        countries.map((country) => (
          <li key={country.countryInfo._id}>
            <h3 className="title">
              <img src={country.countryInfo.flag} alt="bandeira do pais" />
              {country.country}
            </h3>
            <div className="country-info">
              <div className="info">
                <p>Infectados</p> <strong>{country.cases}</strong>
              </div>
              <div className="info">
                <p>Infectados Hoje</p> <strong>{country.todayCases}</strong>
              </div>
              <div className="info">
                <p>Mortos</p> <strong>{country.deaths}</strong>
              </div>
              <div className="info">
                <p>Mortes Hoje</p> <strong>{country.todayDeaths}</strong>
              </div>
              <div className="info">
                <p>Curados</p> <strong>{country.recovered}</strong>
              </div>
              <div className="info">
                <p>Curados Hoje</p> <strong>{country.todayRecovered}</strong>
              </div>
              <div className="info">
                <p>Ativos</p> <strong>{country.active}</strong>
              </div>
              <div className="info">
                <p>Estado Crítico</p> <strong>{country.critical}</strong>
              </div>
              <div className="info">
                <p>Casos/Milhão</p>{" "}
                <strong>{country.casesPerOneMillion}</strong>
              </div>
              <div className="info">
                <p>Mortes/Milhão</p>{" "}
                <strong>{country.deathsPerOneMillion}</strong>
              </div>
              <div className="info">
                <p>Testes</p> <strong>{country.tests}</strong>
              </div>
              <div className="info">
                <p>Testes/Milhão</p>{" "}
                <strong>{country.testsPerOneMillion}</strong>
              </div>
              <div className="info">
                <p>População</p> <strong>{country.population}</strong>
              </div>
              <div className="info">
                <p>Ativos/Milhão</p>{" "}
                <strong>{country.activePerOneMillion}</strong>
              </div>
              <div className="info">
                <p>Recuperados/Milhão</p>{" "}
                <strong>{country.recoveredPerOneMillion}</strong>
              </div>
              <div className="info">
                <p>Estado Crítico/Milhão</p>{" "}
                <strong>{country.criticalPerOneMillion}</strong>
              </div>
            </div>
          </li>
        ))
      ) : (
        <li>
          <h3 className="title">{text}</h3>
        </li>
      )}
    </ul>
  );
}

export default ListAllCountries;
