import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  //   isAuthenticated,
}) => {
  //   if (!isAuthenticated) {
  //     return <Navigate to={"/login"} />;
  //   }
  return Component;
};

export default PrivateRoute;
