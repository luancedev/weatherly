import type { WeatherState } from '../types/weather';
import { DaysCard } from './DaysCard';

interface Props {
  data: WeatherState;
}

export function PronosticsDays({ data }: Props) {
  const { weatherData } = data;
  const {
    time,
    temperature_2m_max,
    temperature_2m_min,
    precipitation_probability_max,
  } = weatherData.daily;
  return (
    <section className="flex flex-col gap-5 text-white w-full p-6 animate-fade-in-right bg-[#1c2c4d]/30 rounded-2xl delay-150">
      <header>
        <h2 className="text-blue-200 xl:text-3xl font-bold sm:text-2xl">
          7-Day Forecast
        </h2>
      </header>
      <ul className="flex w-full overflow-x-auto pb-2 scrollbar-track-transparent scrollbar-thumb-[#171f33]  timeline-view">
        {time.map((day, index) => (
          <DaysCard
            key={day}
            date={day}
            tempMax={temperature_2m_max[index]}
            tempMin={temperature_2m_min[index]}
            precipitationProb={precipitation_probability_max[index]}
          />
        ))}
      </ul>
    </section>
  );
}
