import _ from "lodash";
import produce from "immer";
export const replaceItemAtIndex = (
  arr,
  index,
  newValue
) => {
  return [
    ...arr.slice(0, index),
    newValue,
    ...arr.slice(index + 1),
  ];
};

export const removeItemAtIndex = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};
export const removeItemAtId = (arr, id) => {
  return produce(arr, (draft) => {
    const index = draft.findIndex((todo) => todo.id === id);
    if (index !== -1) draft.splice(index, 1);
  });
};

export const replaceItemAtId = (arr, newValue) => {
  let id = newValue.id;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      return [
        ...arr.slice(0, i),
        newValue,
        ...arr.slice(i + 1),
      ];
    }
  }
};

let array = [
  { id: 1, item: "hello" },
  { id: 2, item: "hello" },
  { id: 3, item: "hello" },
];

const deletedTodosArray = produce(array, (draft) => {
  const index = draft.findIndex((todo) => todo.id === 2);
  if (index !== -1) draft.splice(index, 1);
});

// console.log(deletedTodosArray);
let newItem = {
  id: "whatsup",
  item: "new",
};
let getThis = replaceItemAtId(array, newItem);
// console.log(getThis);
// console.log(array, "whatsup", newItem);
// console.log(removeItemAtIndex(array, 1));

// let getThis = removeItemAtIndex(array, 1);

// console.log(getThis2);

export function getLargestId(arr) {
  return Math.max.apply(
    Math,
    arr.map(function (o) {
      //   console.log(o.id);
      return o.id;
    })
  );
}

// console.log(getLargestId(array));

export const original = {
  id: 1,
  name: "event1",
  status: "going",
};

export const updated = {
  id: 1,
  status: "not going",
  newCondition: "what",
};
export const merged = {
  id: 1,
  status: "not going",
  newCondition: "what",
  name: "event1",
};

function customizer(objValue, srcValue) {
  return _.isUndefined(objValue) ? srcValue : objValue;
}
// update comes first
export const mergeObjects = _.partialRight(
  _.assignInWith,
  customizer
);
// updated
// console.log(mergeObjects(updated, original));
// console.log(mergeObjects(original, updated));
// // => { 'a': 1, 'b': 2 }
// console.log();
