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
      <div className="desktop hidden md:block bg-green-400">
        <nav className="bg-gray-800">
          <div className="h-screen bg-gray-800">
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
      <div className="children bg-gray-600 col-span-2 p-4">{children}</div>
    </div>
  );
}

{
  /* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"> */
}
{
  /* Profile dropdown */
}
{
  /* <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        User
                      </MenuButton>
                    </div>
                    <Transition
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <MenuItem>
                          {({ focus }) => (
                            <a
                              href="#"
                              className={classNames(
                                focus ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ focus }) => (
                            <a
                              href="#"
                              className={classNames(
                                focus ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ focus }) => (
                            <a
                              href="#"
                              className={classNames(
                                focus ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </MenuItem>
                      </MenuItems>
                    </Transition>
                  </Menu> */
}
{
  /* </div> */
}

{
  /* <Disclosure as="nav" className="bg-gray-800 flex flex-col h-screen">
  {({ open }) => (
    <>
      <div className="my-auto max-h-7xl px-2 sm:py-6 lg:py-8">
        <div className="relative flex items-center justify-between bg-yellow-500">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden bg-green-600">
           
            <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </DisclosureButton>
          </div>

          <div className="flex flex-col flex-1 items-center justify-center sm:items-stretch sm:justify-start bg-red-300">
            <div className="flex flex-shrink-0 items-center">Logo</div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex flex-col space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
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
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </>
  )}
</Disclosure>; */
}
