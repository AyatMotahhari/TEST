import {
  CalendarDays,
  MoreVertical,
  CheckCircle2,
} from "lucide-react";

const reports = [
  {
    id: "BP-260805-0070",
    date: "1405/05/08",
    person: "محمد اجرایی",
    department: "واحد تولید",
  },
  {
    id: "BP-260805-0069",
    date: "1405/05/08",
    person: "محمد اجرایی",
    department: "واحد تولید",
  },
  {
    id: "BP-260805-0068",
    date: "1405/05/07",
    person: "محمد اجرایی",
    department: "واحد تولید",
  },
  {
    id: "BP-260805-0067",
    date: "1405/05/07",
    person: "محمد اجرایی",
    department: "واحد تولید",
  },
  {
    id: "BP-260805-0066",
    date: "1405/05/06",
    person: "محمد اجرایی",
    department: "واحد تولید",
  },
  {
    id: "BP-260805-0065",
    date: "1405/05/06",
    person: "محمد اجرایی",
    department: "واحد تولید",
  },
];

function ReportsTable() {
  return (
    <div className="mt-5 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0c0c0e]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse">
          <thead>
            <tr className="border-b border-white/[0.07] bg-white/[0.015]">
              <th className="px-5 py-4 text-right text-[11px] font-medium text-gray-600">
                شماره گزارش
              </th>

              <th className="px-5 py-4 text-right text-[11px] font-medium text-gray-600">
                تاریخ
              </th>

              <th className="px-5 py-4 text-right text-[11px] font-medium text-gray-600">
                ثبت کننده
              </th>

              <th className="px-5 py-4 text-right text-[11px] font-medium text-gray-600">
                واحد
              </th>

              <th className="px-5 py-4 text-right text-[11px] font-medium text-gray-600">
                وضعیت
              </th>

              <th className="w-16 px-5 py-4" />
            </tr>
          </thead>

          <tbody>
            {reports.map((report) => (
              <tr
                key={report.id}
                className="border-b border-white/[0.05] last:border-0 transition hover:bg-white/[0.025]"
              >
                <td className="px-5 py-4">
                  <span className="inline-flex rounded-lg bg-orange-500/10 px-3 py-1.5 text-[11px] font-medium text-orange-400">
                    {report.id}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <CalendarDays
                      size={14}
                      className="text-gray-600"
                    />
                    {report.date}
                  </div>
                </td>

                <td className="px-5 py-4 text-xs text-gray-300">
                  {report.person}
                </td>

                <td className="px-5 py-4 text-xs text-gray-500">
                  {report.department}
                </td>

                <td className="px-5 py-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1.5 text-[10px] text-emerald-400">
                    <CheckCircle2 size={12} />
                    تکمیل شده
                  </span>
                </td>

                <td className="px-5 py-4">
                  <button
                    type="button"
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-600 transition hover:bg-white/[0.06] hover:text-white"
                  >
                    <MoreVertical size={17} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReportsTable;