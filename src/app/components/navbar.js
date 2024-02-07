import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRequireAuth } from "../utils/requireLoggedIn";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";

const navigation = [
  { name: "Wanderers", href: "/wanderers" },
  { name: "Moments Gallery", href: "/gallery" },
  { name: "Explore", href: "#" },
];

export default function VelTechNavbar() {
  const user = useRequireAuth(true);
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignout = async () => { 
     const auth = getAuth();
  try {
    await signOut(auth);
    // After signing out, redirect to the home page
    router.push('/');
  } catch (error) {
    console.error('Error signing out', error);
  }
}

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-beige">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">EverydayVisa</span>
            <img className="h-8 w-auto" src="/images/logo.svg" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {user ? (
            <button
              onClick={handleSignout}
              className="text-sm font-semibold leading-6 text-gray-900 border border-blue-500 hover:border-blue-700 py-2 px-4 rounded-lg"
            >
              Sign Out
            </button>
          ) : (
            <Link
              href="/auth"
              className="text-sm font-semibold leading-6 text-gray-900 border border-blue-500 hover:border-blue-700 py-2 px-4 rounded-lg"
            >
              Get Started
            </Link>
          )}
          
        </div>{" "}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">EverydayVisa</span>
              <img className="h-8 w-auto" src="/images/logo.svg" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {user ? (
                <div>
                  <button
                   onClick={handleSignout}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Sign Out
                  </button>
              </div>
              ): (
                
                <div className="py-6">
                  <a
                    href="/auth?authType=signin"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Get Started
                  </a>
                </div>
              )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
