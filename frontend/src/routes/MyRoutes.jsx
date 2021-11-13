import {
  useRoutes,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "../pages";
import { PlaygroundRoutes } from "../components";
import PrivateRoute from "./PrivateRoute";
import { ThemeProvider } from "@mui/styles";
import React, { useState, useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { DrawerComponent } from "../components";

export default function MyRoutes() {
  const authState = useStoreState(
    (state) => state.users.isAuthenticated
  );
  return (
    <div>
      <DrawerComponent />
      Today: 1. Timer. 2. Toast 3. Bug App To Do List:
      finish routing,
      <br />
      How do we make it easy to play with components?
      <br />
      List of all components, just render on the side
      <br />
      Info tag, making it clear what props go in
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
