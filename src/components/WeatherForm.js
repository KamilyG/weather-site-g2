import React, { useState } from "react";

export default function WeatherForm({ onSearch }) {
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row mb-4">
        <div className="col-md-6">
          <input
            onChange={handleChange}
            className="form-control"
            value={city}
            placeholder="Digite o nome da cidade..."
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-lg">
        Pesquisar
      </button>
    </form>
  );
}
