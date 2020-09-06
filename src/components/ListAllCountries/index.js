import React from "react";
import "./styles.css";

import Lazyload from "react-lazyload";

function ListAllCountries({ countries }) {
  const text = "Nenhum país encontrado.";

  return (
    <ul className="countries">
      {countries.length > 0 ? (
        countries.map((country) => (
          <Lazyload key={country.countryInfo._id}>
            <li>
              <h3 className="title">
                <img src={country.countryInfo.flag} alt="bandeira do pais" />
                {country.country}
              </h3>
              <div className="country-info">
                <div className="info">
                  <p>Infectados</p>{" "}
                  <strong>
                    {Intl.NumberFormat("br", {
                      useGrouping: true,
                    }).format(Number(country.cases))}
                  </strong>
                </div>
                <div className="info">
                  <p>Infectados Hoje</p>{" "}
                  <strong>
                    {Intl.NumberFormat("br", {
                      useGrouping: true,
                    }).format(Number(country.todayCases))}
                  </strong>
                </div>
                <div className="info">
                  <p>Mortos</p>{" "}
                  <strong>
                    {Intl.NumberFormat("br", {
                      useGrouping: true,
                    }).format(Number(country.deaths))}
                  </strong>
                </div>
                <div className="info">
                  <p>Mortes Hoje</p>{" "}
                  <strong>
                    {Intl.NumberFormat("br", {
                      useGrouping: true,
                    }).format(Number(country.todayDeaths))}
                  </strong>
                </div>
                <div className="info">
                  <p>Curados</p>{" "}
                  <strong>
                    {Intl.NumberFormat("br", {
                      useGrouping: true,
                    }).format(Number(country.recovered))}
                  </strong>
                </div>
                <div className="info">
                  <p>Curados Hoje</p>{" "}
                  <strong>
                    {Intl.NumberFormat("br", {
                      useGrouping: true,
                    }).format(Number(country.todayRecovered))}
                  </strong>
                </div>
                <div className="info">
                  <p>Ativos</p>{" "}
                  <strong>
                    {Intl.NumberFormat("br", {
                      useGrouping: true,
                    }).format(Number(country.active))}
                  </strong>
                </div>
                <div className="info">
                  <p>Estado Crítico</p>{" "}
                  <strong>
                    {Intl.NumberFormat("br", {
                      useGrouping: true,
                    }).format(Number(country.critical))}
                  </strong>
                </div>
                <div className="info">
                  <p>Casos/Milhão</p>{" "}
                  <strong>
                    {Intl.NumberFormat("br", {
                      useGrouping: true,
                    }).format(Number(country.casesPerOneMillion))}
                  </strong>
                </div>
                <div className="info">
                  <p>Mortes/Milhão</p>{" "}
                  <strong>
                    {Intl.NumberFormat("br", {
                      useGrouping: true,
                    }).format(Number(country.deathsPerOneMillion))}
                  </strong>
                </div>
                <div className="info">
                  <p>Testes</p>{" "}
                  <strong>
                    {Intl.NumberFormat("br", {
                      useGrouping: true,
                    }).format(Number(country.tests))}
                  </strong>
                </div>
                <div className="info">
                  <p>Testes/Milhão</p>{" "}
                  <strong>
                    {Intl.NumberFormat("br", {
                      useGrouping: true,
                    }).format(Number(country.testsPerOneMillion))}
                  </strong>
                </div>
                <div className="info">
                  <p>População</p>{" "}
                  <strong>
                    {Intl.NumberFormat("br", {
                      useGrouping: true,
                    }).format(Number(country.population))}
                  </strong>
                </div>
                <div className="info">
                  <p>Ativos/Milhão</p>{" "}
                  <strong>
                    {Intl.NumberFormat("br", {
                      useGrouping: true,
                    }).format(Number(country.activePerOneMillion))}
                  </strong>
                </div>
                <div className="info">
                  <p>Recuperados/Milhão</p>{" "}
                  <strong>
                    {Intl.NumberFormat("br", {
                      useGrouping: true,
                    }).format(Number(country.recoveredPerOneMillion))}
                  </strong>
                </div>
                <div className="info">
                  <p>Estado Crítico/Milhão</p>{" "}
                  <strong>
                    {Intl.NumberFormat("br", {
                      useGrouping: true,
                    }).format(Number(country.criticalPerOneMillion))}
                  </strong>
                </div>
              </div>
            </li>
          </Lazyload>
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
