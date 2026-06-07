import rainIcon1 from '../assets/iconsweathers/rainy-1.svg';
import rainIcon2 from '../assets/iconsweathers/rainy-5.svg';
import rainIcon3 from '../assets/iconsweathers/rainy-6.svg';
import dayIcon from '../assets/iconsweathers/day.svg';

interface Props {
  date: string;
  tempMax: number;
  tempMin: number;
  windspeed_max?: number;
  precipitationProb: number;
}

const getRainIcon = (prob: number) => {
  if (prob === 0) return dayIcon;
  if (prob <= 30) return rainIcon1;
  if (prob <= 60) return rainIcon2;
  return rainIcon3;
};

const getRainColor = (prob: number) => {
  if (prob <= 30) return 'text-blue-300';
  if (prob <= 60) return 'text-blue-400';
  return 'text-blue-600';
};

export function DaysCard({ date, tempMax, tempMin, precipitationProb }: Props) {
  const dayName = new Date(`${date}T00:00:00`).toLocaleDateString('es-MX', {
    weekday: 'long',
  });
  const isToday =
    new Date(`${date}T00:00:00`).toDateString() === new Date().toDateString();

  const rainIcon = getRainIcon(precipitationProb);

  return (
    <article className="flex gap-2 flex-col min-w-30 p-5 justify-between items-center rounded-sm bg-[#171f33]/40 backdrop-blur-3xl transition ease-in-out duration-150 hover:scale-105 animate-range-brisk ">
      <h3
        className={`capitalize font-semibold ${isToday ? 'text-sky-400' : 'text-white'}`}
      >
        {isToday ? 'Hoy' : dayName}
      </h3>
      <div
        className={`flex items-center gap-1 ${getRainColor(precipitationProb)}`}
      >
        {rainIcon &&
          ((typeof rainIcon === 'string' && rainIcon.startsWith('data:')) ||
          rainIcon.endsWith('.svg') ? (
            <img src={rainIcon} alt="rain" width={30} height={30} />
          ) : (
            <span>{rainIcon}</span>
          ))}
        <span className="text-sm">{precipitationProb}%</span>
      </div>

      <div className="flex w-full items-center">
        <p className="flex gap-2 items-center justify-center">
          <span className="font-bold text-xl text-white">{tempMax}°</span>
          <span className="text-[12px] text-neutral-400"> {tempMin}°</span>
        </p>
      </div>
    </article>
  );
}
