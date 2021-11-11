import { action, thunk, computed } from "easy-peasy";
import { mergeObjects } from "../utils";
import produce from "immer";
import { INIT_USERS } from "./states";
import mockService from "./server";
export const UsersStore = {
  users: INIT_USERS,
  current: INIT_USERS[0],
  isAuthenticated: false,
  loginThunk: thunk(async (actions) => {
    actions.setLoading(true);
    try {
      //   let user = await mockService.login();
      actions.setUser(INIT_USERS[0]);
    } catch (error) {
      //   console.log("error: ", error);
      actions.setError(error);
    }
    actions.setLoading(false);
  }),
  signupThunk: thunk(async (actions) => {
    actions.setLoading(true);
    try {
      //   let user = await mockService.login();
      actions.setUser(INIT_USERS[0]);
    } catch (error) {
      //   console.log("error: ", error);
      actions.setError(error);
    }
    actions.setLoading(false);
  }),
  setUser: action((state, payload) => {
    state.current = payload;
  }),
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
  setError: action((state, payload) => {
    state.error = payload;
  }),
};
