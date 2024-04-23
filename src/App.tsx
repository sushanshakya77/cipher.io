import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <a href="/docs">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
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
    </>
  );
}

export default App;
