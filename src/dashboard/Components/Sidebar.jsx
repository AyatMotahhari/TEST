import {
  Menu,
  MonitorCog,
  Zap,
  Settings,
  Shapes,
  ShoppingCart,
  Cog,
  Wrench,
  SlidersHorizontal,
  CircleCheck,
  ClipboardPenLine,
  Warehouse,
} from "lucide-react";

const menuItems = [
  {
    title: "مدیریت سیستم",
    icon: MonitorCog,
  },
  {
    title: "برق",
    icon: Zap,
  },
  {
    title: "تولید",
    icon: Settings,
  },
  {
    title: "طراحی قالب",
    icon: Shapes,
  },
  {
    title: "خروج محصول",
    icon: ShoppingCart,
  },
  {
    title: "تراشکاری",
    icon: Cog,
  },
  {
    title: "پیچ پلانت",
    icon: Wrench,
  },
  {
    title: "مکانیک",
    icon: Wrench,
  },
  {
    title: "تأسیسات",
    icon: SlidersHorizontal,
  },
  {
    title: "کنترل کیفیت و بسته بندی",
    icon: CircleCheck,
  },
  {
    title: "برنامه ریزی تولید",
    icon: ClipboardPenLine,
  },
  {
    title: "انبار محصول",
    icon: Warehouse,
  },
];

function Sidebar({ isOpen, setIsOpen }) {

  return (
    <aside
      className={`
        fixed right-0 top-0 z-50
        flex h-screen flex-col
        overflow-hidden
        rounded-[15px]
        bg-black/70
        transition-all duration-500
        backdrop-blur-[2px]

        ${
          isOpen
            ? "w-[15%] min-w-[180px] max-w-[280px]"
            : "w-[4.5%] min-w-[65px]"
        }
      `}
    >

      <div className="relative h-16 shrink-0">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="
            absolute
            left-5
            top-3
            flex
            cursor-pointer
            items-center
            justify-center
            text-white
            transition-all
            duration-300
            hover:scale-110
            hover:text-[#FF5C5C]
          "
        >
          <Menu
            size={30}
            strokeWidth={2}
          />
        </button>
      </div>

      <div className="flex shrink-0 flex-col items-center justify-center px-4">
        <button
          type="button"
          className="group"
        >
          <div
            className={`
              flex
              items-center
              justify-center
              overflow-hidden
              rounded-full
              bg-white
              transition-all
              duration-300
              group-hover:scale-105

              ${
                isOpen
                  ? "h-12 w-12"
                  : "h-6 w-6"
              }
            `}
          >
            <span
              className={`
                font-black
                text-black
                transition-all
                ${
                  isOpen
                    ? "text-2xl"
                    : "text-base"
                }
              `}
            >
              A
            </span>
          </div>
        </button>

        <p
          className={`
            mt-3
            pb-2
            text-center
            font-bold
            text-[#ffffffc9]
            transition-all
            duration-300

            ${
              isOpen
                ? "w-full border-b border-gray-500/40 opacity-100"
                : "pointer-events-none h-0 w-0 translate-x-20 overflow-hidden opacity-0"
            }
          `}
        >
          <span className="text-[13px]">
            جناب آقای God Mode خوش آمدید.
          </span>
        </p>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto">
        <nav className="flex w-full flex-col items-center gap-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                type="button"
                className="
                  group
                  flex
                  h-[58px]
                  w-[90%]
                  items-center
                  justify-start
                  rounded-xl
                  px-4
                  text-white/60
                  transition-all
                  duration-200
                  hover:bg-white/5
                  hover:text-white
                  hover:border-r-2
                  hover:border-r-white
                "
              >
                <Icon
                  size={26}
                  strokeWidth={2}
                  className="shrink-0 text-white"
                />

                {isOpen && (
                  <span className="mr-4 whitespace-nowrap text-[14px]">
                    {item.title}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;