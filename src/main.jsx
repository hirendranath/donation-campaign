import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import DonationPage from "./pages/DonationPage.jsx";
import StatisticsPage from "./pages/StatisticsPage.jsx";
import Details from "./pages/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/donations",
        element: <DonationPage />,
        loader: () => fetch("../../donation.json"),
      },
      {
        path: "/statistics",
        element: <StatisticsPage />,
      },
      {
        path: "/donation/details/:id",
        element: <Details />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <RouterProvider router={router} />
  </React.Fragment>
);
