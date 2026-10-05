import { HiDocumentPlus } from "react-icons/hi2";
import StatsCards from "../Components/StatsCards";
import ReportFilters from "../Components/ReportFilters";
import ReportsTable from "../Components/ReportsTable";
import Pagination from "../Components/Pagination";
import AddReport from "../Components/AddReport";
import { useState } from "react";

function DailyReports() {

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="-mt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={() => 
            setIsModalOpen(true)}
            
          className="group flex h-10 w-40 items-center justify-center gap-2 rounded-xl px-5 text-sm font-bold text-white"
        >
          افزودن گزارش
          <HiDocumentPlus className="h-6 w-6 text-orange-500 transition-transform duration-700 hover:rotate-360" />
        </button>
      </div>

      <AddReport isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <div className="mt-6">
        <StatsCards />
      </div>

      <ReportFilters />

      <ReportsTable />

      <Pagination />
    </div>
  );
}

export default DailyReports;