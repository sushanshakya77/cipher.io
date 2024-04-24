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
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/ceaserCipher"
              active={pathname.includes("ceaserCipher")}
              className={navigationMenuTriggerStyle() + " cursor-pointer"}
            >
              Caesar Cipher
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/monoalphabetic"
              active={pathname.includes("monoalphabetic")}
              className={navigationMenuTriggerStyle() + " cursor-pointer"}
            >
              Monoalphabetic Cipher
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Outlet />
    </>
  );
}

export default App;
