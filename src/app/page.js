
import Dashbord from "@/Components/Dashbord/Dashbord";
import Sidebar from "@/Components/Sidebar/Sidebar";
import TopNavbar from "@/Components/TopNavbar/TopNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="grow ml-16 md:ml-64 h-screen bg-gray-900 text-gray-500">
        {/* grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-300 text-gray-500 */}
        {/* <TopNavbar /> */}
        <Dashbord />
      </div>
      {/* <TopNavbar /> */}
    </div>
  );
}

