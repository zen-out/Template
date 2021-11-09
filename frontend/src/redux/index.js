import {
  createStore,
  StoreProvider,
  action,
} from "easy-peasy";
import { ThingsStore } from "./actions/things";

import { EventsStore } from "./events/events";
import { UsersStore } from "./users/users";
import { TemplateStore } from "./template/template";
import { TasksStore } from "./tasks/tasks";
import { ProjectsStore } from "./projects/projects";
export const store = createStore({
  things: ThingsStore,
  users: UsersStore,
  events: EventsStore,
  //   template: TemplateStore,
  //   tasks: TasksStore,
  //   projects: ProjectsStore,
});
