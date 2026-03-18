import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Components/Root/Root.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import AppDetails from "./Components/AppDetails/AppDetails.jsx";
import InstalledAppContainer from "./Components/InstalledApp/InstalledAppContainer.jsx";
import AllApps from "./Components/AllApps/AllApps.jsx";
import Error404 from "./Components/Error404.jsx/Error404.jsx";
import ErrorApp from "./Components/ErrorApp/ErrorApp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error404></Error404>,
    children: [
      {
        index: true,
        Component: Hero,
      },
      {
        path: "app/:id",
        loader: () => fetch("/appData.json"),
        element: <AppDetails></AppDetails>,
        errorElement: <ErrorApp></ErrorApp>,
      },
      {
        path: "allApps",
        loader: () => fetch("/appData.json"),
        element: <AllApps></AllApps>,
      },
      {
        path: "allApps/app/:id",
        element: <AppDetails></AppDetails>,
      },
      {
        path: "installedApps",
        loader: () => fetch("/appData.json"),
        element: <InstalledAppContainer></InstalledAppContainer>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
