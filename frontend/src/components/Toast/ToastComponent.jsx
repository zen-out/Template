import React, { useState, useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastComponent = () => {
  const userToast = useStoreState(
    (state) => state.users.toast
  );
  const bugToast = useStoreState(
    (state) => state.bugs.toast
  );

  const taskToast = useStoreState(
    (state) => state.tasks.toast
  );

  const projectToast = useStoreState(
    (state) => state.projects.toast
  );

  const featureToast = useStoreState(
    (state) => state.features.toast
  );

  const eventToast = useStoreState(
    (state) => state.events.toast
  );
  const settingToast = useStoreState(
    (state) => state.settings.toast
  );

  const userAction = useStoreActions(
    (state) => state.users.setToast
  );
  const bugAction = useStoreActions(
    (state) => state.bugs.setToast
  );

  const taskAction = useStoreActions(
    (state) => state.tasks.setToast
  );

  const projectAction = useStoreActions(
    (state) => state.projects.setToast
  );

  const featureAction = useStoreActions(
    (state) => state.features.setToast
  );

  const eventAction = useStoreActions(
    (state) => state.events.setToast
  );
  const settingAction = useStoreActions(
    (state) => state.settings.setToast
  );

  const resetToast = {
    message: "",
    visible: false,
    error: false,
  };
  useEffect(() => {
    if (
      bugToast.error === true &&
      bugToast.visible === true
    ) {
      toast.error(bugToast.message);
      bugAction(resetToast);
    }
  }, [bugToast.error]);

  useEffect(() => {
    if (
      eventToast.error === true &&
      eventToast.visible === true
    ) {
      toast.error(eventToast.message);
      eventAction(resetToast);
    }
  }, [eventToast.error]);

  useEffect(() => {
    if (
      taskToast.error === true &&
      taskToast.visible === true
    ) {
      toast.error(taskToast.message);
      taskAction(resetToast);
    }
  }, [taskToast.error]);

  useEffect(() => {
    if (
      userToast.error === true &&
      userToast.visible === true
    ) {
      toast.error(userToast.message);
      userAction(resetToast);
    }
  }, [userToast.error]);

  useEffect(() => {
    if (
      projectToast.error === true &&
      projectToast.visible === true
    ) {
      toast.error(projectToast.message);
      projectAction(resetToast);
    }
  }, [projectToast.error]);

  useEffect(() => {
    if (
      settingToast.error === true &&
      settingToast.visible === true
    ) {
      toast.error(settingToast.message);
      settingAction(resetToast);
    }
  }, [settingToast.error]);

  useEffect(() => {
    if (
      featureToast.error === true &&
      featureToast.visible === true
    ) {
      toast.error(featureToast.message);
      featureAction(resetToast);
    }
  }, [featureToast.error]);
  return (
    <div>
      <ToastContainer
        position={toast.POSITION.BOTTOM_LEFT}
      />
    </div>
  );
};

export default ToastComponent;
