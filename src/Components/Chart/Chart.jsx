"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MdArrowDropDown } from "react-icons/md";

const Array = [
  {
    name: "5",
    order: 13,
    fees: "30$",
  },
  {
    name: "9",
    order: 16,
    fees: "12$",
  },
  {
    name: "11",
    order: 10,
    fees: "10$",
  },
  {
    name: "13",
    order: 18,
    fees: "50$",
  },
  {
    name: "15",
    order: 21,
    fees: "40$",
  },
  {
    name: "17",
    order: 25,
    fees: "60$",
  },
  {
    name: "20",
    order: 21,
    fees: "60$",
  },
  {
    name: "17",
    order: 19,
    fees: "60$",
  },
  {
    name: "14",
    order: 27,
    fees: "60$",
  },
];

const ActivityChart = () => {
  return (
    <div className="grow ml-16 py-4 md:ml-64 bg-gray-900 text-gray-500">
      <div className="flex flex-col sm:flex-row items-center justify-around">
        <h2 className="text-xl lg:text-2xl font-bold my-4">Activity</h2>
        <div className="flex items-center justify-between rounded-3xl bg-gray-700 p-1 text-sm text-white mt-2 sm:mt-0">
          <h2 className="ml-2">Weekly</h2>
          <MdArrowDropDown className="text-2xl" />
        </div>
      </div>

      <div className="pt-3">
        <ResponsiveContainer width="100%" height={450}>
          <BarChart data={Array}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="order" fill="#84a0c4" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityChart;
