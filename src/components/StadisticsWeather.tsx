import type { WeatherState } from '../types/weather';
import { WeatherCard } from './WeatherCard';

interface Props {
  data: WeatherState;
}

export function StadisticsWeather({ data }: Props) {
  const { weatherData } = data;
  const { windspeed_10m, relative_humidity_2m, uv_index } = weatherData.current;
  const { windspeed_10m: speedWind, relative_humidity_2m: humidity_unit } =
    weatherData.current_units;
  return (
    <ul className="flex flex-col list-none gap-2 sm:gap-3 w-full px-2 sm:px-4 md:px-0">
      <WeatherCard
        label="HUMIDITY"
        value={relative_humidity_2m + humidity_unit}
        description="The dawn point is "
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
        label="WIND"
        value={windspeed_10m}
        unit={speedWind}
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-wind"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
            <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
            <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-navigation"
            viewBox="0 0 24 24"
          >
            <path fill="none" stroke="none" d="M0 0h24v24H0z" />
            <path d="m12 18.5 7.265 2.463c.196.077.42.032.57-.116a.55.55 0 0 0 .134-.572L12 3 4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116z" />
          </svg>
        }
      />

      <WeatherCard
        label="UV INDEX"
        uv_index={uv_index}
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
