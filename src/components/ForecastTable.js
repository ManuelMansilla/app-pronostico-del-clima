import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function ForecastTable({ weatherData }) {
  const d = weatherData.daily;
  return (
    <table>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Máx (°C)</th>
          <th>Mín (°C)</th>
          <th>Sensación (°C)</th>
          <th>Humedad (%)</th>
          <th>Icono</th>
        </tr>
      </thead>
      <tbody>
        {d.time.map((t, i) => (
          <tr key={t}>
            <td>{t}</td>
            <td>{d.temperature_2m_max[i]}</td>
            <td>{d.temperature_2m_min[i]}</td>
            <td>{d.apparent_temperature_max[i]}</td>
            <td>{d.relative_humidity_2m_max[i]}</td>
            <td><WeatherIcon code={d.weather_code[i]} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}