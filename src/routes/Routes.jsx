import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Component/Pages/Home";
import Register from "../Component/Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/register',
        element: <Register></Register>,
      },

    ],
  },
]);

export default router;
