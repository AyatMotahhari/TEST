import {
  ClipboardList,
  CalendarDays,
} from "lucide-react";

function Header() {
  return (
    <header className="border-b border-white/[0.07] bg-[#080809]/90 px-6 py-5">
      <div className="flex items-center justify-between gap-6">
        {/* Title */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 shadow-lg shadow-orange-500/20">
            <ClipboardList size={24} className="text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              گزارش کار روزانه واحد تولید
            </h1>
          </div>
        </div>

        {/* Document info */}
        <div className="hidden items-center gap-8 lg:flex">
          <div className="flex items-center gap-1">
            <CalendarDays
              size={18}
              strokeWidth={2}
              className="text-orange-500"
            />
            <span className="text-xs font-medium text-gray-200">تاریخ ویرایش:</span>
            <span className="text-xs font-medium text-gray-200">1402/04/20</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-xs font-medium text-gray-200">شماره ویرایش:</span>
            <span className="text-xs font-medium text-gray-200">00</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-xs font-medium text-gray-200">کد سند:</span>
            <span className="text-xs font-medium text-gray-200">F0532</span>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;