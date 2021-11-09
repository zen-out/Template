import produce from "immer";
import {
  action,
  thunk,
  computed,
  effect,
} from "easy-peasy";
import {
  removeItemAtIndex,
  removeItemAtId,
  replaceItemAtId,
  getLargestId,
} from "../config/utils";

export const ThingsStore = {
  // initial state
  things: [{ id: 1, text: "hello", done: false }],
  loading: false,
  error: "",
  setThings: action((state, payload) => {
    state.things = payload;
  }),
  getAllThings: action((state, payload) => {
    state.things = state.things;
    // technically state.things = payload.things
  }),
  getAllThunk: thunk(async (actions, payload) => {
    actions.setLoading(true);
    try {
      //   const response = await API.get(
      //     "SharedGW",
      //     "/todos",
      //     {}
      //   );
      actions.setThings(payload);
    } catch (e) {
      console.log("error: ", e);
      actions.setError(e);
    }
    actions.setLoading(false);
  }),
  // get one
  getThing: computed((state) => (id) => {
    const thing = state.things.find(
      (items) => items.id === id
    );
    return thing
      ? thing
      : { id: "", text: "", done: false };
  }),
  getOneThingThunk: thunk(async (actions, payload) => {
    // const response = await API.get(
    //   "SharedGW",
    //   `/todos/${payload}`,
    //   {}
    // );
    actions.getOne(payload);
  }),

  postThing: action((state, payload) => {
    let getLatestId = getLargestId(state.things) + 1;
    console.log(payload);
    payload.id = getLatestId;
    console.log("updated with id", payload);
    state.things.push(payload);
  }),

  postOneThingThunk: thunk(async (actions, payload) => {
    // const response = await API.post("SharedGW", "/todos", {
    //   body: payload,
    // });
    actions.addTodo(payload);
  }),
  editThing: action((state, payload) => {
    const idx = state.things.findIndex(
      (item) => item.id === payload.id
    );
    state.things[idx] = {
      ...state.things[idx],
      ...payload,
    };
  }),
  editThingThunk: thunk(async (actions, payload) => {
    try {
      actions.setLoading(true);
      //   const response = await API.put(
      //     "SharedGW",
      //     `/todos/${payload.id}`,
      //     {
      //       body: payload,
      //     }
      //   );

      actions.editThing(payload);
    } catch (e) {
      console.log("error", e);
      actions.setError(e);
    }
    actions.setLoading(false);
  }),
  deleteThing: action((state, payload) => {
    console.log("payload", payload.id);
    console.log("original", state.things);

    // Delete the todo
  }),
  deleteThingThunk: thunk(async (actions, payload) => {
    actions.setLoading(true);
    // await API.del("SharedGW", `/todos/${payload}`, {
    //   pathParameters: {
    //     id: payload,
    //   },
    // });
    actions.setLoading(false);
    actions.deleteTodo(payload);
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
  setError: action((state, payload) => {
    state.error = payload;
  }),
};
