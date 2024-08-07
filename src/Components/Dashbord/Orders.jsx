import React from "react";
import { BiTargetLock } from "react-icons/bi";
import { FaBowlFood } from "react-icons/fa6";
import { BiFoodMenu } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Orders = ({ title }) => {
  return (
    <div className="">
      <div className="p-3 bg-gray-800 text-gray-500 rounded-lg cursor-pointer font-semibold">
        <h2 className="text-xl lg:text-2xl sm:flex-row font-bold">{title}</h2>

        <div className="flex justify-between pt-3 text-sm">
          <div className="">Customer</div>
          <div className="ml-16">Order No.</div>
          <div className="hidden sm:inline mr-8">Amount</div>
          <div className="mr-8">Status</div>
        </div>
        <div className="pt-2">
          <hr />
        </div>

        {/* <div className="flex items-center justify-between pt-3 text-sm">
          <div className="flex gap-1 items-center">
            <CgProfile className="text-3xl" /> Rahul Cooper
          </div>
          <div className="">11223344</div>
          <div className="">$124.00</div>
          <div className="mr-3 rounded-2xl bg-green-300 text-green-600 pl-2.5 pr-2.5">
            Delivered
          </div>
        </div>
        <div className="pt-2">
          <hr />
        </div> */}

        <div className="flex items-center justify-between pt-3 text-sm">
          <div className="flex gap-1 items-center">
            <CgProfile className="text-3xl" /> Rahul Cooper
          </div>
          <div className="">#2234</div>
          <div className="hidden sm:inline">$124.00</div>
          <div className="mr-3 rounded-2xl bg-green-300 text-green-600 pl-1.5 pr-1.5 md:pl-2.5 md:pr-2.5 lg:pl-2.5 lg:pr-2.5">
            Delivered
          </div>
        </div>
        <div className="pt-2">
          <hr />
        </div>

        <div className="flex items-center justify-between pt-3 text-sm">
          <div className="flex gap-1 items-center">
            <CgProfile className="text-3xl" /> Rahul Cooper
          </div>
          <div className="">#2232</div>
          <div className="hidden sm:inline">$124.00</div>
          <div className="mr-3 rounded-2xl bg-green-300 text-green-600 pl-1.5 pr-1.5 md:pl-2.5 md:pr-2.5 lg:pl-2.5 lg:pr-2.5">
            Delivered
          </div>
        </div>
        <div className="pt-2">
          <hr />
        </div>

        <div className="flex items-center justify-between pt-3 text-sm">
          <div className="flex gap-1 items-center">
            <CgProfile className="text-3xl" /> Rahul Cooper
          </div>
          <div className="">#2232</div>
          <div className="hidden sm:inline">$124.00</div>
          <div className="mr-3 rounded-2xl bg-red-300 text-red-500 pl-1.5 pr-1.5 md:pl-2.5 md:pr-2.5 lg:pl-2.5 lg:pr-2.5">
            Cancelled
          </div>
        </div>
        <div className="pt-2">
          <hr />
        </div>

        <div className="flex items-center justify-between pt-3 text-sm">
          <div className="flex gap-1 items-center">
            <CgProfile className="text-3xl" /> Rahul Cooper
          </div>
          <div className="">#2232</div>
          <div className="hidden sm:inline">$124.00</div>
          <div className="mr-3 rounded-2xl bg-red-300 text-red-500 pl-1.5 pr-1.5 md:pl-2.5 md:pr-2.5 lg:pl-2.5 lg:pr-2.5">
            Pending
          </div>
        </div>
        <div className="pt-2">
          <hr />
        </div>

        <div className="flex items-center justify-between pt-3 text-sm">
          <div className="flex gap-1 items-center">
            <CgProfile className="text-3xl" /> Rahul Cooper
          </div>
          <div className="">#2232</div>
          <div className="hidden sm:inline">$124.00</div>
          <div className="mr-3 rounded-2xl bg-green-300 text-green-600 pl-1.5 pr-1.5 md:pl-2.5 md:pr-2.5 lg:pl-2.5 lg:pr-2.5">
            Delivered
          </div>
        </div>
        <div className="pt-2">
          <hr />
        </div>

        <div className="flex items-center justify-between pt-3 text-sm pb-4">
          <div className="flex gap-1 items-center">
            <CgProfile className="text-3xl" /> Rahul Cooper
          </div>
          <div className="">#2232</div>
          <div className="hidden sm:inline">$124.00</div>
          <div className="mr-3 rounded-2xl bg-green-300 text-green-600 pl-2.5 pr-2.5">
            Delivered
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;

// ----------------
