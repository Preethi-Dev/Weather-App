import React from "react";

const Switch = ({ celsiusStatus, setCelsiusStatus }) => {
  const onClickHandler = () => {
    setCelsiusStatus(!celsiusStatus);
  };
  return (
    <div className="flex gap-2 bg-slate-100 rounded-full px-2 py-2 font-medium">
      <p
        className={`${
          !celsiusStatus && "bg-purple-300"
        } py-2 px-3 rounded-full cursor-pointer`}
        onClick={onClickHandler}
      >
        °F
      </p>
      <p
        className={`${
          celsiusStatus && "bg-purple-300"
        }  py-2 px-3 rounded-full cursor-pointer`}
        onClick={onClickHandler}
      >
        °C
      </p>
    </div>
  );
};

export default Switch;
