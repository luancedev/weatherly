import type { WeatherState } from '../types/weather';
import { WeatherCard } from './WeatherCard';

interface Props {
  data: WeatherState;
}

export function StadisticsWeather({ data }: Props) {
  const { weatherData } = data;
  const { windspeed_10m, relative_humidity_2m, uv_index, winddirection_10m } =
    weatherData.current;
  const { windspeed_10m: speedWind } = weatherData.current_units;
  return (
    <ul className="flex flex-col bg-[#1c2c4d]/30 p-2 rounded-2xl list-none gap-2 sm:gap-3 w-full px-2 sm:px-4 md:px-0">
      <WeatherCard
        label="Humidity"
        humidity={relative_humidity_2m}
        description=""
        iconSvg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0EA5E9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-droplet"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546" />
          </svg>
        }
      />

      <WeatherCard
        label="Wind"
        value={windspeed_10m}
        unit={speedWind}
        iconSvg2Rotation={winddirection_10m}
        iconSvg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="#0EA5E9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 8h8.5a2.5 2.5 0 1 0-2.34-3.24" />
            <path d="M5 12h11.5a2.5 2.5 0 1 1-2.34 3.24" />
            <path d="M5 16h5" />
          </svg>
        }
        iconSvg2={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="#0EA5E9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 19V5" />
            <path d="m5 12 7-7 7 7" />
          </svg>
        }
      />

      <WeatherCard
        label="UV Index"
        uv_index={Math.round(uv_index)}
        iconSvg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0EA5E9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-uv-index"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 1 1 8 0" />
            <path d="M12 4v-1" />
            <path d="M13 16l2 5h1l2 -5" />
            <path d="M6 16v3a2 2 0 1 0 4 0v-3" />
          </svg>
        }
      />
    </ul>
  );
}
