import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import CityList from '../components/CityList';
import LoadingSpinner from '../components/LoadingSpinner';
import { searchCities } from '../services/api';

export default function SearchView() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (city) => {
    setLoading(true); setError('');
    try {
      const res = await searchCities(city);
      setCities(res);
    } catch {
      setError('No se pudo buscar ciudades');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Búsqueda de ciudad</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && <LoadingSpinner />}
      {error && <p>{error}</p>}
      {!loading && !error && <CityList cities={cities} />}
    </div>
  );
}