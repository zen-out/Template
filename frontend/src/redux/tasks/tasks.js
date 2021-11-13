import { action, thunk, computed } from "easy-peasy";
import { mergeObjects } from "../utils";
import produce from "immer";
import mockService from "./server";
import { INIT_TASKS } from "./states";
import _ from "lodash";

const getUsersData = (userId, arr) => {
  return _.filter(arr, {
    user_id: userId,
  });
};
export const TasksStore = {
  tasks: INIT_TASKS,
  current: INIT_TASKS[3],
  toast: {
    error: false,
    loading: false,
    message: "",
    visible: false,
  },
  setToast: action((state, payload) => {
    state.toast = payload;
  }),
  getUsersTasks: computed(
    [
      (state) => state.tasks,
      (state, storeState) => storeState.users.current.id,
    ],
    (items, id) => {
      return _.filter(items, {
        user_id: id,
      });
    }
  ),
  getProjectsTasks: computed(
    [
      (state) => state.tasks,
      (state, storeState) => storeState.features.features,
      (state, storeState) => storeState.projects.current.id,
    ],
    (tasks, features, projectId) => {
      //   console.log(tasks, tasks, projectId);
      let featuresArr = _.filter(features, {
        project_id: projectId,
      });
      //   console.log("tasks with this feature", taskArr);
      let ids = _.map(featuresArr, "id");
      //   console.log("all ids", ids);
      let final = tasks.map(function (item) {
        let feature_id = item.feature_id;
        return ids.includes(feature_id) ? item : [];
      });
      final = _.flattenDeep(final);
      return final;
    }
  ),
  getFeaturesTasks: computed(
    [
      (state) => state.tasks,
      (state, storeState) => storeState.features.current.id,
    ],
    (items, id) => {
      return _.filter(items, {
        feature_id: id,
      });
    }
  ),
  // Subroutines to load from API
  getAllThunk: thunk(async (actions) => {
    actions.setLoading(true);
    try {
      let getAll = await mockService.getAll();
      console.log("tasks", getAll);
      actions.setTasks(getAll);
    } catch (error) {
      console.log("error: ", error);
      actions.setMessage(error);
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
      actions.setMessage(error);
    }
    actions.setLoading(false);
  }),
  postThunk: thunk(async (actions, task) => {
    actions.setLoading(true);
    try {
      const res = await mockService.post(task);
      console.log("response", res);
      actions.add(res);
    } catch (error) {
      console.log("error: ", error);
      actions.setMessage(error);
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
      actions.setMessage(error);
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
        actions.setMessage(error);
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
      actions.setMessage(error);
    }
    actions.setLoading(false);
  }),
  toggleStatusThunk: thunk(async (actions, payload) => {
    let taskId = payload.id;
    let status = payload.status;
    console.log("task id", taskId, status);
    actions.setLoading(true);
    try {
      const res = await mockService.toggle(taskId, status);
      actions.setTasks(res);
      //   actions.toggle(res);
    } catch (error) {
      console.log("error: ", error);
      actions.setMessage(error);
    }
    actions.setLoading(false);
  }),

  setCurrent: action((state, current) => {
    state.current = current;
  }),
  // Actions
  setTasks: action((state, tasks) => {
    state.tasks = tasks;
  }),
  add: action((state, task) => {
    // task.id = getLargestId(state.things) + 1;
    state.tasks = [...state.tasks, task];
  }),
  update: action((state, newObject) => {
    state.tasks = produce(state.tasks, (draft) => {
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
    state.tasks = produce(state.tasks, (draft) => {
      const index = draft.findIndex(
        (todo) => todo.id === original.id
      );
      if (index !== -1) draft[index] = newObject;
    });
  }),
  toggle: action((state, payload) => {
    state.tasks = produce(state.tasks, (draft) => {
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
    state.tasks = state.tasks.filter(
      (task) => task.id !== id
    );
  }),
};
