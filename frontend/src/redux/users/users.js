import { action, thunk, computed } from "easy-peasy";
import { mergeObjects } from "../utils";
import produce from "immer";
import { INIT_USERS } from "./states";
import mockService from "./server";

export const UsersStore = {
  users: INIT_USERS,
  current: INIT_USERS[3],
  isAuthenticated: false,
  toast: {
    error: false,
    loading: false,
    message: "",
    visible: false,
  },
  setToast: action((state, payload) => {
    state.toast = payload;
  }),
  checkAuth: thunk(async (actions, payload) => {
    // called on every page
  }),
  signupFacebookThunk: thunk(
    async (actions, payload) => {}
  ),
  signupGmailFacebookThunk: thunk(
    async (actions, payload) => {
      // should get response
      // set user
    }
  ),

  signupThunk: thunk(async (actions, payload) => {
    actions.setLoading(true);
    try {
      //   let user = await mockService.login();
      //   actions.setUser(INIT_USERS[0]);
      // go to home page
    } catch (error) {
      //   console.log("error: ", error);
      actions.setMessage(error);
    }
    actions.setLoading(false);
  }),
  loginThunk: thunk(async (actions) => {
    actions.setLoading(true);
    try {
      //   let user = await mockService.login();
      actions.setUser(INIT_USERS[0]);
    } catch (error) {
      //   console.log("error: ", error);
      actions.setMessage(error);
    }
    actions.setLoading(false);
  }),
  loginFacebookThunk: thunk(async (actions) => {
    // call setUser
  }),
  loginGmailThunk: thunk(async (actions) => {
    // call setUser
  }),
  logoutThunk: thunk(async (actions) => {
    // call setUser
  }),
  setUser: action((state, payload) => {
    // set local storage here
    let userInfo = {
      isAuthenticated: payload.isAuthenticated,
      token: payload.token,
    };
    state.current = payload;
  }),
};
