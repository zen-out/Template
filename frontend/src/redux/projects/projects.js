import { action, thunk, computed } from "easy-peasy";
import { mergeObjects } from "../utils";
import produce from "immer";
import mockService from "./server";
import { INIT_PROJECTS } from "./states";
import _ from "lodash";

export const ProjectsStore = {
  projects: INIT_PROJECTS,
  current: INIT_PROJECTS[3],
  isLoading: false,
  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),
  toast: {
    error: false,

    message: "",
    visible: false,
  },
  setToast: action((state, payload) => {
    state.toast = payload;
  }),
  getUsersProjects: computed(
    [
      (state) => state.projects,
      (state, storeState) => storeState.users.current.id,
    ],
    (items, id) => {
      return _.filter(items, {
        user_id: id,
      });
    }
  ),
  // Subroutines to load from API
  getAllThunk: thunk(async (actions) => {
    actions.setLoading(true);
    try {
      let getAll = await mockService.getAll();
      console.log("projects", getAll);
      actions.setProjects(getAll);
    } catch (error) {
      console.log("error: ", error);
      actions.setToast({
        error: true,
        message: error,
        visible: true,
      });
    }
    actions.setLoading(false);
  }),

  getOneThunk: thunk(async (actions, id) => {
    actions.setLoading(true);
    try {
      const get = await mockService.getOne(id);
      console.log(";got from data", get);
      actions.setCurrent(get);
    } catch (error) {
      console.log("error: ", error);
      actions.setToast({
        error: true,
        message: error,
        visible: true,
      });
    }
    actions.setLoading(false);
  }),
  postThunk: thunk(async (actions, project) => {
    actions.setLoading(true);
    try {
      const res = await mockService.post(project);
      console.log("response", res);
      actions.add(res);
    } catch (error) {
      console.log("error: ", error);
      actions.setToast({
        error: true,
        message: error,
        visible: true,
      });
    }
    actions.setLoading(false);
  }),
  editThunk: thunk(async (actions, editedObject) => {
    actions.setLoading(true);
    try {
      const res = await mockService.edit(editedObject);
      console.log("response", res);
      actions.update(res);
    } catch (error) {
      console.log("error: ", error);
      actions.setToast({
        error: true,
        message: error,
        visible: true,
      });
    }
    actions.setLoading(false);
  }),

  editFlexibleThunk: thunk(
    async (actions, editedObject) => {
      actions.setLoading(true);
      try {
        const getOriginal = await mockService.getOne(
          editedObject.id
        );
        const newObject = mergeObjects(
          editedObject,
          getOriginal
        );
        const res = await mockService.edit(newObject);
        console.log("response", res);
        let twoObjects = {
          original: getOriginal,
          updated: res,
        };
        actions.updateFlexible(twoObjects);
      } catch (error) {
        console.log("error: ", error);
        actions.setToast({
          error: true,
          message: error,
          visible: true,
        });
      }
      actions.setLoading(false);
    }
  ),
  deleteThunk: thunk(async (actions, id) => {
    actions.setLoading(true);
    try {
      const res = await mockService.delete(id);
      actions.remove(res);
    } catch (error) {
      console.log("error: ", error);
      actions.setToast({
        error: true,
        message: error,
        visible: true,
      });
    }
    actions.setLoading(false);
  }),
  toggleStatusThunk: thunk(async (actions, payload) => {
    let projectId = payload.id;
    let status = payload.status;
    console.log("project id", projectId, status);
    actions.setLoading(true);
    try {
      const res = await mockService.toggle(
        projectId,
        status
      );
      actions.setProjects(res);
      //   actions.toggle(res);
    } catch (error) {
      console.log("error: ", error);
      actions.setToast({
        error: true,
        message: error,
        visible: true,
      });
    }
    actions.setLoading(false);
  }),

  setCurrent: action((state, current) => {
    state.current = current;
  }),
  // Actions
  setProjects: action((state, projects) => {
    state.projects = projects;
  }),
  add: action((state, project) => {
    // project.id = getLargestId(state.things) + 1;
    state.projects = [...state.projects, project];
  }),
  update: action((state, newObject) => {
    state.projects = produce(state.projects, (draft) => {
      const index = draft.findIndex(
        (todo) => todo.id === newObject.id
      );
      if (index !== -1) draft[index] = newObject;
    });
  }),
  updateFlexible: action((state, twoObjects) => {
    let original = twoObjects.original;
    let updated = twoObjects.updated;

    const newObject = mergeObjects(updated, original);
    console.log(
      original,
      "original",
      updated,
      "updated",
      "merged",
      newObject
    );
    state.projects = produce(state.projects, (draft) => {
      const index = draft.findIndex(
        (todo) => todo.id === original.id
      );
      if (index !== -1) draft[index] = newObject;
    });
  }),
  toggle: action((state, payload) => {
    state.projects = produce(state.projects, (draft) => {
      const index = draft.findIndex(
        (todo) => todo.id === payload.id
      );
      if (index !== -1) {
        console.log("able to change");
        draft[index].status = payload.status;
      }
    });
  }),
  remove: action((state, id) => {
    console.log("remove button");
    state.projects = state.projects.filter(
      (project) => project.id !== id
    );
  }),
};
