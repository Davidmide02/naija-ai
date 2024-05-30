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
//   import {Transition} from '@heroicons/react/20/solid'

const navigation = [
  { name: "Sign In", href: "#", icon: HomeIcon, count: "5", current: true },
  { name: "Log out", href: "#", icon: UsersIcon, current: false },
  { name: "Setting", href: "#", icon: FolderIcon, count: "12", current: false },
  {
    name: "Calendar",
    href: "#",
    icon: CalendarIcon,
    count: "20+",
    current: false,
  },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600">
    //   <div className="mobile md:hidden flex justify-between items-center p-2">
    //     <div className="logo flex h-16 shrink-0 items-center">
    //       <h1 className="h-8 w-auto">Naija AI </h1>
    //     </div>
    //     <div className="h-6 w-6 shrink-0">
    //       <HomeIcon />
    //     </div>
    //   </div>
    //   {/*mobile end  */}
    //   <div className="control bg-green-800 md:grid md:grid-cols-4">
    //     <nav className="hidden md:flex flex-1 flex-col p-4 bg-yellow-400">
    //       <div className=" logo flex h-16 shrink-0 items-center">
    //         <h1 className="h-8 w-auto">Naija AI </h1>
    //       </div>
    //       <ul role="list" className="flex flex-1 flex-col gap-y-7">
    //         <li>
    //           <ul role="list" className="-mx-2 space-y-1">
    //             {navigation.map((item) => (
    //               <li key={item.name}>
    //                 <a
    //                   href={item.href}
    //                   className={classNames(
    //                     item.current
    //                       ? "bg-indigo-700 text-white"
    //                       : "text-indigo-200 hover:text-white hover:bg-indigo-700",
    //                     "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
    //                   )}
    //                 >
    //                   <item.icon
    //                     className={classNames(
    //                       item.current
    //                         ? "text-white"
    //                         : "text-indigo-200 group-hover:text-white",
    //                       "h-6 w-6 shrink-0"
    //                     )}
    //                     aria-hidden="true"
    //                   />
    //                   {item.name}
    //                   {item.count ? (
    //                     <span
    //                       className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-indigo-600 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-indigo-500"
    //                       aria-hidden="true"
    //                     >
    //                       {item.count}
    //                     </span>
    //                   ) : null}
    //                 </a>
    //               </li>
    //             ))}
    //           </ul>
    //         </li>
    //         <li>
    //           <div className="text-xs font-semibold leading-6 text-indigo-200">
    //             Your teams
    //           </div>
    //           <ul role="list" className="-mx-2 mt-2 space-y-1">
    //             {teams.map((team) => (
    //               <li key={team.name}>
    //                 <a
    //                   href={team.href}
    //                   className={classNames(
    //                     team.current
    //                       ? "bg-indigo-700 text-white"
    //                       : "text-indigo-200 hover:text-white hover:bg-indigo-700",
    //                     "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
    //                   )}
    //                 >
    //                   <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
    //                     {team.initial}
    //                   </span>
    //                   <span className="truncate">{team.name}</span>
    //                 </a>
    //               </li>
    //             ))}
    //           </ul>
    //         </li>
    //         <li className="-mx-6 mt-auto">
    //           <a
    //             href="#"
    //             className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-700"
    //           >
    //             {/* <Image src={{"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}} alt={'img'} width={40} height={20}/> */}
    //             <span className="sr-only">Your profile</span>
    //             <span aria-hidden="true">Tom Cook</span>
    //           </a>
    //         </li>
    //       </ul>
    //     </nav>
    //     <Disclosure as="nav" className="bg-gray-800">
    //       {({ open }) => (
    //         <>
    //           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //             {/* Mobile menu button*/}
    //             <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
    //               <span className="absolute -inset-0.5" />
    //               <span className="sr-only">Open main menu</span>
    //               {open ? (
    //                 <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
    //               ) : (
    //                 <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
    //               )}
    //             </DisclosureButton>
    //           </div>
    //         </>
    //       )}
    //     </Disclosure>

    //     <div className="content col-span-3">{children}</div>
    //   </div>
    // </div>
    <div className="control grid grid-cols-3">

    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between bg-yellow-500">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden bg-green-600">
                {/* Mobile menu button*/}
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

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start bg-red-300">
                <div className="flex flex-shrink-0 items-center">
                  {/* <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  /> */}
                  Your company
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
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
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      {/* <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      /> */}
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
                </Menu>
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
    </Disclosure>
    <div className="children bg-red-600 col-span-2">
        {children}
    </div>
    </div>

  );
}
