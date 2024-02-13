import React from "react";

const ErrorState = ({ error }) => {
  const { data } = error;
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <img
        src="https://www.sketchappsources.com/resources/source-image/google-no-results-monster-fishing.png"
        alt="empty state"
        className="w-[20rem]"
      />
      <p className="text-xl text-gray-400 font-thin">{data.error.message}</p>
    </div>
  );
};

export default ErrorState;
