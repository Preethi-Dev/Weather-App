import React from "react";

const ShimmerUI = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <div className="w-40 rounded-md bg-gray-200 h-16"></div>
        <div className="w-56 rounded-md bg-gray-200 h-12"></div>
      </div>
      <div className="w-full h-[8rem] rounded-xl bg-gray-200"></div>
      <div className="w-full h-[20rem] rounded-xl bg-gray-200"></div>
    </div>
  );
};

export default ShimmerUI;
