const stats = [
  {
    title: "کل گزارشات",
    value: "128",
    icon: "#",
    color: "orange",
  },
  {
    title: "تکمیل شده",
    value: "96",
    icon: "✓",
    color: "green",
  },
  {
    title: "در انتظار بررسی",
    value: "32",
    icon: "!",
    color: "white",
  },
];

function StatsCards() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-70">
        {stats.map((item) => {
          const colors = {
            orange: {
              border: "border-orange-500/30",
              iconBg: "bg-orange-500/10",
              icon: "text-orange-500",
              line: "bg-orange-500/30",
            },
            green: {
              border: "border-green-500/30",
              iconBg: "bg-green-500/10",
              icon: "text-green-500",
              line: "bg-green-500/30",
            },
            white: {
              border: "border-white/20",
              iconBg: "bg-white/10",
              icon: "text-white",
              line: "bg-white/20",
            },
          };

          const color = colors[item.color];

          return (
            <div
              key={item.title}
              className={`flex h-24 w-80 items-center rounded-xl border bg-black/30 px-4 ${color.border}`}
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-2xl font-bold ${color.iconBg} ${color.icon}`}
              >
                {item.icon}
              </div>
              <div
                className={`mx-5 h-14 w-px shrink-0 ${color.line}`}
              />
              <div className="shrink-0">
                <p className="text-xl font-bold text-white">
                  {item.value}
                </p>

                <p className="mt-1 text-base font-bold text-gray-500">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StatsCards;