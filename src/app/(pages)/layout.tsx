"use client";
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  Bars3Icon,
  BellIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Transition,
} from "@headlessui/react";
import Logo from "@/components/logo";
import Link from "next/link";
//   import {Transition} from '@heroicons/react/20/solid'

const navigation = [
  { name: "Sign In", href: "#", icon: HomeIcon, count: "5", current: true },
  { name: "Log out", href: "#", icon: UsersIcon, current: false },
  { name: "Setting", href: "#", icon: FolderIcon, count: "12", current: false },
  // {
  //   name: "Calendar",
  //   href: "#",
  //   icon: CalendarIcon,
  //   count: "20+",
  //   current: false,
  // },
  // { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  // { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="control m-auto md:grid md:grid-cols-3 text-white">
      {/* mobile menu */}
      <div className="mobile-menu p-4 bg-gray-800 md:hidden">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="div flex justify-between items-center">
                {/* Mobile menu button*/}
                <Logo />
                <DisclosureButton className="relative text-white inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8 " aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <DisclosurePanel className="absolute left-0 top-0 h-screen w-[80%] bg-gray-800">
                <div className="h-full py-2">
                  <div className="new-chat h-[70%] p-2">
                    <h3 className="text-center">New chat here</h3>
                  </div>

                  <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block rounded-md px-3 py-2 text-base font-medium text-center"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </div>
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </div>

      {/* desktop menu */}
      <div className="desktop hidden md:block lg">
        <nav className="bg-gray-800 h-full p-3">
          <div className="h-full">
            <div className="h-full py-2">
              <div className="new-chat h-[70%] p-2">
                <h3 className="text-center">New chat here</h3>
              </div>

              <ul className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <li
                    key={item.name}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium text-center"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* children */}
      <div className="children bg-gray-600 col-span-2 p-4 h-screen overflow-auto">
        <div className="bg-green-500">
          <Logo />
        </div>
        {children}
      </div>
    </div>
  );
}
