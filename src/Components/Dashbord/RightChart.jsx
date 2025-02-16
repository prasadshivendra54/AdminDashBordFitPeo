import React from "react";
import { BiTargetLock } from "react-icons/bi";
import { FaBowlFood } from "react-icons/fa6";
import { BiFoodMenu } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";

const RightChart = () => {
  return (
    // <div className="">
    //   <div className="p-3 bg-gray-800 text-gray-500 rounded-lg cursor-pointer font-semibold">
    //     <div className="flex items-center gap-2 justify-between">
    //       {/* <h1 className="flex items-center"> */}
    //       <BiTargetLock className="rounded-full bg-gray-700 text-6xl py-4 m-2 lg:m-2 text-red-600 " />
    //       <h1>Goals</h1>
    //       {/* </h1> */}
    //       <MdKeyboardArrowRight className="rounded-full bg-gray-700 text-4xl text-white m-4" />
    //     </div>
    //     <div className="flex items-center gap-2 justify-between">
    //       {/* <h1 className="flex items-center"> */}
    //       <FaBowlFood className="rounded-full bg-gray-700 text-6xl py-4 m-2 lg:m-2 text-blue-500" />
    //       Dishes
    //       {/* </h1> */}
    //       <MdKeyboardArrowRight className="rounded-full bg-gray-700 text-4xl text-white m-4" />
    //     </div>
    //     <div className="flex items-center gap-2 justify-between">
    //       {/* <h1 className="flex items-center"> */}
    //       <BiFoodMenu className="rounded-full bg-gray-700 text-6xl py-4 m-2 lg:m-2 text-green-400" />
    //       Menus
    //       {/* </h1> */}
    //       <MdKeyboardArrowRight className="rounded-full bg-gray-700 text-4xl text-white m-4" />
    //     </div>
    //   </div>
    // </div>

    // ----

    <div className="">
      <div className="p-3 bg-gray-800 text-gray-500 rounded-lg cursor-pointer font-semibold">
        <div className="flex sm:flex-row items-center gap-2 justify-between">
          <div className="flex items-center gap-2">
            <BiTargetLock className="rounded-full bg-gray-700 text-6xl py-4 m-2 text-red-600" />
            <h1>Goals</h1>
          </div>
          <MdKeyboardArrowRight className="rounded-full bg-gray-700 text-4xl text-white m-4" />
        </div>
        <div className="flex sm:flex-row items-center gap-2 justify-between">
          <div className="flex items-center gap-2">
            <FaBowlFood className="rounded-full bg-gray-700 text-6xl py-4 m-2 text-blue-500" />
            <h1>Dishes</h1>
          </div>
          <MdKeyboardArrowRight className="rounded-full bg-gray-700 text-4xl text-white m-4" />
        </div>
        <div className="flex sm:flex-row items-center gap-2 justify-between">
          <div className="flex items-center gap-2">
            <BiFoodMenu className="rounded-full bg-gray-700 text-6xl py-4 m-2 text-green-400" />
            <h1>Menus</h1>
          </div>
          <MdKeyboardArrowRight className="rounded-full bg-gray-700 text-4xl text-white m-4" />
        </div>
      </div>
    </div>
  );
};

export default RightChart;
