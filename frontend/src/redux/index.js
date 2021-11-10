import { createStore } from "easy-peasy";

import { EventsStore } from "./events/events";
import { UsersStore } from "./users/users";

import { trackActionsMiddleware } from "./utils/middleware";

import { createLogger } from "redux-logger";

const logger = createLogger({
  level: "info",
  collapsed: true,
});
const model = {
  events: EventsStore,
  users: UsersStore,
  //   injections: { mockService: service },
};
const config = {
  middleware: [trackActionsMiddleware(), logger],
};

// import { Provider } from "react-redux";
export const store = createStore(model, config);

export const mockStore = (funcs, actions) => {
  return createStore(
    EventsStore,
    {
      injections: { mockService: funcs },
    },
    { middleware: [actions] }
  );
};
