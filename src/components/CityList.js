import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CityList({ cities }) {
  const navigate = useNavigate();
  if (!cities.length) return <p>No se encontraron ciudades.</p>;

  return (
    <ul>
      {cities.map((c) => (
        <li key={c.place_id}>
          <button
            onClick={() =>
              navigate(`/detail?name=${encodeURIComponent(c.display_name)}` +
                       `&lat=${c.lat}&lon=${c.lon}`)
            }
          >
            {c.display_name}
          </button>
        </li>
      ))}
    </ul>
  );
}