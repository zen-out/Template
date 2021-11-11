import produce from "immer";
import { INIT_FEATURES } from "./states";

export default (() => {
  let featureIdx = 2;
  let features = INIT_FEATURES;
  return {
    getAll: () => Promise.resolve(features),
    //   Promise.resolve(features.map((x) => ({ ...x }))),
    getOne: (id) => {
      let one = features.find((one) => one.id === id);
      return Promise.resolve(one);
    },
    toggle: (id, status) => {
      features = produce(features, (draft) => {
        const index = draft.findIndex(
          (todo) => todo.id === id
        );
        if (index !== -1) {
          draft[index].status = status;
        }
      });
      return Promise.resolve(features);
    },
    post: (newFeature) => {
      featureIdx++;
      newFeature.id = featureIdx;
      features = produce(features, (draft) => {
        draft.push(newFeature);
      });
      return Promise.resolve(newFeature);
    },
    edit: (object) => {
      let newObj;
      features = produce(features, (draft) => {
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
      features = produce(features, (draft) => {
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
