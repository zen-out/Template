import produce from "immer";

import { initialState } from "./states";

export default (() => {
  let eventIdx = 2;
  let events = initialState;
  return {
    getAll: () => Promise.resolve(events),
    //   Promise.resolve(events.map((x) => ({ ...x }))),
    getOne: (id) => {
      let one = events.find((one) => one.id === id);
      return Promise.resolve(one);
    },
    toggle: (id, status) => {
      events = produce(events, (draft) => {
        const index = draft.findIndex(
          (todo) => todo.id === id
        );
        if (index !== -1) {
          draft[index].status = status;
        }
      });
      return Promise.resolve(events);
    },
    post: (newEvent) => {
      eventIdx++;
      newEvent.id = eventIdx;
      events = produce(events, (draft) => {
        draft.push(newEvent);
      });
      return Promise.resolve(newEvent);
    },
    edit: (object) => {
      let newObj;
      events = produce(events, (draft) => {
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
      events = produce(events, (draft) => {
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
