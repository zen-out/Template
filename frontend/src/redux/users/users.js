import { action, thunk, computed } from "easy-peasy";
import { removeItemAtIndex } from "../config/utils";

export const UsersStore = {
  // initial state
  users: [{ id: 1, name: "name", done: false }],
  isAuthenticated: false,
  isLoading: false,
  setUsers: action((state, payload) => {
    state.users = payload;
  }),
  getAllUsers: action((state, payload) => {
    state.users = state.users;
    // technically state.users = payload.Users
  }),
  getAllThunk: thunk(async (actions, payload) => {
    actions.setLoading(true);
    try {
      //   const response = await API.get(
      //     "SharedGW",
      //     "/todos",
      //     {}
      //   );
      actions.setUsers(payload);
    } catch (e) {
      console.log("error: ", e);
      actions.setError(e);
    }
    actions.setLoading(false);
  }),
  // get one
  getUser: computed((state) => (id) => {
    const user = state.users.find(
      (items) => items.id === id
    );
    return user ? user : { id: "", text: "", done: false };
  }),
  getOneUserThunk: thunk(async (actions, payload) => {
    // const response = await API.get(
    //   "SharedGW",
    //   `/todos/${payload}`,
    //   {}
    // );
    actions.getOne(payload);
  }),

  postUser: action((state, payload) => {
    state.users.push(payload);
  }),

  postOneUserThunk: thunk(async (actions, payload) => {
    // const response = await API.post("SharedGW", "/todos", {
    //   body: payload,
    // });
    actions.addTodo(payload);
  }),
  editUser: action((state, payload) => {
    const idx = state.users.findIndex(
      (item) => item.id === payload.id
    );
    state.users[idx] = {
      ...state.users[idx],
      ...payload,
    };
  }),
  editUserThunk: thunk(async (actions, payload) => {
    try {
      actions.setLoading(true);
      //   const response = await API.put(
      //     "SharedGW",
      //     `/todos/${payload.id}`,
      //     {
      //       body: payload,
      //     }
      //   );

      actions.editUser(payload);
    } catch (e) {
      console.log("error", e);
      actions.setError(e);
    }
    actions.setLoading(false);
  }),
  deleteUser: action((state, payload) => {
    state.todos = removeItemAtIndex(
      state.todos,
      state.todos.findIndex((item) => item.id === payload)
    );
    // Delete the todo
  }),
  deleteUserThunk: thunk(async (actions, payload) => {
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
