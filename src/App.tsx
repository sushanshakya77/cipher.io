import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <nav>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <a href="/ceaserCipher">
                <NavigationMenuLink
                  active={pathname.includes("ceaserCipher")}
                  className={navigationMenuTriggerStyle()}
                >
                  Caesar Cipher
                </NavigationMenuLink>
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/docs">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Monoalphabetic Cipher
                </NavigationMenuLink>
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
