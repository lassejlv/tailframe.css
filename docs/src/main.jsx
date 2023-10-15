import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DocPage from "./docs/DocPage.jsx";
import DocIndex from "./docs/index.jsx";
import SearchPage from "./docs/SearchPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/docs",
    element: <DocIndex />,
    errorElement: <div>404</div>,
  },

  {
    path: "/docs/:id",
    element: <DocPage />,
    errorElement: <div>404</div>,
  },

  {
    path: "/docs/search",
    element: <SearchPage />,
    errorElement: <div>404</div>,
  },

  {
    path: "*",
    element: <div>404</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("webview")).render(
  <React.StrictMode>
    <Navbar />

    <RouterProvider router={router} />
  </React.StrictMode>
);
