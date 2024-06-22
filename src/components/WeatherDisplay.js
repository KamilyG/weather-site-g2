import React from "react";

export default function WeatherDisplay({ weatherForecast, error }) {
  return (
    <div>
      {weatherForecast ? (
        <div className="mt-4 d-flex align-items-center">
          <div>
            <img src={weatherForecast.current.condition.icon} alt="Condição atual do tempo" />
          </div>

          <div>
            <h3>
              Hoje o dia está: {weatherForecast.current.condition.text}
            </h3>
            <p className="lead">
              Temperatura: {weatherForecast.current.temp_c} C°
            </p>
          </div>
        </div>
      ) : error ? (
        <div>
          <p className="alert alert-warning">{error.message}</p>
        </div>
      ) : null}
    </div>
  );
}
