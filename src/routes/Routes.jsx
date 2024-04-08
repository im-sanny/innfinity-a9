import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Component/Pages/Home";
import Register from "../Component/Pages/Register";
import Login from "../Component/Pages/Login";

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
      {
        path:'login',
        element:<Login></Login>
      }

    ],
  },
]);

export default router;
