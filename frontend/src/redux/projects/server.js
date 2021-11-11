import produce from "immer";
import { INIT_PROJECTS } from "./states";

export default (() => {
  let projectIdx = 2;
  let projects = INIT_PROJECTS;
  return {
    getAll: () => Promise.resolve(projects),
    //   Promise.resolve(projects.map((x) => ({ ...x }))),
    getOne: (id) => {
      let one = projects.find((one) => one.id === id);
      return Promise.resolve(one);
    },
    toggle: (id, status) => {
      projects = produce(projects, (draft) => {
        const index = draft.findIndex(
          (todo) => todo.id === id
        );
        if (index !== -1) {
          draft[index].status = status;
        }
      });
      return Promise.resolve(projects);
    },
    post: (newProject) => {
      projectIdx++;
      newProject.id = projectIdx;
      projects = produce(projects, (draft) => {
        draft.push(newProject);
      });
      return Promise.resolve(newProject);
    },
    edit: (object) => {
      let newObj;
      projects = produce(projects, (draft) => {
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
      projects = produce(projects, (draft) => {
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
