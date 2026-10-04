import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./Components/Header";

function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#050505] text-white"
    >
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <main
        className={`
          min-h-screen
          transition-all
          duration-500
          ${
            isSidebarOpen
              ? "pr-[15%]"
              : "pr-[4.5%]"
          }
        `}
      >
        <Header />

        <div className="px-6 py-6">
          {children}
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;