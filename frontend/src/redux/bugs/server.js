import produce from "immer";
import { INIT_BUGS } from "./states";

export default (() => {
  let bugIdx = 2;
  let bugs = INIT_BUGS;
  return {
    getAll: () => Promise.resolve(bugs),
    //   Promise.resolve(bugs.map((x) => ({ ...x }))),
    getOne: (id) => {
      let one = bugs.find((one) => one.id === id);
      return Promise.resolve(one);
    },
    toggle: (id, status) => {
      bugs = produce(bugs, (draft) => {
        const index = draft.findIndex(
          (todo) => todo.id === id
        );
        if (index !== -1) {
          draft[index].status = status;
        }
      });
      return Promise.resolve(bugs);
    },
    post: (newBug) => {
      bugIdx++;
      newBug.id = bugIdx;
      bugs = produce(bugs, (draft) => {
        draft.push(newBug);
      });
      return Promise.resolve(newBug);
    },
    edit: (object) => {
      let newObj;
      bugs = produce(bugs, (draft) => {
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
      bugs = produce(bugs, (draft) => {
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
