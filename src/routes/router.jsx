import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../layouts/Home";
import Details from "../layouts/Details";
import Register from "../layouts/Register";
import Login from "../layouts/Login";
import ErrorPage from "../layouts/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Wishlist from "../layouts/Wishlist";
import Profile from "../layouts/Profile";

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
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://petnest-np9s.onrender.com/api/pets/${params.id}`),
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
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
