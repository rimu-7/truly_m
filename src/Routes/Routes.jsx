import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";


import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, // Main layout
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />, // Home Page
      }
    ],
  },
]);