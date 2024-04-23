import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Quiz from "./view/Quiz";
import { CipherType } from "./constants/type";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              active={pathname.includes("ceaserCipher")}
              className={navigationMenuTriggerStyle()}
            >
              Caesar Cipher
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Monoalphabetic Cipher
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Outlet />
      <Quiz type={CipherType.Caeser} />
    </>
  );
}

export default App;
