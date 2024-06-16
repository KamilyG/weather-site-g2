import { useState } from "react";

export default function App() {
  const [city, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(null);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=908c09f9c65546d38d2134121241606&q=${city}&lang=pt`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setWeatherForecast(data);
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

          <div className="row mb-4">
            <div className="col-md-6">
              <input
                onChange={handleChange}
                className="form-control"
                value={city}
              />
            </div>
          </div>

          <button onClick={handleSearch} className="btn btn-primary btn-lg">
            Pesquisar
          </button>

          {weatherForecast ? (
            <div>
              <div className="mt-4 d-flex align-items-center">
                <div>
                  <img src={weatherForecast.current.condition.icon} />
                </div>

                <div>
                  <h3>
                    Hoje o dia está: {weatherForecast.current.condition.text}
                  </h3>
                  <p className="lead">
                    Temperatura: {weatherForecast.current.temp_c}
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}
