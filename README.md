# App de Pronóstico del Clima

Aplicación web SPA para consultar el pronóstico del clima de los próximos 7 días en cualquier ciudad, desarrollada con Create React App, React Router y React Icons.

## Características

- **Búsqueda de ciudades**  
  Vista principal con un formulario que permite buscar ciudades por nombre (usa la API de Nominatim / OpenStreetMap).
- **Selección de ciudad**  
  Listado de resultados con nombre completo de la ciudad; al hacer clic se navega a la vista de detalle.
- **Detalle del clima**  
  Vista que muestra:
  - Nombre de la ciudad y fecha actual.
  - Tabla con los próximos 7 días:
    - Temperatura máxima y mínima.
    - Sensación térmica máxima.
    - Humedad máxima.
    - Ícono de clima (soleado, nublado, lluvia o viento).
- **Navegación**  
  React Router v6 gestiona dos rutas (`/` y `/detail`), con navegación programática y query-strings.
- **Carga y manejo de errores**  
  Spinner durante las peticiones y muestra mensajes de error.
- **Variables de entorno**  
  URLs de las APIs configurables en un archivo `.env`.

## Estructura del proyecto

app-pronostico-del-clima/ 
│ 
├── public/ 
│ └── index.html 
│ 
├── src/ 
│ ├── assets/ 
│ ├── components/ 
│ │ ├── CityList.js 
│ │ ├── ForecastTable.js 
│ │ ├── Header.css 
│ │ ├── Header.js 
│ │ ├── LoadingSpinner.css 
│ │ ├── LoadingSpinner.js 
│ │ ├── SearchForm.js 
│ │ └── WeatherIcon.js 
│ ├── services/ 
│ │ └── api.js 
│ ├── styles/ 
│ ├── views/ 
│ │ ├── SearchView.js 
│ │ └── DetailView.js 
│ ├── App.css 
│ ├── App.js 
│ ├── index.css 
│ ├── index.js 
│ └── reportWebVitals.js 
│ 
├── .env 
├── .gitignore 
├── package-lock.json 
├── package.json 
└── README.md 

## Cómo ejecutar en local

1. **Clona o descarga el repositorio**  
   ```bash
   git clone https://github.com/ManuelMansilla/app-pronostico-del-clima
   cd app-pronostico-del-clima

2. **Configura tus variables de entorno**
   Crea o edita el archivo .env en la raíz con: 
   ```env
   REACT_APP_GEOCODE_URL=https://nominatim.openstreetmap.org 
   REACT_APP_WEATHER_URL=https://api.open-meteo.com/v1/forecast

3. **Instala dependencias y arranca el servidor de desarrollo**  
   ```bash
   npm install 
   npm start 
   Abre http://localhost:3000 en tu navegador.

## Repositorio

[Enlace al repositorio en GitHub](https://github.com/ManuelMansilla/app-pronostico-del-clima)

## Página

[Enlace a la página en Netlify](https://pronostico-delclima.netlify.app/)
