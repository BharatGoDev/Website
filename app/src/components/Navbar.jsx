// Navbar.jsx
import { Disclosure } from "@headlessui/react";
import Auth from "./Auth";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";


const navigation = [
  { name: "Projects", href: "#projects", current: false },
  { name: "Services", href: "#services", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const isUserSignedIn = false;
  return (
    <Disclosure as="nav" className="bg-black sticky top-0 z-50">
    
        <>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex h-16">
  
              <div className="flex flex-1 items-center pl-2 sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <img
                      className="h-8 w-auto"
                      src="./logo.png"
                      alt="BharatGoDev"
                    />
                  </a>
                </div>
                <Menu>
      <Menu.Button>Options</Menu.Button>
      <Menu.Items>
        {navigation.map((link) => (
          /* Use the `active` state to conditionally style the active item. */
          <Menu.Item key={link.href} as={Fragment}>
            {({ active }) => (
              <a
                href={link.href}
                className={`${
                  active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                }`}
              >
                {link.name}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
                <div className="text-align block">
                  <div className="flex sm:space-x-1 md:space-x-4 md:pt-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-2 py-2 text-sm font-medium"
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
                {isUserSignedIn ? (
                  <Auth />
                ) : (
                  <a
                    href="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Log in
                  </a>
                )}
              </div>
            </div>
          </div>
        </>

     

    </Disclosure>
  );
}
