import produce from "immer";
import { INIT_SETTINGS } from "./states";

export default (() => {
  let settingIdx = 2;
  let settings = INIT_SETTINGS;
  return {
    getAll: () => Promise.resolve(settings),
    //   Promise.resolve(settings.map((x) => ({ ...x }))),
    getOne: (id) => {
      let one = settings.find((one) => one.id === id);
      return Promise.resolve(one);
    },
    toggle: (id, status) => {
      settings = produce(settings, (draft) => {
        const index = draft.findIndex(
          (todo) => todo.id === id
        );
        if (index !== -1) {
          draft[index].status = status;
        }
      });
      return Promise.resolve(settings);
    },
    post: (newProject) => {
      settingIdx++;
      newProject.id = settingIdx;
      settings = produce(settings, (draft) => {
        draft.push(newProject);
      });
      return Promise.resolve(newProject);
    },
    edit: (object) => {
      let newObj;
      settings = produce(settings, (draft) => {
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
      settings = produce(settings, (draft) => {
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
