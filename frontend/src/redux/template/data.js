import produce from "immer";

import { initialState } from "./states";

export default (() => {
  let templateIdx = 2;
  let template = initialState;
  return {
    getAll: () => {
      return Promise.resolve(template);
    },
    getOne: (id) => {
      let templateObj;
      const index = template.findIndex(
        (todo) => todo.id === id
      );
      if (index !== -1) {
        templateObj = template[index];
      }

      return Promise.resolve(templateObj);
    },
    toggle: (id, status) => {
      template = produce(template, (draft) => {
        const index = draft.findIndex(
          (todo) => todo.id === id
        );
        if (index !== -1) {
          draft[index].status = status;
        }
      });
      return Promise.resolve(template);
    },
    post: (newEvent) => {
      templateIdx++;
      newEvent.id = templateIdx;
      template = produce(template, (draft) => {
        draft.push(newEvent);
      });
      return Promise.resolve(newEvent);
    },
    edit: (object) => {
      let newObj;
      template = produce(template, (draft) => {
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
      template = produce(template, (draft) => {
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
