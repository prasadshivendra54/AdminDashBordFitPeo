// import React from "react";
// import { MdDashboard } from "react-icons/md";
// import { SlHome } from "react-icons/sl";
// import { MdInsertChartOutlined } from "react-icons/md";
// import { VscNotebook } from "react-icons/vsc";
// import { CiWallet } from "react-icons/ci";
// import { BsBagCheck } from "react-icons/bs";

// const Sidebar = () => {
//   return (
//     <div className="bg-gray-800 text-gray-500 h-screen px-4 fixed w-16 md:w-64">
//       <h1 className="text-2xl font-bold flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-700 hover:text-white mt-4 text-center">
//         <MdDashboard />
//         <span className="hidden md:block">FitPeo</span>
//       </h1>

//       <ul className="flex flex-col mt-5 text-xl gap-2">
//         <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-700 hover:text-white">
//           <SlHome />
//           <span className="hidden md:inline">Home</span>
//         </li>
//         <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-700 hover:text-white">
//           <MdInsertChartOutlined />
//           <span className="hidden md:inline">Chart</span>
//         </li>
//         <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-700 hover:text-white">
//           <VscNotebook />
//           <span className="hidden md:inline">Order</span>
//         </li>
//         <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-700 hover:text-white">
//           <CiWallet />
//           <span className="hidden md:inline">Wallet</span>
//         </li>
//         <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-700 hover:text-white">
//           <BsBagCheck />
//           <span className="hidden md:inline">Inventry</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

// -----------------

"use client";
import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { SlHome } from "react-icons/sl";
import { MdInsertChartOutlined } from "react-icons/md";
import { VscNotebook } from "react-icons/vsc";
import { CiWallet } from "react-icons/ci";
import { BsBagCheck } from "react-icons/bs";
import Link from "next/link";

export const Navlinks = [
  {
    id: "1",
    name: "Home",
    link: "/",
  },
  {
    id: "2",
    name: "Chart",
    link: "/chart",
  },
  {
    id: "3",
    name: "Order",
    link: "/order",
  },
  {
    id: "4",
    name: "Wallet",
    link: "/wallet",
  },
  {
    id: "5",
    name: "Inventry",
    link: "/inventry",
  },
];

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("1");

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  return (
    <div className="bg-gray-800 text-gray-500 h-screen px-4 fixed w-16 md:w-64">
      <h1 className="text-2xl pt-2 font-bold flex items-center md:py-3 lg:py-3 md:px-2 lg:px-2 space-x-4 hover:rounded hover:cursor-pointer hover:text-white text-center">
        <MdDashboard className="text-6xl md:text-4xl lg:text-4xl" />
        <span className="hidden md:block">FitPeo</span>
      </h1>

      <ul className="flex flex-col mt-3 sm:mt-3 md:mt-6 lg:mt-6 text-xl gap-2">
        {Navlinks.map((navlink) => (
          <li
            key={navlink.id}
            className={`${
              activeLink === navlink.id ? "bg-gray-700 text-white" : ""
            } hover:bg-gray-700 hover:text-white rounded`}
            onClick={() => handleLinkClick(navlink.id)}
          >
            <Link
              href={navlink.link}
              className="flex items-center md:py-3 lg:py-3 md:px-2 lg:px-2 space-x-4"
            >
              {navlink.id === "1" && (
                <SlHome className="text-6xl md:text-4xl lg:text-4xl" />
              )}
              {navlink.id === "2" && (
                <MdInsertChartOutlined className="text-6xl md:text-4xl lg:text-4xl" />
              )}
              {navlink.id === "3" && (
                <VscNotebook className="text-6xl md:text-4xl lg:text-4xl" />
              )}
              {navlink.id === "4" && (
                <CiWallet className="text-6xl md:text-4xl lg:text-4xl" />
              )}
              {navlink.id === "5" && (
                <BsBagCheck className="text-6xl md:text-4xl lg:text-4xl" />
              )}
              <span className="hidden md:inline">{navlink.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
