import {
  createStore,
  StoreProvider,
  action,
} from "easy-peasy";
import { ThingsStore } from "./things";

export const store = createStore(ThingsStore);
