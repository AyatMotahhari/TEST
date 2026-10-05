import { useState, useEffect } from 'react';
import { MoreVertical, Calendar } from 'lucide-react';
import Pagination from './Pagination';
import { LiaEdit } from "react-icons/lia";
import { BsFillTrashFill } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa6";

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
  const [openMenu, setOpenMenu] = useState(null);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(mockReportsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentItems = mockReportsData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    const handleClickOutside = () => {
      setOpenMenu(null);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex-1 flex flex-col justify-between overflow-hidden">

      {/* Table Container */}
      <div className="overflow-x-auto overflow-y-auto max-h-145 w-full scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">

        <table className="w-full text-right text-sm lg:text-[15px] border-separate border-spacing-0 whitespace-nowrap">

          {/* Header */}
          <thead className="sticky top-0 z-10 text-gray-300 bg-[#16171a] backdrop-blur-md">

            <tr className="border border-white/20">

              {/* ردیف */}
              <th className="py-3.5 md:py-4 px-4 font-normal text-center w-16 rounded-tr-2xl border-t border-r border-b border-white/20">
                ردیف
              </th>

              {/* نام */}
              <th className="py-3.5 md:py-4 px-5 font-normal w-44 md:w-48 border-t border-b border-white/20">
                نام و نام خانوادگی
              </th>

              {/* شماره گزارش */}
              <th className="py-3.5 md:py-4 px-3 font-normal text-center w-52 md:w-60 border-t border-b border-white/20">
                شماره گزارش
              </th>

              {/* تاریخ ثبت */}
              <th className="py-3.5 md:py-4 px-3 font-normal text-center border-t border-b border-white/20">
                تاریخ ثبت گزارش
              </th>

              {/* تاریخ ویرایش */}
              <th className="py-3.5 md:py-4 px-3 font-normal text-center border-t border-b border-white/20">
                تاریخ ویرایش گزارش
              </th>

              {/* تاریخ امضاء */}
              <th className="py-3.5 md:py-4 px-3 font-normal text-center border-t border-b border-white/20">
                تاریخ امضاء گزارش
              </th>

              {/* وضعیت */}
              <th className="py-3.5 md:py-4 px-4 font-normal text-center w-32 border-t border-b border-white/20">
                وضعیت
              </th>

              {/* عملیات */}
              <th className="py-3.5 md:py-4 px-4 font-normal text-center w-16 rounded-tl-2xl border-t border-l border-b border-white/20">
                عملیات
              </th>

            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-white/5 text-gray-300">

            {currentItems.map((row) => (

              <tr
                key={row.id}
                className="hover:bg-white/3 transition-colors group"
              >

                {/* ردیف */}
                <td className="py-2.5 md:py-3 px-3 text-center w-16">

                  <span className="inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-lg bg-gray-600/50 backdrop-blur-sm border border-white/20 text-gray-300 font-mono text-xs md:text-sm">
                    {row.id}
                  </span>

                </td>

                {/*  نام و نام خانوادگی */}
                <td className="py-2.5 md:py-3.5 px-5 font-medium text-white text-sm md:text-[15px]">
                  {row.author}
                </td>

                {/* شماره گزارش */}
                <td className="py-2.5 md:py-3.5 px-4 font-mono text-center">

                  <span className="inline-flex items-center justify-center w-48 md:w-68 h-6.5 py-2 rounded-[10px] bg-sky-800/10 border border-sky-500/30 text-sky-400 tracking-wider text-sm md:text-[15px] shadow-sm">
                    {row.reportNumber}
                  </span>

                </td>

                {/* تاریخ ثبت */}
                <td className="py-2.5 md:py-3.5 px-4 font-mono text-gray-400 text-center">

                  <div className="inline-flex items-center justify-center gap-2 text-sm md:text-[15px]">

                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-orange-500 shrink-0" />

                    <span>
                      {row.regDate}
                    </span>

                  </div>

                </td>

                {/* تاریخ ویرایش */}
                <td className="py-2.5 md:py-3.5 px-4 font-mono text-gray-400 text-center">

                  <div className="inline-flex items-center justify-center gap-2 text-sm md:text-[15px]">

                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-orange-500 shrink-0" />

                    <span>
                      {row.editDate}
                    </span>

                  </div>

                </td>

                {/* تاریخ امضاء */}
                <td className="py-2.5 md:py-3.5 px-4 font-mono text-gray-400 text-center">

                  <div className="inline-flex items-center justify-center gap-2 text-sm md:text-[15px]">

                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-orange-500 shrink-0" />

                    <span>
                      {row.signDate}
                    </span>

                  </div>

                </td>

                {/* وضعیت */}
                <td className="py-2.5 md:py-3.5 px-4 text-center">

                  <span className="inline-block px-4 py-2 rounded-[10px] text-sm md:text-[15px] bg-emerald-500/10 text-emerald-400  font-medium">
                    {row.status}
                  </span>

                </td>

                {/* عملیات */}
                <td className="relative py-2.5 md:py-3.5 px-3 text-center w-16">

                  <button
                    onClick={(e) => {
                      e.stopPropagation();

                      setOpenMenu(
                        openMenu === row.id ? null : row.id
                      )
                    }}
                    type="button"
                    className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition"
                  >
                    <MoreVertical className="w-5 h-5 md:w-5 md:h-[5" />
                  </button>

                  {openMenu === row.id && (
                    <div className="absolute left-8 top-3/5 mr-2 z-50 w-48 overflow-hidden rounded-lg border border-white/10 bg-[#202124] shadow-x1">
                      <div className="border-b border-white-10 px-4 py-3 text-right">
                        <p className="text-sm font-semibold text-white">
                          {row.author}
                        </p>
                      </div>

                      <button
                      type="button"
                      onClick={() => {
                        setOpenMenu(null);
                      }}
                      className="flex w-full items-center px-1 py-3 text-base text-white gap-2"
                      >
                        <LiaEdit className="h-6.25 w-6.25 text-green-500" />
                        <span>ویرایش</span>
                      </button>

                      <button
                      type="button"
                      onClick={() => {
                        setOpenMenu(null);
                      }}
                      className="flex w-full items-center px-1 py-3 text-base text-white gap-2"
                      >
                        <BsFillTrashFill className="h-6.25 w-6.25 text-red-500" />
                        <span>حذف</span>
                      </button>

                      <button
                      type="button"
                      onClick={() => {
                        setOpenMenu(null);
                      }}
                      className="flex w-full items-center px-1 py-3 text-base text-white gap-2"
                      >
                        <FaWpforms className="h-6.25 w-6.25 text-white" />
                        <span>نمایش</span>
                      </button>
                    </div>
                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />

    </div>
  );
}