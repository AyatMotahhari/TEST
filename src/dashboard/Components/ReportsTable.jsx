import { useState } from 'react';
import { Calendar } from 'lucide-react';
import Pagination from './Pagination';
import ReportAction from './ReportAction';

const mockReportsData = Array.from({ length: 18 }, (_, index) => ({
  id: index + 1,
  author: 'محمد احراری',
  reportNumber: `BP-260${805 - index}-00${70 - index}`,
  regDate: '1405/05/14',
  editDate: '1405/05/14',
  signDate: '1405/05/14',
  status: 'تکمیل شده',
}));

export default function ReportsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(mockReportsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = mockReportsData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex-1 flex flex-col -mt-2 justify-between overflow-hidden">
      <div className="overflow-x-auto overflow-y-auto max-h-150 w-full no-scrollbar">
        <table className="w-full  text-right text-sm lg:text-[15px] border-separate border-spacing-0 whitespace-nowrap">
          <thead className="sticky top-0 z-10 text-gray-300 bg-[#16171a] backdrop-blur-md">
            <tr>
              <th className="py-3 pr-5 text-center font-normal w-13.5 rounded-tr-[10px] border-t border-r border-b border-white/30">
                ردیف
              </th>
              <th className="py-3 px-5 text-center font-normal w-50.25 md:w-48 border-t border-b border-white/30">
                نام و نام خانوادگی
              </th>
              <th className="py-3 px-3 text-center font-normal w-53.25 md:w-60 border-t border-b border-white/30">
                شماره گزارش
              </th>
              <th className="py-3 px-3 text-center font-normal w-48.75 border-t border-b border-white/30">
                تاریخ ثبت گزارش
              </th>
              <th className="py-3 px-3 text-center font-normal w-56.25 border-t border-b border-white/30">
                تاریخ ویرایش گزارش
              </th>
              <th className="py-3 px-3 text-center font-normal w-51.25 border-t border-b border-white/30">
                تاریخ امضاء گزارش
              </th>
              <th className="py-3 px-4 text-center font-normal w-25 border-t border-b border-white/30">
                وضعیت
              </th>
              <th className="py-3 pl-1 text-center font-normal w-22.25 rounded-tl-[10px] border-t border-l border-b border-white/30">
                عملیات
              </th>
            </tr>
          </thead>

          <tbody className="text-gray-300">
            {currentItems.map((row) => (
              <tr
                key={row.id}
                className="text-center hover:bg-white/3 transition-colors group"
              >
                {/* ردیف */}
                <td className="h-16.25 w-16 border-b border-white/20">
                  <span className="inline-flex items-center justify-center rounded-[10px] border border-white/10 bg-[#131720] px-2.5 py-1 font-mono text-white/70 text-sm">
                    {row.id}
                  </span>
                </td>

                {/* نام و نام خانوادگی */}
                <td className="h-16.25 px-5 border-b border-white/20 font-medium text-white text-sm md:text-[15px]">
                  {row.author}
                </td>

                {/* شماره گزارش */}
                <td className="h-16.25 px-4 border-b border-white/20">
                  <span className="inline-flex w-78.25 items-center justify-center rounded-[10px] border border-[#32a3de]/40 bg-[#182228] font-mono tracking-wider text-[#32a3de] text-sm md:text-[15px]">
                    {row.reportNumber}
                  </span>
                </td>

                {/* تاریخ ثبت */}
                <td className="h-16.25 px-4 border-b border-white/20 font-[AvenirLTProBook] text-white">
                  <div className="inline-flex items-center justify-center gap-2 text-sm md:text-[15px]">
                    <Calendar className="w-5 h-5 text-[#863515] shrink-0" />
                    <span>{row.regDate}</span>
                  </div>
                </td>

                {/* تاریخ ویرایش */}
                <td className="h-16.25 px-4  border-b border-white/20 font-[AvenirLTProBook] text-white">
                  <div className="inline-flex items-center justify-center gap-2 text-sm md:text-[15px]">
                    <Calendar className="w-5 h-5 text-[#863515] shrink-0" />
                    <span>{row.editDate}</span>
                  </div>
                </td>

                {/* تاریخ امضاء */}
                <td className="h-16.25 px-4 border-b border-white/20 font-[AvenirLTProBook] text-white">
                  <div className="inline-flex items-center justify-center gap-2 text-sm md:text-[15px]">
                    <Calendar className="w-5 h-5 text-[#863515] shrink-0" />
                    <span>{row.signDate}</span>
                  </div>
                </td>

                {/* وضعیت */}
                <td className="h-16.25 px-4 border-b border-white/20 w-25">
                  <span className="inline-block rounded-[10px] px-3 py-1 bg-[#1b4025]/50 text-[#3cbb30] font-medium">
                    {row.status}
                  </span>
                </td>

                {/* عملیات */}
                <td className="h-16.25 px-3 border-b border-white/20 w-16">
                  <ReportAction row={row} />
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