import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import FirebaseProvider from "./FirebaseProvider/FirebaseProvider";
import { HelmetProvider } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <FirebaseProvider>
        <RouterProvider router={router} />
      </FirebaseProvider>
    </HelmetProvider>
  </React.StrictMode>
);
