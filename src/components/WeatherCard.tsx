interface Props {
  label: string;
  value?: string | number;
  unit?: string;
  description?: string;
  iconSvg: React.JSX.Element;
  iconSvg2?: React.JSX.Element;
  uv_index?: number;
}

const getUVInfo = (uv: number) => {
  if (uv <= 2) return { label: 'LOW', color: 'bg-green-400' };
  if (uv <= 5) return { label: 'MODERATE', color: 'bg-yellow-400' };
  if (uv <= 7) return { label: 'HIGH', color: 'bg-orange-400' };
  if (uv <= 10) return { label: 'VERY HIGH', color: 'bg-red-400' };
  return { label: 'EXTREME', color: 'bg-purple-400' };
};

export function WeatherCard({
  label,
  value,
  description,
  unit,
  iconSvg,
  iconSvg2,
  uv_index,
}: Props) {
  const uvInfo = uv_index !== undefined ? getUVInfo(uv_index) : null;

  return (
    <article className="flex flex-col w-full sm:min-w-xs md:min-w-xl text-white border border-neutral-600/50 bg-[#0F172A]/80 backdrop-blur-3xl p-3 sm:p-4 rounded-xl transition duration-250 hover:scale-101 animate-slide-up-fade animate-delay-150">
      <h2 className="flex gap-2 mb-6 sm:mb-10 text-sm sm:text-base">
        <span className="shrink-0 w-5 h-5 sm:w-6 sm:h-6">{iconSvg}</span>
        {label}
      </h2>
      <section className="flex justify-between gap-1 sm:gap-2 text-sm sm:text-base flex-wrap">
        <p className="text-2xl">
          {value} {unit}
        </p>
        {description ? `${description} ` : ''}
        {iconSvg2 && (
          <span className="border border-neutral-600/50 p-1 sm:p-1.5 rounded-2xl bg-[#0F172A]/80 shrink-0">
            <span className="w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center">
              {iconSvg2}
            </span>
          </span>
        )}
      </section>
      <div>
        {uv_index !== undefined && (
          <div>
            <p className="text-2xl">
              {uv_index}{' '}
              <span className="text-sm text-white/60"> {uvInfo?.label}</span>
            </p>
            <div className="mt-3 w-full bg-white/20 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${
                  uvInfo?.color
                }`}
                style={{ width: `${Math.min((uv_index / 11) * 100, 100)}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
