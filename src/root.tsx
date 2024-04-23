import { createBrowserRouter } from "react-router-dom";
import CaesarCipher from "./components/enc-dec/CaesarCipher";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "ceaserCipher",
    element: <CaesarCipher />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
