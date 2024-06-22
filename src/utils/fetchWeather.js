const API_KEY = "908c09f9c65546d38d2134121241606";

export const fetchWeather = (city) => {
  return fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&lang=pt`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Oops! Algo deu errado. Verifique o nome da cidade.');
      }
    })
    .catch((error) => {
      if (error.message === 'Failed to fetch') {
        throw new Error('Falha ao conectar à API. Verifique sua conexão de internet.');
      } else {
        throw error;
      }
    });
};
