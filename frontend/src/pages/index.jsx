import MarkdownPage from "./MarkdownPage/MarkdownPage";
import SecondRedux from "./ReduxPage/SecondDraftRedux";
import Playground from "./PlaygroundPage/Playground";
import HomePage from "./HomePage/HomePage";
import DashboardPage from "./DashboardPage/DashboardPage";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage";
import ErrorPage from "./ErrorPage/ErrorPage";
import SettingsPage from "./SettingsPage/SettingsPage";
import BugsPage from "./BugsPage/BugsPage";
import EachBugPage from "./EachBugPage/EachBugPage";
import PrivateRoute from "../routes/PrivateRoute";
// import _ from "lodash";

// console.log(getPaths(publicPaths))

export const PublicRoutes = () => [
  { path: "404", name: "Error", element: <ErrorPage /> },

  {
    path: "markdown",
    name: "Markdown",
    element: <MarkdownPage />,
  },
  {
    path: "redux",
    name: "Redux",
    element: <SecondRedux />,
  },

  { path: "login", name: "Login", element: <LoginPage /> },
];
export const PrivateRoutes = (isAuthenticated) => [
  {
    path: "dashboard",
    element: (
      <PrivateRoute
        component={<DashboardPage />}
        isAuthenticated={isAuthenticated}
      />
    ),
    children: [
      { path: "settings", element: <SettingsPage /> },
      {
        path: "bugs",
        elements: <BugsPage />,
        children: [
          { path: ":bugId", element: <EachBugPage /> },
        ],
      },
    ],
  },
];

export {
  BugsPage,
  EachBugPage,
  MarkdownPage,
  SecondRedux,
  Playground,
  SettingsPage,
  HomePage,
  DashboardPage,
  LoginPage,
  SignupPage,
  ErrorPage,
};
