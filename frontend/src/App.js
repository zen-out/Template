import React, { useState, useEffect } from "react";
import "./App.css";
import { useStoreActions, useStoreState } from "easy-peasy";
import { StoreProvider } from "easy-peasy";
import { store } from "./redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { ThemeProvider } from "@material-ui/styles";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { MyRoutes } from "./routes";
import {
  Playground,
  BugsPage,
  EachBugPage,
  MarkdownPage,
  SecondRedux,
  SettingsPage,
  HomePage,
  DashboardPage,
  LoginPage,
  SignupPage,
  ErrorPage,
} from "./pages";
import {
  CardComponent,
  TableComponent,
  ToastComponent,
  DrawerComponent,
} from "./components";
function ActualApp() {
  // add error to every redux
  return (
    <div>
      <MyRoutes />
    </div>
  );
}
function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <StoreProvider store={store}>
        {/* Same as */}
        {/* <ToastContainer /> */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ActualApp />}>
              <Route
                path="playground"
                element={<Playground />}
              />
              <Route
                path="card"
                element={<CardComponent />}
              />
              <Route
                path="table"
                element={<TableComponent />}
              />
              <Route
                path="redux"
                element={<SecondRedux />}
              />
              <Route path="home" element={<HomePage />} />
              <Route
                path="dashboard"
                element={<DashboardPage />}
              />
              <Route
                path="settings"
                element={<SettingsPage />}
              />
              <Route
                path="signup"
                element={<SignupPage />}
              />
              <Route path="login" element={<LoginPage />} />
              <Route path="bugs" element={<BugsPage />}>
                <Route
                  path=":bugId"
                  element={<EachBugPage />}
                />{" "}
              </Route>
            </Route>
            <Route path="*" element={ErrorPage} />
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </div>
  );
}

export default App;
