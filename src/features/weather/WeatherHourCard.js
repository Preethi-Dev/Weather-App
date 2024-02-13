import React from "react";

const WeatherHourCard = ({ hourData, celsiusStatus }) => {
  return (
    <>
      <div className="flex flex-col gap-3 bg-slate-100 px-8 py-4 rounded-lg items-center justify-center">
        <p className="text-sm font-bold text-gray-600">
          {hourData.time.slice(-5)}
        </p>
        <div>
          <img src={hourData.condition.icon} />
        </div>
        <p className="text-sm text-gray-400">
          {celsiusStatus
            ? Math.floor(hourData.temp_c) + "°C"
            : Math.floor(hourData.temp_f) + "°F"}
        </p>
      </div>
    </>
  );
};

export default WeatherHourCard;
