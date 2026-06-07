import { useEffect, useState } from 'react';
import { DashBoardWeather } from './components/DashboardWeather';
import { SearchFormCity } from './components/SearchFormCity';
import { BarLocation } from './components/BarLocation';
import { StadisticsWeather } from './components/StadisticsWeather';
import { PronosticsDays } from './components/PronosticsDays';
import { useGetWeather } from './Hooks/useGetWeather';
import { LoadingWeather } from './components/Loading';

export function App() {
  const { weatherData, loading, searchByCity, searchByCoords } =
    useGetWeather();
  const [searchKey, setSearchKey] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        searchByCoords(position.coords.latitude, position.coords.longitude);
      },
      () => {
        console.log('Geolocalización denegada');
      },
    );
  }, []);

  const handleSubmit = async (city: string) => {
    try {
      await searchByCity(city);
      setSearchKey((prev) => prev + 1);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <BarLocation
        city={weatherData?.name}
        country={weatherData?.country}
        state={weatherData?.admin1}
      />
      <main className="flex flex-col w-full min-h-full items-center justify-center px-2 sm:px-4 pt-12">
        <header className="flex justify-center items-center py-4 sm:py-8 lg:py-10 w-full ">
          <SearchFormCity onSearch={handleSubmit} />
        </header>
        <section className="items-center justify-center flex flex-col w-full max-w-200 pb-4 sm:pb-6">
          {weatherData && (
            <div
              key={searchKey}
              className="flex flex-col items-center w-full gap-4"
            >
              <DashBoardWeather data={weatherData} />
              <PronosticsDays data={weatherData} />
              <StadisticsWeather data={weatherData} />
            </div>
          )}
        </section>
      </main>

      {loading && <LoadingWeather />}
    </>
  );
}
