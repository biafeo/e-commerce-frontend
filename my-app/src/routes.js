import Cart from "./pages/Cart";
import Home from "./pages/Home";
import MenClothing from "./pages/MenClothing";
import Eletronics from "./pages/Electronics";
import Jewelery from "./pages/Jewelery";
import App from "./App";
import WomenClothing from "./pages/WomenClothing";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menclothing",
        element: <MenClothing />,
      },
      {
        path: "/womenclothing",
        element: <WomenClothing />,
      },
      {
        path: "/electronics",
        element: <Eletronics />,
      },
      {
        path: "/jewelery",
        element: <Jewelery />,
      },
    ],
  },
];
export default routes;
