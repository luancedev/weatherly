import type { WeatherState } from '../types/weather';

interface Props {
  data: WeatherState;
}

export function DashBoardWeather({ data }: Props) {
  const { weatherData, name, country, admin1 } = data;
  const { temperature_2m, apparent_temperature } = weatherData.current;
  const { temperature_2m: tempUnit } = weatherData.current_units;
  const { temperature_2m_max, temperature_2m_min } = weatherData.daily;

  const location = [name, admin1, country].filter(Boolean).join(', ');
  return (
    <section className="flex flex-col items-center p-4 sm:p-6 lg:p-10 text-white rounded-sm animate-slide-up-fade animate-delay-0 w-full px-2">
      <header className="flex flex-col items-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
          {temperature_2m}
          <span className="text-3xl sm:text-4xl font-normal text-white/70 ml-1 align-top">
            {tempUnit}
          </span>
        </h1>
        <p className="text-lg sm:text-xl mt-2 text-center font-medium">
          {location}
        </p>
      </header>

      <div className="flex flex-col items-center gap-1 mt-3 text-white/60 text-sm sm:text-base">
        <p>
          Feels like{' '}
          <span className="text-white font-medium">
            {apparent_temperature}
            {tempUnit}
          </span>
        </p>
        <p>
          H:{' '}
          <span className="text-white">
            {temperature_2m_max[0]}
            {tempUnit}
          </span>
          {' · '}
          L:{' '}
          <span className="text-white">
            {temperature_2m_min[0]}
            {tempUnit}
          </span>
        </p>
      </div>
    </section>
  );
}
