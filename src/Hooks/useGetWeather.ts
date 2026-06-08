import { useState } from 'react';
import type { WeatherState } from '../types/weather';

export function useGetWeather() {
  const [weatherData, setWeatherData] = useState<WeatherState | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (latitude: number, longitude: number) => {
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,weathercode,windspeed_10m,winddirection_10m,relative_humidity_2m,precipitation,is_day,pressure_msl,uv_index,cloudcover&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_sum,sunrise,sunset,uv_index_max,wind_speed_10m_max,wind_gusts_10m_max,precipitation_probability_max&timezone=auto&forecast_days=7&models=gfs_seamless`,
    );
    const weatherData = await weatherRes.json();
    return { weatherData };
  };

  const searchByCity = async (city: string) => {
    try {
      setLoading(true);
      const coords = await geoCoords(city);
      const { weatherData } = await fetchWeather(
        coords.latitude,
        coords.longitude,
      );
      setWeatherData({
        weatherData,
        name: coords.name,
        country: coords.country,
        admin1: coords.admin1,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const geoCoords = async (
    city: string,
  ): Promise<{
    latitude: number;
    longitude: number;
    name: string;
    country: string;
    admin1: string;
  }> => {
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=es`,
    );
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error(`Ciudad "${city}" no encontrada`);
    }

    const { latitude, longitude, name, country, admin1 } = geoData.results[0];

    return { latitude, longitude, name, country, admin1 };
  };

  const searchByCoords = async (latitude: number, longitude: number) => {
    try {
      setLoading(true);
      const geoRes = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=es`,
      );
      const geoData = await geoRes.json();

      const { weatherData } = await fetchWeather(latitude, longitude);
      setWeatherData({
        weatherData,
        name: geoData.city || geoData.locality || 'Mi Ubicación',
        country: geoData.country || '',
        admin1: geoData.admin1 || '',
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return { weatherData, loading, searchByCity, searchByCoords };
}
