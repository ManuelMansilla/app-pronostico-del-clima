const GEOCODE_URL = process.env.REACT_APP_GEOCODE_URL;
const WEATHER_URL = process.env.REACT_APP_WEATHER_URL;

export async function searchCities(city) {
  const res = await fetch(
    `${GEOCODE_URL}/search?city=${encodeURIComponent(city)}&format=json`
  );
  if (!res.ok) throw new Error('Error al buscar ciudades');
  return res.json();
}

export async function getWeather(lat, lon) {
  const url = `${WEATHER_URL}` +
    `?latitude=${lat}&longitude=${lon}` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min` +
    `,apparent_temperature_max,relative_humidity_2m_max` +
    `&current_weather=true&timezone=auto`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Error al obtener pronóstico');
  return res.json();
}