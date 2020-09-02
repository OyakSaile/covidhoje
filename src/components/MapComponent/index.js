import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./styles.css";

const MapComponent = (props) => {
  return (
    <Map center={[-10, -55]} zoom={2}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {props.markers &&
        props.markers.map((marker) => {
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
            <Marker
              key={countryInfo._id}
              position={[countryInfo.lat, countryInfo.long]}
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
                      {new Intl.NumberFormat("br", {
                        useGrouping: true,
                      }).format(Number(cases))}
                    </p>
                    <p>
                      <strong>Casos Hoje:</strong>
                      {new Intl.NumberFormat("br", {
                        useGrouping: true,
                      }).format(Number(todayCases))}
                    </p>
                    <p>
                      <strong>Mortes:</strong>
                      {new Intl.NumberFormat("br", {
                        useGrouping: true,
                      }).format(Number(deaths))}
                    </p>
                    <p>
                      <strong>Mortes Hoje:</strong>
                      {new Intl.NumberFormat("br", {
                        useGrouping: true,
                      }).format(Number(todayDeaths))}
                    </p>
                    <p>
                      <strong>Recuperados:</strong>
                      {new Intl.NumberFormat("br", {
                        useGrouping: true,
                      }).format(Number(recovered))}
                    </p>
                    <p>
                      <strong>Recuperados Hoje:</strong>
                      {new Intl.NumberFormat("br", {
                        useGrouping: true,
                      }).format(Number(todayRecovered))}
                    </p>
                  </main>
                </div>
              </Popup>
            </Marker>
          );
        })}
    </Map>
  );
};

export default MapComponent;
