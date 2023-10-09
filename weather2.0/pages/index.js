import Head from 'next/head';
import axios from 'axios';
import { useState } from 'react';

export default function Home() {
  const [city, setCity] = useState('');
  const [wetter, setWetter] = useState({});
  const [loading, setLoading] = useState(false);

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  const fetchWetter = (e) => {
    e.preventDefault();
    setLoading(true);
    const apiKey = "3a621ee35fd8fd2a3e694094e66003a5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    axios.get(url)
      .then((response) => {
        setWetter(response.data);
        setCity('');
        setLoading(false);
        console.log(response.data);
      });
  };

  return (
    <div>
      <Head>
        {/* ... */}
      </Head>
      <h1>weather</h1>
      <br></br>
      <br></br>
      <form onSubmit={fetchWetter}>
        <input
          type="text"
          placeholder="Ort eingeben"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Wetterdaten abrufen</button>
      </form>

      {loading ? (
        <p>Laden...</p>
      ) : (
        <div>
          {wetter.main && (
            <div>
              <h2>Wetter in {wetter.name}, {wetter.sys.country}</h2>
              <p>Temperatur: {kelvinToCelsius(wetter.main.temp).toFixed(2)} °C</p>
              <p>Luftfeuchtigkeit: {wetter.main.humidity}%</p>
              {/* Weitere Wetterdaten hier anzeigen */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}