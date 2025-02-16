// import React from "react";

// function RightCard({ title, value, icon, performens }) {
//   return (
//     <div className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-700 hover:text-white">
//       <h2 className="text-sm">{title}</h2>
//       <div className="">
//         <div className="">
//           <p className="text-xl font-bold py-2">{value}</p>
//           {/* please add here pie chart that filled 70% */}
//         </div>
//         <div className="text-sm flex items-center text-green-600">
//           {icon} {performens}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RightCard;

// ==============

// "use client";

// import React from "react";
// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"; // Import necessary elements

// // Register Chart.js components
// ChartJS.register(ArcElement, Tooltip, Legend);

// function RightCard({ title, value, icon, performens }) {
//   // Data for the pie chart
//   const data = {
//     labels: ["Filled", "Remaining"],
//     datasets: [
//       {
//         data: [70, 30], // 70% blue, 30% grey
//         backgroundColor: ["#3b82f6", "#d1d5db"], // Blue and Grey colors
//         hoverBackgroundColor: ["#2563eb", "#9ca3af"], // Darker shades for hover effect
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     cutout: "70%", // Create a doughnut effect
//   };

//   return (
//     <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-700 hover:text-white">
//       <div className="">
//         <h2 className="text-sm">{title}</h2>
//         <p className="text-xl font-bold py-2">{value}</p>
//         <div className="text-sm flex items-center text-green-600">
//           {icon} {performens}
//         </div>
//       </div>

//       {/* Pie Chart */}
//       <div className="mr-10 h-20 w-20">
//         <Pie data={data} options={options} />
//       </div>
//     </div>
//   );
// }
// export default RightCard;

// ======================================

"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"; // Import necessary elements
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import the data labels plugin

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function RightCard({ title, value, icon, performens }) {
  // Data for the pie chart
  const data = {
    labels: ["Filled", "Remaining"],
    datasets: [
      {
        data: [70, 30], // 70% blue, 30% grey
        backgroundColor: ["#3b82f6", "#536a71"], // Blue and Grey colors
        hoverBackgroundColor: ["#2563eb", "#9ca3af"], // Darker shades for hover effect
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "#ffffff",
        // display: true,
        formatter: () => "70%", // Always display 70% in the center
        anchor: "center",
        align: "center",
        font: {
          size: 18, // Adjust font size as needed
          weight: "bold", // Make the text bold
        },
        offset: 0, // Center the label inside the chart
      },
    },
    cutout: "70%", // Create a doughnut effect
  };

  return (
    <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-700 hover:text-white">
      <div>
        <h2 className="text-sm">{title}</h2>
        <p className="text-xl font-bold py-3">{value}</p>
        <div className="text-sm flex items-center text-green-600 font-semibold">
          {icon} {performens}
        </div>
      </div>

      {/* Pie Chart */}
      <div className="mr-10 h-20 w-20">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default RightCard;
