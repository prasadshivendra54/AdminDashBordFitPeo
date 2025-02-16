import React from "react";
import Card from "./Card";
import RightCard from "./RightCard";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import ActivityChart from "./ActivityChart";
import RightChart from "./RightChart";
import Orders from "./Orders";
import CustomerFeedback from "./CustomerFeedback";
import { FaShoppingBasket } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineDeleteForever } from "react-icons/md";
import { GiProfit } from "react-icons/gi";

const Dashbord = () => {
  return (
    <div className="m-5">
      <h1 className="text-2xl mb-4 font-bold">Dashboard</h1>

      {/* Cart Section Start */}
      <div className="grid grid-cols-10 gap-5">
        {/* Left Section (60%) */}
        <div className="col-span-10 lg:col-span-6">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-6"> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
            <Card
              icon={
                <FaShoppingBasket className="rounded-md text-4xl py-1 bg-blue-200 text-blue-600" />
              }
              title="Total Orders"
              value="75"
              iconUp={<IoMdArrowDropup className="text-xl" />}
              performensUp="3%"
            />
            <Card
              icon={
                <TbTruckDelivery className="rounded-md text-4xl py-1 bg-green-200 text-green-600" />
              }
              title="Total Delivered"
              value="70"
              iconDown={<IoMdArrowDropdown className="text-xl" />}
              performensDown="3%"
            />
            <Card
              icon={
                <MdOutlineDeleteForever className="rounded-md text-4xl py-1 bg-red-200 text-red-600" />
              }
              title="Total Cancelled"
              value="05"
              iconUp={<IoMdArrowDropup className="text-xl" />}
              performensUp="3%"
            />
            <Card
              icon={
                <GiProfit className="rounded-md text-4xl py-1 bg-pink-200 text-pink-600" />
              }
              title="Total Revenue"
              value="12K"
              iconDown={<IoMdArrowDropdown className="text-xl" />}
              performensDown="3%"
            />
          </div>
        </div>

        {/* Right Section (40%) */}
        <div className="col-span-10 lg:col-span-4">
          <div className="grid grid-cols-1 mb-6">
            <RightCard
              title="Net Profit"
              value="$ 6759.25"
              icon={<IoMdArrowDropup className="text-xl" />}
              performens="3%"
            />
          </div>
        </div>
      </div>
      {/* Cart Section End */}

      {/* ------- */}

      {/* Activity Section start */}
      <div className="grid grid-cols-1 sm:grid-cols-10 gap-5">
        {/* Left Section (60%) */}
        <div className="col-span-10 lg:col-span-6">
          <div className="">
            <ActivityChart title="Activity" />
          </div>
        </div>

        {/* Right Section (40%) */}
        <div className="col-span-10 lg:col-span-4">
          <div className="mb-6">
            <RightChart title="Daily Report" />
          </div>
        </div>
      </div>
      {/* Activity Section End */}

      {/* ------ */}

      {/* Order Section Start */}
      <div className="grid grid-cols-1 sm:grid-cols-10 gap-5">
        {/* Left Section 60% */}
        <div className="col-span-10 lg:col-span-6">
          <div className="">
            <Orders title="Recent Orders" />
          </div>
        </div>

        {/* Right Section 40% */}
        <div className="col-span-10 lg:col-span-4">
          <div className="mb-6">
            <CustomerFeedback title="Customer's Feedback" />
          </div>
        </div>
      </div>
      {/* Order Section End */}

      {/* ------ */}
    </div>
  );
};

export default Dashbord;
