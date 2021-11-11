import { EventsStore } from "./events";
import { createStore } from "easy-peasy";
import mockService from "./server.js";
import {
  weirdNewObject,
  mergedWithWeird,
  twoObjects,
  afterMerged,
  INIT_EVENTS,
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

describe("events", () => {
  let storeMocked;
  let mockFunctions;
  let store;
  beforeEach(() => {
    mockFunctions = {
      getAll: jest.fn(() => Promise.resolve(INIT_EVENTS)),
      getOne: jest.fn(() => Promise.resolve(getOne)),
      post: jest.fn(() => Promise.resolve(newObject)),
      edit: jest.fn(() => Promise.resolve(editedObject)),
      delete: jest.fn(() => Promise.resolve(1)),
      toggle: jest.fn(() => Promise.resolve(afterToggle)),
    };
    storeMocked = createStore(EventsStore, {
      mockActions: true,
      injections: { mockService: mockFunctions },
    });
    store = createStore(EventsStore, {
      //   INIT_EVENTS: INIT_EVENTS,
      injections: { mockService: mockFunctions },
    });
  });
  //   it("should be initialized", () => {
  //     // arrange
  //     const store = createStore(EventsStore);

  //     // act
  //     expect(store.getState().events).toEqual(
  //       INIT_EVENTS
  //     );
  //   });
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
      payload: INIT_EVENTS,
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@action.setEvents",
    });

    expect(storeMocked.getState().events).toEqual(
      INIT_EVENTS
    );
  });
  it("getOneThunk should get one", async () => {
    await storeMocked.getActions().getOneThunk(getOne.id);
    // console.log(storeMocked.getMockedActions());
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@thunk.getOneThunk(start)",
      payload: getOne.id,
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@action.setCurrent",
      payload: getOne,
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@thunk.getOneThunk(success)",
    });
  });

  it("postThunk should change state", async () => {
    await storeMocked.getActions().postThunk(newObject);
    // console.log(storeMocked.getMockedActions());
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@thunk.postThunk(start)",
      payload: {
        id: 3,
        name: "event3",
        status: "not going",
      },
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@action.add",
      payload: {
        id: 3,
        name: "event3",
        status: "not going",
      },
    });

    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@thunk.postThunk(success)",
      payload: {
        id: 3,
        name: "event3",
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
    // console.log(storeMocked.getMockedActions());
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
  it("Flexible edits should merge and update original object", async () => {
    await storeMocked
      .getActions()
      .editFlexibleThunk(weirdNewObject);
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@thunk.editFlexibleThunk(start)",
      payload: weirdNewObject,
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@action.updateFlexible",
      payload: {
        original: getOne,
        updated: weirdNewObject,
      },
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@thunk.editFlexibleThunk(success)",
      payload: mergedWithWeird,
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
      type: "@action.setEvents",
    });
    expect(storeMocked.getMockedActions()).toContainObject({
      type: "@thunk.toggleStatusThunk(success)",
      payload: { id: 1, status: "not going" },
    });
  });
  it("should get one", () => {
    expect(store.getActions().setCurrent(getOne)).toEqual({
      type: "@action.setCurrent",
      payload: getOne,
    });

    expect(store.getState().current).toEqual(getOne);
    // console.log(store.getListeners());
  });

  it("should add event", () => {
    store.getActions().add(newObject);
    expect(store.getState().events).toEqual(afterAdd);
  });

  it("update flexible", () => {
    store.getActions().updateFlexible(twoObjects);
    expect(store.getState().events).toContainObject(
      mergedWithWeird
    );
    expect(store.getState().events).toContainObject(
      INIT_EVENTS[1]
    );
    expect(store.getState().events.length).toBe(2);
  });

  it("should update", () => {
    // act
    store.getActions().update(editedObject);

    // assert
    expect(store.getState().events).toEqual(afterEdit);
  });

  it("should set events", () => {
    store.getActions().setEvents(INIT_EVENTS);

    expect(store.getState().events).toEqual(INIT_EVENTS);
  });
  it("should change condition", () => {
    // arrange
    // act
    store.getActions().toggle(toggleAction);
    // assert
    expect(store.getState().events).toEqual(afterToggle);
  });
  it("should remove event", () => {
    // arrange
    // act
    store.getActions().remove(1);

    // assert
    expect(store.getState().events).toEqual(afterDelete);
  });
});
