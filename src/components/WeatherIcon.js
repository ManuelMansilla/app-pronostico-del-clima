import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiStrongWind } from 'react-icons/wi';

export default function WeatherIcon({ code }) {
  if (code === 0) return <WiDaySunny size={24} />;
  if ([1,2,3].includes(code)) return <WiCloudy size={24} />;
  if (code >= 61 && code <= 82) return <WiRain size={24} />;
  return <WiStrongWind size={24} />;
}