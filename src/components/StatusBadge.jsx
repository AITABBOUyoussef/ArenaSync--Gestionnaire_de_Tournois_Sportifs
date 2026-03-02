import React from 'react';

const StatusBadge = ({ status }) => {
  // Mapping dyal l-alwan 3la hsab l-status dyal l-brief
  const styles = {
    "On Going": "bg-green-100 text-green-700 border-green-200", // US3
    "Upcoming": "bg-blue-100 text-blue-700 border-blue-200",   // US3
    "Confirmed": "bg-green-100 text-green-700 border-green-200", // US5
    "Pending": "bg-orange-100 text-orange-700 border-orange-200", // US5
  };

  const defaultStyle = "bg-gray-100 text-gray-700 border-gray-200";

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${styles[status] || defaultStyle}`}>
      {status}
    </span>
  );
};

export default StatusBadge;