import { Search, SlidersHorizontal } from "lucide-react";

const filters = [
  "همه",
  "امضاء شده",
  "بدون امضاء",
];

function ReportFilters() {
  return (
    <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-white/[0.07] bg-[#0c0c0e] p-4 lg:flex-row lg:items-center lg:justify-between">
      {/* Tabs */}
      <div className="flex items-center gap-1 rounded-xl bg-black/30 p-1">
        {filters.map((filter, index) => (
          <button
            key={filter}
            type="button"
            className={`
              rounded-lg px-5 py-2.5 text-xs transition
              ${
                index === 0
                  ? "bg-white/[0.08] font-bold text-white"
                  : "text-gray-500 hover:text-gray-300"
              }
            `}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="flex items-center gap-3">
        <div className="relative w-full lg:w-[280px]">
          <Search
            size={17}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
          />

          <input
            type="text"
            placeholder="جستجو در گزارشات..."
            className="h-10 w-full rounded-xl border border-white/[0.07] bg-black/20 pr-10 pl-4 text-xs text-white outline-none placeholder:text-gray-600 focus:border-orange-500/40"
          />
        </div>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-black/20 text-gray-500 transition hover:text-white"
        >
          <SlidersHorizontal size={17} />
        </button>
      </div>
    </div>
  );
}

export default ReportFilters;