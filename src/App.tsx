import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Outlet, useLocation } from "react-router-dom";
import "./App.css";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="w-screen flex flex-col h-screen ">
      <NavigationMenu className="max-w-full bg-gray-600 flex-[0] py-5 px-20">
        <NavigationMenuList>
          <NavigationMenuItem className="text-white">
            <NavigationMenuLink href="/" className="cursor-pointer">
              Cipher Lab
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <div className="grow"></div>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/ceaserCipher"
              active={pathname.includes("ceaserCipher")}
              className={
                navigationMenuTriggerStyle() + " cursor-pointer text-black"
              }
            >
              Caesar Cipher
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/monoalphabetic"
              active={pathname.includes("monoalphabetic")}
              className={
                navigationMenuTriggerStyle() + " cursor-pointer text-black"
              }
            >
              Monoalphabetic Cipher
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="w-full flex justify-center">
        <Outlet />
      </div>
      <div className="grow"></div>
      <footer className="bg-slate-600 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-slate-100 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Cipher Lab
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-slate-100 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
