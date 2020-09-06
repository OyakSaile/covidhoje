import React from "react";
import { Map, Popup, TileLayer, Circle } from "react-leaflet";
import "./styles.css";
import accessCountriesMap from "../../utils/accessCountriesMap";

const MapComponent = (props) => {
  return (
    <Map
      className="mapHeight"
      center={[0, -30]}
      zoom={3}
      tap={true}
      animate={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {props.markers &&
        props.markers.map((marker, index) => {
          const {
            countryInfo,
            country,
            cases,
            todayCases,
            deaths,
            todayDeaths,
            recovered,
            todayRecovered,
          } = marker;
          return (
            <Circle
              key={index}
              center={[countryInfo.lat, countryInfo.long]}
              fillColor={"red"}
              radius={
                accessCountriesMap.includes(country)
                  ? Number(cases) * 0.3
                  : Number(cases)
              }
              color={"red"}
            >
              <Popup>
                <div className="marker-popup">
                  <header>
                    <img src={countryInfo.flag} alt="bandeira do pais" />
                    {country}
                  </header>
                  <main>
                    <p>
                      <strong>Casos:</strong>
                      {Intl.NumberFormat("br", {
                        useGrouping: true,
                      }).format(Number(cases))}
                    </p>
                    <p>
                      <strong>Casos Hoje:</strong>
                      {Intl.NumberFormat("br", {
                        useGrouping: true,
                      }).format(Number(todayCases))}
                    </p>
                    <p>
                      <strong>Mortes:</strong>
                      {Intl.NumberFormat("br", {
                        useGrouping: true,
                      }).format(Number(deaths))}
                    </p>
                    <p>
                      <strong>Mortes Hoje:</strong>
                      {Intl.NumberFormat("br", {
                        useGrouping: true,
                      }).format(Number(todayDeaths))}
                    </p>
                    <p>
                      <strong>Recuperados:</strong>
                      {Intl.NumberFormat("br", {
                        useGrouping: true,
                      }).format(Number(recovered))}
                    </p>
                    <p>
                      <strong>Recuperados Hoje:</strong>
                      {Intl.NumberFormat("br", {
                        useGrouping: true,
                      }).format(Number(todayRecovered))}
                    </p>
                  </main>
                </div>
              </Popup>
            </Circle>
          );
        })}
    </Map>
  );
};

export default MapComponent;
