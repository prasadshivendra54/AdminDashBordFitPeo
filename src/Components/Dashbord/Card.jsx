import React from "react";

const Card = ({
  icon,
  title,
  value,
  iconUp,
  iconDown,
  performensUp,
  performensDown,
}) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-700 hover:text-white">
      <div className="text-3xl">{icon}</div>
      <div className="">
        <h2 className="text-sm pt-1">{title}</h2>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold pt-1">{value}</p>
          <div className="">
            <div className="flex items-center justify-end text-sm text-green-600 font-semibold">
              {iconUp} {performensUp}
            </div>
            <div className="flex items-center justify-end text-sm text-red-600 font-semibold">
              {iconDown} {performensDown}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
