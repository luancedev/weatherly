interface Props {
  label: string;
  value?: string | number;
  unit?: string;
  description?: string;
  iconSvg: React.JSX.Element;
  iconSvg2?: React.JSX.Element;
  uv_index?: number;
  humidity?: number;
  iconSvg2Rotation?: number;
}

const getUVInfo = (uv: number) => {
  if (uv <= 2) return { label: 'Low', color: 'bg-green-400' };
  if (uv <= 5) return { label: 'Moderate', color: 'bg-yellow-400' };
  if (uv <= 7) return { label: 'High', color: 'bg-orange-400' };
  if (uv <= 10) return { label: 'Very High', color: 'bg-red-400' };
  return { label: 'Extreme', color: 'bg-purple-400' };
};

export function WeatherCard({
  label,
  value,
  description,
  unit,
  iconSvg,
  iconSvg2,
  uv_index,
  humidity,
  iconSvg2Rotation,
}: Props) {
  const uvInfo = uv_index !== undefined ? getUVInfo(uv_index) : null;
  const isUV = uv_index !== undefined;
  const isHumidity = humidity !== undefined;

  return (
    <article className="flex flex-col sm:min-w-xs md:min-w-xl text-white border-b border-neutral-400/30 p-3 sm:p-4 w-full transition duration-250 hover:scale-101 animate-slide-up-fade animate-delay-150">
      <h2 className="flex gap-2 mb-6 sm:mb-10 text-sm sm:text-base">
        <span className="shrink-0 w-5 h-5 sm:w-6 sm:h-6">{iconSvg}</span>
        {label}
      </h2>

      <section className="flex justify-between gap-1 sm:gap-2 flex-wrap">
        <div className="flex items-baseline gap-2">
          {isUV ? (
            <>
              <p className="text-2xl">{uv_index}</p>
              <span className="text-sm text-white/60">{uvInfo?.label}</span>
            </>
          ) : isHumidity ? (
            <>
              <p className="text-2xl">{humidity}</p>
              <span className="text-sm text-white/60">%</span>
            </>
          ) : (
            <>
              <p className="text-2xl">{value}</p>
              {unit && <span className="text-sm text-white/60">{unit}</span>}
            </>
          )}
        </div>

        {description && (
          <span className="text-sm text-white/60 self-end">{description}</span>
        )}

        {iconSvg2 && (
          <span
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-500"
            style={{ transform: `rotate(${iconSvg2Rotation ?? 0}deg)` }}
          >
            {iconSvg2}
          </span>
        )}
      </section>
      {humidity !== undefined && (
        <div className="mt-3 w-full bg-white/20 rounded-full h-1.5">
          <div
            className="h-1.5 rounded-full bg-blue-400 transition-all duration-500"
            style={{ width: `${humidity}%` }}
          />
        </div>
      )}

      {isUV && (
        <div className="mt-3 flex gap-1">
          {Array.from({ length: 11 }, (_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                i < uv_index! ? uvInfo?.color : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      )}
    </article>
  );
}
