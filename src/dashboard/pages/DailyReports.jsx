import { DocumentPlusIcon } from "@heroicons/react/24/solid";
import StatsCards from "../Components/StatsCards";
import ReportFilters from "../Components/ReportFilters";
import ReportsTable from "../Components/ReportsTable";
import Pagination from "../Components/Pagination";

function DailyReports() {
  return (
    <div>
      {/* Page title */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          className="flex h-10 w-40 items-center justify-center gap-2 rounded-xl bg-gray-700 px-5 text-sm font-bold text-white transition hover:bg-gray-600"
        >
          افزودن گزارش
          <DocumentPlusIcon className="h-6 w-6 text-orange-500" />
        </button>
      </div>

      {/* Stats */}
      <div className="mt-6">
        <StatsCards />
      </div>

      {/* Filters */}
      <ReportFilters />

      <div>
        <h2 className="text-lg font-bold text-white">
          لیست گزارشات
        </h2>
      </div>
      
      {/* Table */}
      <ReportsTable />

      {/* Pagination */}
      <Pagination />
    </div>
  );
}

export default DailyReports;