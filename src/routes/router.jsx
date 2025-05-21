import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../layouts/Home";
import Details from "../layouts/Details";
import Register from "../layouts/Register";
import Login from "../layouts/Login";
import ErrorPage from "../layouts/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/peddy/pet/${params.id}`
          ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
