import produce from "immer";
import { INIT_TASKS } from "./states";

export default (() => {
  let taskIdx = 2;
  let tasks = INIT_TASKS;
  return {
    getAll: () => Promise.resolve(tasks),
    //   Promise.resolve(tasks.map((x) => ({ ...x }))),
    getOne: (id) => {
      let one = tasks.find((one) => one.id === id);
      return Promise.resolve(one);
    },
    toggle: (id, status) => {
      tasks = produce(tasks, (draft) => {
        const index = draft.findIndex(
          (todo) => todo.id === id
        );
        if (index !== -1) {
          draft[index].status = status;
        }
      });
      return Promise.resolve(tasks);
    },
    post: (newTask) => {
      taskIdx++;
      newTask.id = taskIdx;
      tasks = produce(tasks, (draft) => {
        draft.push(newTask);
      });
      return Promise.resolve(newTask);
    },
    edit: (object) => {
      let newObj;
      tasks = produce(tasks, (draft) => {
        const index = draft.findIndex(
          (todo) => todo.id === object.id
        );
        if (index !== -1) {
          draft[index] = object;
          newObj = draft[index];
        }
      });
      return Promise.resolve(newObj);
    },
    delete: (id) => {
      tasks = produce(tasks, (draft) => {
        const index = draft.findIndex(
          (item) => item.id === id
        );
        if (index !== -1) {
          draft.splice(index, 1);
        }
      });

      return Promise.resolve(id);
    },
  };
})();
