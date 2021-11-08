import {
  createStore,
  StoreProvider,
  action,
} from "easy-peasy";
import { ThingsStore } from "./actions/things";
import { UsersStore } from "./actions/users";
export const store = createStore({
  things: ThingsStore,
  users: UsersStore,
});

