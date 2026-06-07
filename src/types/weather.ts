// types/weather.ts

export interface Current {
  temperature_2m: number;
  apparent_temperature: number;
  weathercode: number;
  windspeed_10m: number;
  winddirection_10m: number;
  relative_humidity_2m: number;
  precipitation: number;
  is_day: number;
  pressure_msl: number;
  visibility: number;
  uv_index: number;
  cloudcover: number;
  dewpoint_2m: number;
}

export interface Daily {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weathercode: number[];
  precipitation_sum: number[];
  precipitation_probability_max: number[];
  sunrise: string[];
  sunset: string[];
  uv_index_max: number[];
  wind_speed_10m_max: number[];
  wind_gusts_10m_max: number[];
}

export interface WeatherData {
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current: Current;
  daily: Daily;
}

export interface WeatherState {
  weatherData: WeatherData;
  name: string;
  country: string;
  admin1: string;
}

export interface CurrentUnits {
  temperature_2m: string;
  apparent_temperature: string;
  weathercode: string;
  windspeed_10m: string;
  winddirection_10m: string;
  relative_humidity_2m: string;
  precipitation: string;
  is_day: string;
  pressure_msl: string;
  uv_index: string;
  cloudcover: string;
}

export interface WeatherData {
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: CurrentUnits; // ← agrega esto
  current: Current;
  daily: Daily;
}
