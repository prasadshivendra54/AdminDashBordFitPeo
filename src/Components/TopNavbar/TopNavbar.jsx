// import React from "react";
// import { CiSearch } from "react-icons/ci";
// import { CiMail } from "react-icons/ci";
// import { IoSettingsOutline } from "react-icons/io5";
// import { CgProfile } from "react-icons/cg";
// import { VscBellDot } from "react-icons/vsc";

// const TopNavbar = () => {
//   return (
//     <div className="bg-gray-800 text-gray-500 p-5 pl-6 flex items-center justify-between">
//       {/* Search Box OR Input Box */}
//       <div className="relative">
//         <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
//         <input
//           className="py-2 pl-10 pr-4 w-full rounded-md bg-gray-700 text-gray-300 placeholder-gray-400 outline-none"
//           type="text"
//           placeholder="Search"
//         />
//       </div>

//       {/* Icons */}
//       <div className="flex items-center gap-4 rounded-full pr-4 text-gray-400">
//         <div className="">
//           <CiMail className="rounded-full bg-gray-700 text-5xl py-3" />
//         </div>
//         <div className="">
//           <IoSettingsOutline className="rounded-full bg-gray-700 text-5xl py-3" />
//         </div>
//         <div className="">
//           <VscBellDot className="rounded-full bg-gray-700 text-5xl py-3" />
//         </div>
//         <div className="">
//           <CgProfile className="rounded-full bg-gray-700 text-5xl py-3" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopNavbar;

// -------------------

import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { VscBellDot } from "react-icons/vsc";

const TopNavbar = () => {
  return (
    <div className="bg-gray-800 text-gray-500 p-4 flex flex-row md:flex-row items-center justify-between z-50">
      {/* Search Box OR Input Box */}
      <div className="relative w-44 md:w-60 sm:w-60 cursor-pointer">
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
        <input
          className="py-2 pl-10 pr-4 w-full rounded-md bg-gray-700 text-gray-300 placeholder-gray-400 outline-none"
          type="text"
          placeholder="Search"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-2 md:gap-3 sm:gap-3 pr-2 sm:pr-4 text-gray-400  cursor-pointer">
        <div className="flex-shrink-0">
          <CiMail className="rounded-full bg-gray-700 text-[42px] lg:text-[42px] p-2 sm:p-3 hover:text-white" />
        </div>
        <div className="flex-shrink-0">
          <IoSettingsOutline className="rounded-full bg-gray-700 text-[42px] lg:text-[42px] p-2 sm:p-3 hover:text-white" />
        </div>
        <div className="flex-shrink-0">
          <VscBellDot className="rounded-full bg-gray-700 text-[42px] lg:text-[42px] p-2 sm:p-3 hover:text-white" />
        </div>
        <div className="flex-shrink-0">
          <CgProfile className="rounded-full bg-gray-700 text-[42px] lg:text-[42px] p-2 sm:p-3 hover:text-white" />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
