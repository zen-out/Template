import { action, thunk, computed } from "easy-peasy";
import { mergeObjects } from "../utils/functions";
import produce from "immer";
import { INIT_BUGS } from "./states";
import mockService from "./server";

export const BugsStore = {
  bugs: INIT_BUGS,
  current: {},
  isLoading: false,
  // Subroutines to load from API
  getAllThunk: thunk(async (actions) => {
    actions.setLoading(true);
    try {
      let getAll = await mockService.getAll();
      console.log("bugs", getAll);
      actions.setBugs(getAll);
    } catch (error) {
      console.log("error: ", error);
      actions.setError(error);
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
      actions.setError(error);
    }
    actions.setLoading(false);
  }),
  postThunk: thunk(async (actions, bug) => {
    actions.setLoading(true);
    try {
      const res = await mockService.post(bug);
      console.log("response", res);
      actions.add(res);
    } catch (error) {
      console.log("error: ", error);
      actions.setError(error);
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
      actions.setError(error);
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
        actions.setError(error);
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
      actions.setError(error);
    }
    actions.setLoading(false);
  }),
  toggleStatusThunk: thunk(async (actions, payload) => {
    let bugId = payload.id;
    let status = payload.status;
    console.log("bug id", bugId, status);
    actions.setLoading(true);
    try {
      const res = await mockService.toggle(bugId, status);
      actions.setBugs(res);
      //   actions.toggle(res);
    } catch (error) {
      console.log("error: ", error);
      actions.setError(error);
    }
    actions.setLoading(false);
  }),

  setCurrent: action((state, current) => {
    state.current = current;
  }),
  // Actions
  setBugs: action((state, bugs) => {
    state.bugs = bugs;
  }),
  add: action((state, bug) => {
    // bug.id = getLargestId(state.things) + 1;
    state.bugs = [...state.bugs, bug];
  }),
  update: action((state, newObject) => {
    state.bugs = produce(state.bugs, (draft) => {
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
    state.bugs = produce(state.bugs, (draft) => {
      const index = draft.findIndex(
        (todo) => todo.id === original.id
      );
      if (index !== -1) draft[index] = newObject;
    });
  }),
  toggle: action((state, payload) => {
    state.bugs = produce(state.bugs, (draft) => {
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
    state.bugs = state.bugs.filter((bug) => bug.id !== id);
  }),
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
  setError: action((state, payload) => {
    state.error = payload;
  }),
};
