// "use client";
// import React from "react";
// import Card from "react-bootstrap/Card";

// const Wallet = () => {
//   return (
//     <div className="p-6">
//       <div className="grow ml-16 py-4 md:ml-64 bg-gray-900 text-gray-500">
//         <Card border="primary" style={{ width: "18rem" }}>
//           <Card.Header>Header</Card.Header>
//           <Card.Body>
//             <Card.Title>Primary Card Title</Card.Title>
//             <Card.Text>
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </Card.Text>
//           </Card.Body>
//         </Card>
//         <br />
//       </div>
//     </div>
//   );
// };

// export default Wallet;

// ---------------

import React from "react";

const Card = ({ borderColor, title, cod, text }) => {
  const borderClasses = {
    primary: "border-blue-500",
    secondary: "border-gray-500",
    success: "border-green-500",
    danger: "border-red-500",
    warning: "border-yellow-500",
    info: "border-teal-500",
    dark: "border-gray-800",
    light: "border-gray-200",
  };

  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg border-2 hover:text-gray-300 ${borderClasses[borderColor]} m-4`}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{title}</div>
        <h1 className="font-bold text-xl mb-2">{cod}</h1>
        <button className="p-2 mt-4 mb-4 font-semibold text-gray-200 bg-blue-500 rounded-lg">
          Get Bill
        </button>
        <p className="text-base text-red-400">{text}</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="grow ml-16 py-4 md:ml-64 bg-gray-900 text-gray-500 flex flex-wrap justify-center">
      <Card
        borderColor="primary"
        title="Total COD"
        cod="$ 17690K"
        Bill="Bill"
        text="*Note-If you have any problem with 👆 bill Please Reach to our customer Care*"
      />
      <Card
        borderColor="secondary"
        title="Due Payment"
        cod="$ 190K"
        text="*Note-If you have any problem with 👆 bill Please Reach to our customer Care*"
      />
      <Card
        borderColor="success"
        cod="$ 12070K"
        title="COD Available"
        text="*Note-If you have any problem with 👆 bill Please Reach to our customer Care*"
      />
      <Card
        borderColor="danger"
        title="Last Remitance"
        cod="$ 2460K"
        text="*Note-If you have any problem with 👆 bill Please Reach to our customer Care*"
      />
      <Card
        borderColor="warning"
        title="Next Remitance"
        cod="$ 1723K"
        text="*Note-If you have any problem with 👆 bill Please Reach to our customer Care*"
      />
      <Card
        borderColor="info"
        title="Credit Limit"
        cod="$ 32080K"
        text="*Note-If you have any problem with 👆 bill Please Reach to our customer Care*"
      />
    </div>
  );
};

export default App;
