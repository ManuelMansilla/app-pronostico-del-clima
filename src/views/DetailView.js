import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getWeather } from '../services/api';
import ForecastTable from '../components/ForecastTable';
import LoadingSpinner from '../components/LoadingSpinner';

export default function DetailView() {
  const [params] = useSearchParams();
  const nav = useNavigate();
  const name = params.get('name');
  const lat = params.get('lat');
  const lon = params.get('lon');

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      setLoading(true); setError('');
      try {
        const data = await getWeather(lat, lon);
        setWeather(data);
      } catch {
        setError('No se pudo obtener pronóstico');
      } finally {
        setLoading(false);
      }
    })();
  }, [lat, lon]);

  return (
    <div className="container">
      <h1>Clima en {name}</h1>
      <button onClick={() => nav('/')}>← Volver</button>
      {loading && <LoadingSpinner />}
      {error && <p>{error}</p>}
      {weather && <ForecastTable weatherData={weather} />}
    </div>
  );
}