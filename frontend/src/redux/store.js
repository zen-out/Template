import { createStore } from "easy-peasy";
import { UsersStore } from "./users/users";
import { EventsStore } from "./events/events";
import { ProjectsStore } from "./projects/projects";
import { BugsStore } from "./bugs/bugs";
import { FeaturesStore } from "./features/features";
import { SettingsStore } from "./settings/settings";
import { Compute } from "./compute/compute";
import { TasksStore } from "./tasks/tasks";
import { trackActionsMiddleware } from "./utils/middleware";
import { createLogger } from "redux-logger";

const logger = createLogger({
  level: "info",
  collapsed: true,
});
const model = {
  settings: SettingsStore,
  events: EventsStore,
  users: UsersStore,
  projects: ProjectsStore,
  bugs: BugsStore,
  features: FeaturesStore,
  tasks: TasksStore,
  //   injections: { mockService: service },
};
let arr = trackActionsMiddleware();
const config = {
  middleware: [arr, logger],
};

// import { Provider } from "react-redux";
export const store = createStore(model, config);

// export const mockStore = (funcs, actions) => {
//   return createStore(
//     EventsStore,
//     {
//       injections: { mockService: funcs },
//     },
//     { middleware: [actions] }
//   );
// };
