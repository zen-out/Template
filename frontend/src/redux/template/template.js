import { action, thunk } from "easy-peasy";
import produce from "immer";
import { initialState } from "./states";
import data from "./data";

export const TemplateStore = {
  // Store
  template: initialState,
  isLoading: false,
  // Subroutines to load from API
  getAllThunk: thunk(async (actions) => {
    actions.setLoading(true);
    try {
      const template = await data.getAll();
      console.log(template);
      actions.setTemplate(template);
    } catch (error) {
      console.log("error: ", error);
      actions.setError(error);
    }
    actions.setLoading(false);
  }),

  getOneThunk: thunk(async (actions, id) => {
    actions.setLoading(true);
    try {
      const template = await data.getOne(id);
      actions.getById(id);
    } catch (error) {
      console.log("error: ", error);
      actions.setError(error);
    }
    actions.setLoading(false);
  }),
  postThunk: thunk(async (actions, template) => {
    actions.setLoading(true);
    try {
      const res = await data.post(template);
      actions.add(res);
    } catch (error) {
      console.log("error: ", error);
      actions.setError(error);
    }
    actions.setLoading(false);
  }),
  editThunk: thunk(async (actions, payload) => {
    actions.setLoading(true);
    try {
      const res = await data.edit(payload);
      actions.update(res);
    } catch (error) {
      console.log("error: ", error);
      actions.setError(error);
    }
    actions.setLoading(false);
  }),
  deleteThunk: thunk(async (actions, id) => {
    actions.setLoading(true);
    try {
      const res = await data.delete(id);
      actions.remove(res);
    } catch (error) {
      console.log("error: ", error);
      actions.setError(error);
    }
    actions.setLoading(false);
  }),
  toggleStatusThunk: thunk(async (actions, payload) => {
    let templateId = payload.id;
    let status = payload.status;
    console.log("template id", templateId, status);
    actions.setLoading(true);
    try {
      const res = await data.toggle(templateId, status);
      actions.setTemplate(res);
      //   actions.toggle(res);
    } catch (error) {
      console.log("error: ", error);
      actions.setError(error);
    }
    actions.setLoading(false);
  }),

  getById: action((state, id) => {
    state.template.map((object) => {
      if (object.id === id) {
        return object;
      }
    });
  }),
  // Actions
  setTemplate: action((state, template) => {
    state.template = template;
  }),
  add: action((state, template) => {
    // template.id = getLargestId(state.things) + 1;
    state.template = [...state.template, template];
  }),
  update: action((state, newObject) => {
    state.template = produce(state.template, (draft) => {
      const index = draft.findIndex(
        (todo) => todo.id === newObject.id
      );
      if (index !== -1) draft[index] = newObject;
    });
  }),
  toggle: action((state, payload) => {
    state.template = produce(state.template, (draft) => {
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
    state.template = state.template.filter(
      (template) => template.id !== id
    );
  }),
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
  setError: action((state, payload) => {
    state.error = payload;
  }),
  // not good because it essentially deletes everything
  //   filter: action((state, searchValue) => {
  //     let lowerCased = searchValue.toLowerCase();
  //     const updatedTodosArray = produce(
  //       state.template,
  //       (draft) => {
  //         return draft.filter(
  //           (item) =>
  //             item.title.toLowerCase().includes(lowerCased)
  //           //   lowerCased.includes(item.title.toLowerCase())
  //         );
  //       }
  //     );
  //     state.template = updatedTodosArray;
  //   }),
};
