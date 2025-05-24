import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useAuth();
  if (loader) {
    return (
      <div className="flex justify-center items-center my-12">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} />;
};

export default PrivateRoute;
