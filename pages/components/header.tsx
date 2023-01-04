// @ts-nocheck

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import avatar from "../../assets/logos/ethereum-eth.svg";
import logo from "../../assets/logos/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const user = {
  name: "Omimi Dev",
  email: "omimi@example.com",
  imageUrl: avatar,
};
const navigation = [
  { name: "Stake", href: "/" },
  { name: "Reward", href: "/reward" },
];

const userNavigation = [
  { name: "Your Profile", href: "/profile" },
  { name: "Settings", href: "/settings" },
  { name: "Sign out", href: "/sign-out" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Header() {
  const location = useRouter().pathname;
  return (
    <header className="bg-transparent shadow">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <Popover className="flex h-24 justify-between items-center">
          <div className="flex px-2 lg:px-0 items-center">
            <div className="inline-block flex-shrink-0 items-center">
              <Link href="/" className="font-black text-5xl">
                <Image src={logo} className="w-40 h-24" alt="logo" />
              </Link>
            </div>
          </div>

          <div className="flex items-center lg:hidden">
            {/* Mobile menu button */}
            <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Transition.Root as={Fragment}>
            <div className="lg:hidden">
              <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-150 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Popover.Overlay
                  className="fixed inset-0 z-20 bg-black bg-opacity-25"
                  aria-hidden="true"
                />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-150 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute top-0 right-0 z-30 w-full max-w-none origin-top transform p-2 transition"
                >
                  <div className="divide-y divide-gray-200 rounded-lg bg-black shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="pt-3 pb-2">
                      <div className="flex items-center justify-between px-4">
                        <div>
                          <div className="flex flex-shrink-0 items-center">
                            <Link href="/" className="font-black text-5xl">
                              <Image
                                src={logo}
                                className="w-20 h-12"
                                alt="logo"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 pb-2">
                      <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                          <Image
                            className="h-10 w-10 rounded-full"
                            src={user.imageUrl}
                            alt="icon"
                          />
                        </div>
                        <div className="ml-3">
                          <div className="text-base font-medium text-white">
                            {user.name}
                          </div>
                          <div className="text-sm font-medium text-gray-500">
                            {user.email}
                          </div>
                        </div>
                        <button
                          type="button"
                          className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="mt-3 space-y-1 px-2">
                        {userNavigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition.Child>
            </div>
          </Transition.Root>
          <nav
            aria-label="Global"
            className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4 glassmorphic rounded-full px-2 py-2"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-8 py-3 text-sm font-medium rounded-full  ${
                  location === item.href
                    ? "text-black bg-white"
                    : "text-white bg-transparent"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:ml-4 lg:flex lg:items-center">
            <button
              type="button"
              className="flex-shrink-0 rounded-full p-3 bg-[#171717] text-gray-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
            >
              <span className="sr-only">notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="flex-shrink-0 ml-4 rounded-full font-medium bg-white px-8 py-4
                 text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              <span className="sr-only">Connect Wallet</span>
              Connect Wallet
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-4 flex-shrink-0">
              <div>
                <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="h-8 w-8 rounded-full"
                    src={user.imageUrl}
                    alt="icon"
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
          </div>
        </Popover>
      </div>
    </header>
  );
}
