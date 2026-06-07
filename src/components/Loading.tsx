export function LoadingWeather() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-20 text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#F97316"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-spin"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
      </svg>

      <p className="text-white/60 text-sm tracking-widest uppercase animate-pulse">
        Obteniendo clima...
      </p>

      <div className="flex flex-col items-center gap-3 w-full max-w-sm">
        <div className="h-12 w-32 bg-white/10 rounded-xl animate-pulse" />
        <div className="h-4 w-48 bg-white/10 rounded-xl animate-pulse" />
        <div className="h-4 w-24 bg-white/10 rounded-xl animate-pulse" />
      </div>
    </div>
  );
}
