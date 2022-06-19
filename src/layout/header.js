import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MenuAlt2Icon, PlusIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProfileDropdown() {
  return (
    <Menu as="div" className="relative flex-shrink-0">
      <div className="flex items-center">
        <Menu.Button className="border-0 p-0">
          <span className="sr-only">Open user menu</span>
          <img
            className="w-6"
            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
            alt=""
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {userNavigation.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <a
                  href={item.href}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  {item.name}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function MobileMenuButton(props) {
  return (
    <button
      type="button"
      className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
      onClick={() => props.setMobileMenuOpen(true)}
    >
      <span className="sr-only">Open sidebar</span>
      <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}

export default function Header(props) {
  return (
    <header className="w-full">
      <div className="flex justify-between relative z-10 px-4 pt-4 pb-2 flex-shrink-0 surface sm:px-8">
        <MobileMenuButton setMobileMenuOpen={props.setMobileMenuOpen} />
        <div className="hidden md:block">
          <h1 className="text-xl font-medium">Home</h1>
        </div>
        <div className="flex flex-row-reverse">
          <div className="flex items-center space-x-6 py-1 border-b border-dark">
            <form className="sm:w-72 flex items-center md:ml-0">
              <div className="relative w-full">
                <input
                  type="text"
                  name="search-field"
                  id="search-field"
                  className="bg-transparent border-transparent focus:outline-none py-0.5"
                />
                <label className="h-full pointer-events-none absolute top-0 right-0 flex items-center cursor-pointer surface">
                  <SearchIcon
                    className="flex-shrink-0 w-4"
                    aria-hidden="true"
                  />
                </label>
              </div>
            </form>
            <div className="flex items-center">
              <button className="border-none px-0 py-0">
                <PlusIcon className="w-4" />
              </button>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <ProfileDropdown />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
