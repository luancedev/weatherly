import { useEffect, useMemo, useState } from 'react';

interface Props {
  city?: string;
  country?: string;
  state?: string;
}

export function BarLocation({ city, country, state }: Props) {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  const stateName = useMemo(() => {
    return state?.replace('Estado de', '').trim();
  }, [state]);

  useEffect(() => {
    const timeData = setInterval(() => {
      setHora(
        new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      );
    }, 1000);

    return () => clearInterval(timeData);
  }, []);

  return (
    <div className="flex rounded-b-xl justify-between w-full px-2 sm:px-5 py-2 sm:py-3 bg-black/20 items-center flex-col sm:flex-row gap-2 sm:gap-0">
      <p className="flex w-full gap-1 sm:gap-1.5 text-white font-bold items-center text-xs sm:text-sm lg:text-2xl">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="#0EA5E9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
            viewBox="0 0 24 24"
          >
            <path fill="none" stroke="none" d="M0 0h24v24H0z" />
            <path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
            <path d="M17.657 16.657 13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0" />
          </svg>
        </span>
        {city && country
          ? `${city}${stateName ? `, ${stateName}` : ''}, ${country}`
          : 'Busca una ciudad'}
      </p>

      <span className="text-white text-xs sm:text-sm lg:text-xl flex whitespace-nowrap">
        {hora}
      </span>
    </div>
  );
}
