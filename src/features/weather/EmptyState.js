import React from "react";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[35rem]">
        <img src="https://cdn.dribbble.com/users/443356/screenshots/3302114/dribbble.png?resize=800x600&vertical=center" />
      </div>
      <p className="text-lg text-gray-600 ">
        Start check your current city weather condition ...
      </p>
    </div>
  );
};

export default EmptyState;
