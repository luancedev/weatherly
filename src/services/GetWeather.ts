import type { WeatherState } from '../types/weather';

export const GetWeather = async (city: string): Promise<WeatherState> => {
  const geoRes = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=es`,
  );
  const geoData = await geoRes.json();

  if (!geoData.results || geoData.results.length === 0) {
    throw new Error(`Ciudad "${city}" no encontrada`);
  }

  const { latitude, longitude, name, country, admin1 } = geoData.results[0];

  const weatherRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,weathercode,windspeed_10m,winddirection_10m,relative_humidity_2m,precipitation,is_day,pressure_msl,uv_index,cloudcover&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_sum,sunrise,sunset,uv_index_max,wind_speed_10m_max,wind_gusts_10m_max,precipitation_probability_max&timezone=auto&forecast_days=7&models=gfs_seamless`,
  );

  const weatherData = await weatherRes.json();
  console.log(weatherData);

  return { weatherData, name, country, admin1 };
};
