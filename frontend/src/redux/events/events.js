import { action, thunk } from "easy-peasy";
import produce from "immer";
import { INIT_EVENTS } from "./states";
import mockService from "./server";
import { mergeObjects } from "../utils";
import _ from "lodash";

export const EventsStore = {
  // Store
  events: INIT_EVENTS,
  current: {},
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
  // Subroutines to load from API
  getAllThunk: thunk(async (actions) => {
    actions.setLoading(true);
    try {
      let getAll = await mockService.getAll();
      console.log("events", getAll);
      actions.setEvents(getAll);
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
  postThunk: thunk(async (actions, event) => {
    actions.setLoading(true);
    try {
      const res = await mockService.post(event);
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
    let eventId = payload.id;
    let status = payload.status;
    console.log("event id", eventId, status);
    actions.setLoading(true);
    try {
      const res = await mockService.toggle(eventId, status);
      actions.setEvents(res);
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
  setEvents: action((state, events) => {
    state.events = events;
  }),
  add: action((state, event) => {
    // event.id = getLargestId(state.things) + 1;
    state.events = [...state.events, event];
  }),
  update: action((state, newObject) => {
    state.events = produce(state.events, (draft) => {
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
    state.events = produce(state.events, (draft) => {
      const index = draft.findIndex(
        (todo) => todo.id === original.id
      );
      if (index !== -1) draft[index] = newObject;
    });
  }),
  toggle: action((state, payload) => {
    state.events = produce(state.events, (draft) => {
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
    state.events = state.events.filter(
      (event) => event.id !== id
    );
  }),

  // not good because it essentially deletes everything
  //   filter: action((state, searchValue) => {
  //     let lowerCased = searchValue.toLowerCase();
  //     const updatedTodosArray = produce(
  //       state.events,
  //       (draft) => {
  //         return draft.filter(
  //           (item) =>
  //             item.title.toLowerCase().includes(lowerCased)
  //           //   lowerCased.includes(item.title.toLowerCase())
  //         );
  //       }
  //     );
  //     state.events = updatedTodosArray;
  //   }),
};
