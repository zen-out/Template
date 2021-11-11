import React, { useState, useEffect } from "react";
import "./App.css";
import { useStoreActions, useStoreState } from "easy-peasy";
import Redux from "./pages/reduxExample/FirstDraftRedux";
import MarkdownMain from "./pages/MarkdownMain";
import SecondRedux from "./pages/reduxExample/SecondDraftRedux";
import { StoreProvider } from "easy-peasy";
import { store } from "./redux";
import Compute from "./pages/reduxExample/Compute";

function App() {
  return (
    <div className="App">
      <StoreProvider store={store}>
        <SecondRedux />
        <Compute />
        <MarkdownMain />
      </StoreProvider>
    </div>
  );
}

export default App;
