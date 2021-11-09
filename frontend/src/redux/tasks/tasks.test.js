import { TasksStore } from "./tasks";
import { createStore } from "easy-peasy";
import mockService from "./data.js";

import {
  initialState,
  newObject,
  getOne,
  toggleAction,
  afterToggle,
  afterAdd,
  editedObject,
  afterEdit,
  afterDelete,
} from "./states";
expect.extend({
  toContainObject(received, argument) {
    const pass = this.equals(
      received,
      expect.arrayContaining([
        expect.objectContaining(argument),
      ])
    );

    if (pass) {
      return {
        message: () =>
          `expected ${this.utils.printReceived(
            received
          )} not to contain object ${this.utils.printExpected(
            argument
          )}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${this.utils.printReceived(
            received
          )} to contain object ${this.utils.printExpected(
            argument
          )}`,
        pass: false,
      };
    }
  },
});

describe("templates", () => {
  let storeMocked;
  let mockFunctions;
  let store;
  beforeEach(() => {
    mockFunctions = {
      getAll: jest.fn(() => Promise.resolve(initialState)),
      getOne: jest.fn(() => Promise.resolve(getOne)),
      post: jest.fn(() => Promise.resolve(newObject)),
      edit: jest.fn(() => Promise.resolve(editedObject)),
      delete: jest.fn(() => Promise.resolve(1)),
      toggle: jest.fn(() => Promise.resolve(afterToggle)),
    };
    storeMocked = createStore(TemplateStore, {
      mockActions: true,
      injections: { mockService: mockFunctions },
    });
    store = createStore(TemplateStore, {
      //   initialState: initialState,
      injections: { mockService: mockFunctions },
    });
  });
  it("thunk should get all", async () => {
    await storeMocked.getActions().getAllThunk();
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@thunk.getAllThunk(start)",
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@action.setLoading",
      payload: true,
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@action.setLoading",
      payload: false,
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      payload: initialState,
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@action.setTemplate",
    });

    expect(storeMocked.getState().templates).toEqual(
      initialState
    );
  });
  it("getOneThunk should get one", async () => {
    await storeMocked.getActions().getOneThunk(getOne.id);
    // console.log(storeMocked.getMockedActions());
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@thunk.getOneThunk(start)",
      payload: 1,
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@action.getById",
      payload: 1,
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@action.setLoading",
      payload: false,
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@action.setLoading",
      payload: false,
    });
  });

  it("postThunk should change state", async () => {
    await storeMocked.getActions().postThunk(newObject);
    console.log(storeMocked.getMockedActions());
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@thunk.postThunk(start)",
      payload: {
        id: 3,
        name: "template3",
        status: "not going",
      },
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@action.add",
      payload: {
        id: 3,
        name: "template3",
        status: "not going",
      },
    });

    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@thunk.postThunk(success)",
      payload: {
        id: 3,
        name: "template3",
        status: "not going",
      },
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@action.setLoading",
      payload: true,
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@action.setLoading",
      payload: false,
    });
  });
  it("editThunk should change state", async () => {
    await storeMocked.getActions().editThunk(editedObject);
    console.log(storeMocked.getMockedActions());
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@thunk.editThunk(start)",
      payload: editedObject,
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@action.update",
      payload: editedObject,
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@thunk.editThunk(success)",
      payload: editedObject,
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@action.setLoading",
      payload: true,
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@action.setLoading",
      payload: false,
    });
  });
  it("deleteThunk should change state", async () => {
    await storeMocked.getActions().deleteThunk(1);
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@thunk.deleteThunk(start)",
      payload: 1,
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@action.remove",
      payload: 1,
    });
    console.log(storeMocked.getMockedActions());
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@action.setLoading",
      payload: true,
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@action.setLoading",
      payload: false,
    });
  });
  it("toggleStatusThunk should change state", async () => {
    await storeMocked
      .getActions()
      .toggleStatusThunk(toggleAction);
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@thunk.toggleStatusThunk(start)",
      payload: toggleAction,
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@action.setTemplate",
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@thunk.toggleStatusThunk(success)",
      payload: { id: 1, status: "not going" },
    });
  });
  it("should get one", () => {
    expect(store.getActions().getById(1)).toEqual({
      type: "@action.getById",
      payload: 1,
    });
    // console.log(store.getListeners());
  });

  it("should add template", () => {
    store.getActions().add(newObject);
    expect(store.getState().templates).toEqual(afterAdd);
  });

  it("should update", () => {
    // act
    store.getActions().update(editedObject);

    // assert
    expect(store.getState().templates).toEqual(afterEdit);
  });

  it("should change condition", () => {
    // arrange
    // act
    store.getActions().toggle(toggleAction);
    // assert
    expect(store.getState().templates).toEqual(afterToggle);
  });
  it("should remove template", () => {
    // arrange
    // act
    store.getActions().remove(1);

    // assert
    expect(store.getState().templates).toEqual(afterDelete);
  });
});
