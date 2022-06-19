import {
  CogIcon,
  CollectionIcon,
  HomeIcon,
  PhotographIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import { ShieldCheckIcon } from "@heroicons/react/solid";

const sidebarNavigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "All Files", href: "#", icon: ViewGridIcon, current: false },
  { name: "Photos", href: "#", icon: PhotographIcon, current: false },
  { name: "Shared", href: "#", icon: UserGroupIcon, current: false },
  { name: "Albums", href: "#", icon: CollectionIcon, current: false },
  { name: "Settings", href: "#", icon: CogIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DesktopSidebar() {
  return (
    <div className="hidden w-28 secondary overflow-y-auto md:block">
      <div className="w-full py-4 flex flex-col items-center ">
        <div className="flex-shrink-0 flex items-center border-x-4 border-transparent">
          <ShieldCheckIcon className="w-8 text-white" />
        </div>
        <div className="flex-1 mt-12 w-full space-y-1 border-r-4 border-transparent">
          {sidebarNavigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "on-secondary border-on-secondary"
                  : "text-white border-transparent hover:border-on-secondary",
                "group w-full p-3 border-l-4 flex flex-col items-center text-xs font-medium"
              )}
            >
              <item.icon className="w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
