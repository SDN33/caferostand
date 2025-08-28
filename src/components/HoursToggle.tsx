
import React from 'react';

type Hours = {
  [day: string]: string;
};

type Props = {
  hours: Hours;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const HoursToggle: React.FC<Props> = ({ hours, open, setOpen }) => {
  const todaySummary = (() => {
    const values = Object.values(hours || {});
    return values.length ? values[0] : '';
  })();

  return (
    <div className="text-sm text-white/90">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex items-center justify-center gap-3 w-full sm:w-auto px-3 py-2 bg-white/5 hover:bg-white/10 rounded-md transition-colors duration-200"
      >
        <span className="font-medium">{open ? 'Masquer les horaires' : 'Voir les horaires'}</span>
        {!open && todaySummary ? (
          <span className="text-white/70 text-sm">{todaySummary}</span>
        ) : null}
      </button>

  <div className={`mt-2 overflow-hidden transition-all duration-300 ${open ? 'max-h-[480px] overflow-y-auto' : 'max-h-0'}`}>
        <ul className="mt-1 space-y-0.5 text-white/80 text-xs sm:text-sm">
          {Object.entries(hours || {}).map(([day, range]) => (
            <li key={day} className="flex justify-between px-1 py-0.5">
              <span className="font-medium whitespace-nowrap">{day}</span>
              <span className="text-white/70 whitespace-nowrap">{range}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HoursToggle;
