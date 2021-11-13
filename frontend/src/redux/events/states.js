// corresponds to api
// import { screen } from "query-extensions";
import _ from "lodash";
function customizer(objValue, srcValue) {
  return _.isUndefined(objValue) ? srcValue : objValue;
}
// update comes first
export const mergeObjects = _.partialRight(
  _.assignInWith,
  customizer
);

export const INIT_EVENTS = [
  { id: 1, name: "event1", status: "going" },
  { id: 2, name: "event2", status: "not going" },
];

export const getOne = INIT_EVENTS[0];
// console.log(getOne);

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
export const afterAdd = [...INIT_EVENTS, newObject];

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
