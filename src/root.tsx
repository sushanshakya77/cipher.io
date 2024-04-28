import { createBrowserRouter } from "react-router-dom";
import CaesarCipher from "./components/enc-dec/CaesarCipher";
import App from "./App";
import Monoalphabetic from "./components/enc-dec/Monoalphabetic";
import Home from "./components/main/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "ceaserCipher",
        element: <CaesarCipher />,
      },
      {
        path: "monoalphabetic",
        element: <Monoalphabetic />,
      },
    ],
  },
]);
