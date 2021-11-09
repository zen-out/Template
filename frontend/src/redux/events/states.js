// corresponds to api
// import { screen } from "query-extensions";
export const initialState = [
  { id: 1, name: "event1", status: "going" },
  { id: 2, name: "event2", status: "not going" },
];

export const getOne = {
  id: 1,
  name: "event1",
  status: "going",
};
export const toggleAction = { id: 1, status: "not going" };
export const afterToggle = [
  { id: 1, name: "event1", status: "not going" },
  { id: 2, name: "event2", status: "not going" },
];

export const newObject = {
  id: 3,
  name: "event3",
  status: "not going",
};
export const afterAdd = [...initialState, newObject];

export const editedObject = {
  id: 2,
  name: "newObject",
  status: "going",
};
export const afterEdit = [
  { id: 1, name: "event1", status: "going" },
  {
    id: 2,
    name: "newObject",
    status: "going",
  },
];

export const afterDelete = [
  { id: 2, name: "event2", status: "not going" },
];

export const weirdNewObject = {
  id: 1,
  status: "not going",
  newCondition: "what",
};
export const mergedWithWeird = {
  id: 1,
  status: "not going",
  newCondition: "what",
  name: "event1",
};

export const twoObjects = {
  updated: weirdNewObject,
  original: getOne,
};

export const afterMerged = [
  {
    id: 1,
    status: "not going",
    newCondition: "what",
    name: "event1",
  },
  {
    id: 2,
    name: "newObject",
    status: "going",
  },
];
//
// import { screen } from 'query-extensions';
// const table = screen.getBySelector("tbody");

function createUI(array) {}