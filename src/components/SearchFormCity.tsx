interface Props {
  onSearch: (city: string) => void;
}

export function SearchFormCity({ onSearch }: Props) {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const city = data.get('city') as string;

    if (!city.trim()) return;

    onSearch(city.trim());
  };

  return (
    <section className="flex justify-center w-full px-2 sm:px-0">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 sm:gap-3 w-full sm:w-110 rounded-sm bg-[#171f33]/40 shadow-2xl p-2 sm:p-2 hover:outline-2 focus-within:outline-2 outline-[#89CEFF]"
      >
        <span className="shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F97316"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-sun sm:w-6 sm:h-6"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
          </svg>
        </span>
        <input
          className="text-white text-sm sm:text-base w-full placeholder:text-white focus:outline-0 bg-transparent"
          type="text"
          name="city"
          placeholder="Search for a city..."
        />
        <button
          type="submit"
          className="text-white bg-[#0EA5E9] py-1 px-3 rounded-sm cursor-pointer transition hover:opacity-75"
        >
          Search
        </button>
      </form>
    </section>
  );
}
