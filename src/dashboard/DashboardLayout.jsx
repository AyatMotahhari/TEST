import { useState } from "react";

import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import bgImage from "../assets/Dark.jpg";

function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div
      dir="rtl"
      className="relative h-screen w-full overflow-hidden text-white"
    >
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 bg-black/40" />

      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <main
        className={`
          h-screen
          overflow-hidden
          transition-all
          duration-500
          ${
            isSidebarOpen
              ? "mr-[15%]"
              : "mr-[4%]"
          }
        `}
      >
        <div
          className="
            h-full
            w-full
            overflow-hidden
            rounded-[15px]
            bg-black/90
          "
        >
          <Header />

          <div
            className="
              h-[calc(100vh-64px)]
              overflow-y-auto
              px-2
              py-3
            "
          >
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;