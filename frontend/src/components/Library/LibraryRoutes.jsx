import React from "react";
import { Route } from "react-router-dom";

function PageLayout(props) {
  return <div>{props.children}</div>;
}
export default function LibraryRoutes() {
    return <Route element={ <PageLayout /> }>
      
  </Route>;
}
