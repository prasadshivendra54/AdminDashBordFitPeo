// import React from "react";
// import { CgProfile } from "react-icons/cg";
// import { FaStar } from "react-icons/fa";

// const CustomerFeedback = ({ title }) => {
//   return (
//     <div className="p-3 sm:flex-row items-center text-sm bg-gray-800 text-gray-500 rounded-lg cursor-pointer font-semibold">
//       <h2 className="text-xl font-semibol lg:text-2xl sm:flex-row">{title}</h2>
//       <div className="">
//         <div className="flex items-center gap-2 pt-3">
//           <CgProfile className="text-3xl" />
//           <h1 className="">Jenny Wilson</h1>
//         </div>

//         <div className="flex p-1 mt-1 text-xl text-yellow-400">
//           {[...Array(5)].map((star) => {
//             return <FaStar />;
//           })}
//         </div>
//         <div className="p-1 text-sm">
//           <p className="text-[12px]">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
//             sapiente quia praesentium?. Lorem ipsum dolor sit amet consectetur
//           </p>
//         </div>
//       </div>
//       <div className="p-1">
//         <hr />
//       </div>
//       <div className="pt-2">
//         <div className="flex items-center gap-2">
//           <CgProfile className="text-3xl" />
//           <h1 className="">Jenny Wilson</h1>
//         </div>

//         <div className="flex p-1 mt-1 text-xl text-yellow-400">
//           {[...Array(5)].map((star) => {
//             return <FaStar />;
//           })}
//         </div>
//         <div className="p-1 text-sm">
//           <p className="text-[12px]">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//             Temporibus, laborum?
//           </p>
//         </div>
//       </div>

//       <div className="p-1">
//         <hr />
//       </div>

//       <div className="pt-2">
//         <div className="flex items-center gap-2">
//           <CgProfile className="text-3xl" />
//           <h1 className="">Jenny Wilson</h1>
//         </div>

//         <div className="flex p-1 mt-1 text-xl text-yellow-400 pb-2">
//           {[...Array(5)].map((star) => {
//             return <FaStar />;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerFeedback;

// ---------------------

import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaStar } from "react-icons/fa";

const CustomerFeedback = ({ title }) => {
  return (
    <div className="p-3 sm:flex-row items-center text-sm bg-gray-800 text-gray-500 rounded-lg cursor-pointer font-semibold">
      <h2 className="text-xl lg:text-xl font-semibold">{title}</h2>
      <div className="space-y-4">
        <div className="">
          <div className="flex items-center gap-2 pt-3">
            <CgProfile className="text-3xl" />
            <h1>Jenny Wilson</h1>
          </div>

          <div className="flex p-1 mt-1 text-xl text-yellow-400">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
          <div className="p-1 text-sm">
            <p className="text-[12px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
              sapiente quia praesentium?.
            </p>
          </div>
        </div>
        <hr />
        <div className="">
          <div className="flex items-center gap-2 pt-2">
            <CgProfile className="text-3xl" />
            <h1>Jenny Wilson</h1>
          </div>

          <div className="flex p-1 mt-1 text-xl text-yellow-400">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
          <div className="p-1 text-sm">
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus, laborum?
            </p>
          </div>
        </div>
        <hr />
        <div className="">
          <div className="flex items-center gap-2 pt-2">
            <CgProfile className="text-3xl" />
            <h1>Jenny Wilson</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
