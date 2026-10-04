import {
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

function Pagination() {
  return (
    <div className="mt-5 flex items-center justify-between">
      <p className="text-[11px] text-gray-600">
        نمایش ۱ تا ۶ از ۶۴ گزارش
      </p>

      <div className="flex items-center gap-1">
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.07] text-gray-600 transition hover:bg-white/[0.05] hover:text-white"
        >
          <ChevronRight size={15} />
        </button>

        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-xs font-bold text-white"
        >
          ۱
        </button>

        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.07] text-xs text-gray-500 transition hover:bg-white/[0.05] hover:text-white"
        >
          ۲
        </button>

        <span className="px-1 text-xs text-gray-700">
          ...
        </span>

        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.07] text-gray-600 transition hover:bg-white/[0.05] hover:text-white"
        >
          <ChevronLeft size={15} />
        </button>
      </div>
    </div>
  );
}

export default Pagination;