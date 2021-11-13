import produce from "immer";
import { INIT_TOAST } from "./states";

export default (() => {
  let toastIdx = 2;
  let toasts = INIT_SETTINGS;
  return {
    getAll: () => Promise.resolve(toasts),
    //   Promise.resolve(toasts.map((x) => ({ ...x }))),
    getOne: (id) => {
      let one = toasts.find((one) => one.id === id);
      return Promise.resolve(one);
    },
    toggle: (id, status) => {
      toasts = produce(toasts, (draft) => {
        const index = draft.findIndex(
          (todo) => todo.id === id
        );
        if (index !== -1) {
          draft[index].status = status;
        }
      });
      return Promise.resolve(toasts);
    },
    post: (newToast) => {
      toastIdx++;
      newToast.id = toastIdx;
      toasts = produce(toasts, (draft) => {
        draft.push(newToast);
      });
      return Promise.resolve(newToast);
    },
    edit: (object) => {
      let newObj;
      toasts = produce(toasts, (draft) => {
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
      toasts = produce(toasts, (draft) => {
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
