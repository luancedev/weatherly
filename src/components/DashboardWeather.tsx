import type { WeatherState } from '../types/weather';

interface Props {
  data: WeatherState;
}

export function DashBoardWeather({ data }: Props) {
  const { weatherData, name, country, admin1 } = data;
  const { temperature_2m, apparent_temperature } = weatherData.current;
  const { temperature_2m: tempUnit } = weatherData.current_units;
  const { temperature_2m_max, temperature_2m_min } = weatherData.daily;
  return (
    <section className="flex flex-col items-center p-4 sm:p-6 lg:p-10 text-white rounded-sm animate-slide-up-fade animate-delay-0 w-full px-2">
      <header>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold ">
          {temperature_2m} {tempUnit}
        </h1>
      </header>
      <p className="text-base sm:text-lg lg:text-xl mt-2 text-center">
        {name}, {admin1}, {country}
      </p>
      <p className="text-sm sm:text-base">
        Sensación de{' '}
        <span className="font-semibold">
          {apparent_temperature}
          {tempUnit}
        </span>
      </p>
      <span className="text-base sm:text-lg">
        {temperature_2m_max[0]}
        {tempUnit}/ {temperature_2m_min[0]}
        {tempUnit}
      </span>
    </section>
  );
}
