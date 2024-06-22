import React, { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import { fetchWeather } from "./utils/fetchWeather";

export default function App() {
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = (city) => {
    fetchWeather(city)
      .then((data) => {
        console.log(data);
        setWeatherForecast(data);
        setError(null);
      })
      .catch((error) => {
        setWeatherForecast(null);
        setError(error);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a className="navbar-brand text-white ps-3" href="#navbar">
          Kamily Previsão do tempo
        </a>
      </nav>

      <main className="container">
        <div className="mt-4 p-5 bg-light rounded">
          <h1>Verifique a previsão do tempo da sua cidade.</h1>
          <p className="lead">
            Digite o nome da sua cidade e clique em pesquisar.
          </p>

          <WeatherForm onSearch={handleSearch} />
          
          <WeatherDisplay weatherForecast={weatherForecast} error={error} />
        </div>
      </main>
    </div>
  );
}
