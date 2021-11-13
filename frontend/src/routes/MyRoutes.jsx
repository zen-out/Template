import { useRoutes, Outlet } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "../pages";
// import { PlaygroundRoutes } from "../components";
import PrivateRoute from "./PrivateRoute";
import { ThemeProvider } from "@mui/styles";
import React, { useState, useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import {
  DrawerComponent,
  ToastComponent,
} from "../components";
import Playground from "../components/Playground";

export default function MyRoutes() {
  const authState = useStoreState(
    (state) => state.users.isAuthenticated
  );
  return (
    <div>
      <DrawerComponent />
      <div className="container">
        <ToastComponent />
        <Playground />
        <Outlet />
      </div>
    </div>
  );
}
