import { createBrowserRouter } from "react-router-dom";
import CaesarCipher from "./components/enc-dec/CaesarCipher";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "ceaserCipher",
        element: <CaesarCipher />,
      },
    ],
  },
]);
