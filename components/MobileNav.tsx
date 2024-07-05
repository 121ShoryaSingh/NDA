"use client"
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface MobileNavProps {
  children: React.ReactNode;
}

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

interface UserNavigationItem {
  name: string;
  href: string;
}


const navigation: NavigationItem[] = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Shop', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]
const userNavigation: UserNavigationItem[] = [
  { name: 'Login', href: '#' },
  { name: 'Sign up', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
const MobileNav: React.FC<MobileNavProps> = ({children}) => {
  return (
    //wrapper
    <>
      <div className="min-h-full overflow-x-hidden">
        {/* Navigation Wrapper */}
        <Disclosure as="nav" className="bg-offwhite">
        {({ open }) => (
            <>
              <div className=" w-screen md:w-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  {/* Logo */}
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className='font-extrabold text-2xl'>NDA</div>
                    </div>
                  </div>
                  {/* Nav */}
                  <div className="ml-10 flex items-center justify-between space-x-4">
                    <div className="hidden md:block">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={
                              'text-[#48505B] hover:bg-[#909792] rounded-md px-3 py-2 text-sm font-extrabold'
                          }
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center ">
                      <div className="flex gap-4 w-auto">
                        {userNavigation.map((item) => (
                          <div key={item.name}>
                              <a
                                className='cursor-pointer text-[#48505B] font-extrabold hover:bg-[#909792] rounded-md px-3 py-2 text-base'
                                href={item.href}
                              >
                                {item.name}
                              </a>
                          </div>
                          ))}
                        </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <DisclosureButton className="relative inline-flex items-center justify-center rounded-md text-black p-2  hover:bg-[#d8e2db] hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-offwhite">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </DisclosureButton>
                  </div>
                </div>
              </div>

              <DisclosurePanel className="md:hidden bg-[#d8e2db]">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={'font-extrabold text-black hover:bg-[#606461] hover:text-white block rounded-md px-3 py-2 text-base'}
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
                <div className="border-t border-[#909792] pb-3 pt-4">
                  <div className="space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base text-black hover:bg-gray-700 hover:text-white font-extrabold"
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
        <main>
          <div className="w-screen overflow-x-hidden">{children}</div>
        </main>
      </div>
    </>
  );
};
export default MobileNav;
