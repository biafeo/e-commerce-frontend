import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Clothing from "./pages/Clothing";
import Eletronics from "./pages/Electronics";
import Jewelery from "./pages/Jewelery";
import App from "./App";

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
        path: "/clothing",
        element: <Clothing />,
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
