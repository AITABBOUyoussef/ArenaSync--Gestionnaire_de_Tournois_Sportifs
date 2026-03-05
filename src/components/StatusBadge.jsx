import React from 'react';

const StatusBadge = ({ status }) => {
  const styles = {
    "On Going": "bg-emerald-100 text-emerald-700 border-emerald-200",
    "Upcoming": "bg-sky-100 text-sky-700 border-sky-200",
    "Confirmed": "bg-emerald-100 text-emerald-700 border-emerald-200",
    "Pending": "bg-amber-100 text-amber-700 border-amber-200",
  };

  const defaultStyle = "bg-slate-100 text-slate-700 border-slate-200";

  return (
    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-black border uppercase tracking-wider ${styles[status] || defaultStyle}`}>
      {status}
    </span>
  );
};

export default StatusBadge;