import React, { useState, useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastComponent = ({ message }) => {
  const toast = useStoreState((state) => state.toast);

  const toggleToast = () => {
    let visible = store.visible;
    toggle(!visible);
  };
  return (
    <ToastContainer
      position={toast.POSITION.BOTTOM_LEFT}
    ></ToastContainer>
  );
};

export default ToastComponent;
