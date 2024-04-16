import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Component/Pages/Home";
import Register from "../Component/Pages/Register";
import Login from "../Component/Pages/Login";
import ErrorPage from "../Component/Pages/ErrorPage";
import CardDetails from "../Component/Pages/CardDetails";
import UpDateProfile from "../Component/Pages/UpDateProfile";
import UserProfile from "../Component/Pages/UserProfile";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/cardDetails/:id",
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/upDateProfile",
        element: (
          <PrivateRoute>
            <UpDateProfile></UpDateProfile>,
          </PrivateRoute>
        ),
      },
      {
        path: "/userProfile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>,
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
