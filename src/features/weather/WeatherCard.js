import React from "react";

const WeatherCard = ({ data }) => {
  const { key, value, imgUrl } = data;
  return (
    <div className="flex justify-between bg-slate-100 p-4 rounded-lg items-center min-w-[230px]">
      <div>
        <p className="text-sm text-gray-400">{key}</p>
        <p className="text-2xl text-gray-600">{value}</p>
      </div>
      <div>
        <img src={imgUrl} className="w-[2rem]" />
      </div>
    </div>
  );
};

export default WeatherCard;
