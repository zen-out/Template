import React, { useState, useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

const ToastComponent = () => {
  const toast = useStoreState((state) => state.toast);
  const toggle = useStoreActions(
    (actions) => actions.toggleToast
  );
  const toggleToast = () => {
    let visible = store.visible;
    toggle(!visible);
  };
  return (
    <div>
      <h5>{store.message}</h5>
      <button onClick={toggleToast}>Toggle</button>
    </div>
  );
};

export default ToastComponent;
