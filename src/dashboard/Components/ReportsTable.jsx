import React, { useState } from 'react';
import { MoreVertical, Calendar } from 'lucide-react';
import Pagination from './Pagination';

const mockReportsData = Array.from({ length: 18 }, (_, index) => ({
  id: index + 1,
  author: "محمد احراری",
  reportNumber: `BP-260${805 - index}-00${70 - index}`,
  regDate: "1405/05/14",
  editDate: "1405/05/14",
  signDate: "1405/05/14",
  status: "تکمیل شده",
}));

export default function ReportsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(mockReportsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = mockReportsData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex-1 flex flex-col justify-between overflow-hidden">
      <div className="overflow-x-auto overflow-y-auto max-h-[480px] w-full scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        <table className="w-full text-right text-[11px] lg:text-xs border-separate border-spacing-0 whitespace-nowrap">
          <thead className="sticky top-0 z-10 text-gray-300 bg-[#16171a] backdrop-blur-md">
            <tr className="border border-white/20">
              <th className="py-2.5 md:py-3 px-3 font-normal text-center w-14 rounded-tr-2xl border-t border-r border-b border-white/20">
                ردیف
              </th>
              <th className="py-2.5 md:py-3 px-4 font-normal w-40 md:w-44 border-t border-b border-white/20">
                نام و نام خانوادگی
              </th>
              <th className="py-2.5 md:py-3 px-2 font-normal text-center w-48 md:w-52 border-t border-b border-white/20">
                شماره گزارش
              </th>
              <th className="py-2.5 md:py-3 px-2 font-normal text-center border-t border-b border-white/20">
                تاریخ ثبت گزارش
              </th>
              <th className="py-2.5 md:py-3 px-2 font-normal text-center border-t border-b border-white/20">
                تاریخ ویرایش گزارش
              </th>
              <th className="py-2.5 md:py-3 px-2 font-normal text-center border-t border-b border-white/20">
                تاریخ امضاء گزارش
              </th>
              <th className="py-2.5 md:py-3 px-3 font-normal text-center w-28 border-t border-b border-white/20">
                وضعیت
              </th>
              <th className="py-2.5 md:py-3 px-3 font-normal text-center w-14 rounded-tl-2xl border-t border-l border-b border-white/20">
                عملیات
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/5 text-gray-300">
            {currentItems.map((row) => (
              <tr 
                key={row.id} 
                className="hover:bg-white/[0.03] transition-colors group"
              >
                {/* ردیف */}
                <td className="py-2 md:py-3 px-2 text-center w-14">
                  <span className="inline-flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-lg bg-gray-600/50 backdrop-blur-sm border border-white/20 text-gray-300 font-mono text-[10px] md:text-xs">
                    {row.id}
                  </span>
                </td>

                {/* نام و نام خانوادگی */}
                <td className="py-2.5 md:py-3.5 px-4 font-medium text-white">
                  {row.author}
                </td>

                {/* شماره گزارش */}
                <td className="py-2.5 md:py-3.5 px-4 font-mono text-center">
                  <span className="inline-flex items-center justify-center w-40 md:w-64 py-1 rounded-lg bg-sky-800/10 border border-sky-500/30 text-sky-400 tracking-wider text-[11px] md:text-xs shadow-sm">
                    {row.reportNumber}
                  </span>
                </td>

                {/* تاریخ ثبت */}
                <td className="py-2.5 md:py-3.5 px-4 font-mono text-gray-400 text-center">
                  <div className="inline-flex items-center justify-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span>{row.regDate}</span>
                  </div>
                </td>

                {/* تاریخ ویرایش */}
                <td className="py-2.5 md:py-3.5 px-4 font-mono text-gray-400 text-center">
                  <div className="inline-flex items-center justify-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span>{row.editDate}</span>
                  </div>
                </td>

                {/* تاریخ امضاء */}
                <td className="py-2.5 md:py-3.5 px-4 font-mono text-gray-400 text-center">
                  <div className="inline-flex items-center justify-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span>{row.signDate}</span>
                  </div>
                </td>

                {/* وضعیت */}
                <td className="py-2.5 md:py-3.5 px-3 text-center">
                  <span className="inline-block px-3 py-1 rounded-md text-[10px] md:text-[11px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                    {row.status}
                  </span>
                </td>

                {/* عملیات */}
                <td className="py-2.5 md:py-3.5 px-2 text-center w-14">
                  <button className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition">
                    <MoreVertical className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}