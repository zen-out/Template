import _ from "lodash";

// console.log(hasPlace(getJoySimplePlace));

export function joyComponents(arr) {
  let joyLayout = _.filter(arr, {
    sparkJoy: true,
    simple: true,
  });
  return joyLayout;
}

// console.log(hasPlace(joyLayout));

// let joyAll = _.filter(codepens, {
//   sparkJoy: true,
//   component: "All",
// });

// console.log(hasPlace(joyAll));

// let joy = _.filter(codepens, {
//   sparkJoy: true,
//   component: "Bugs",
// });

// console.log(hasPlace(joy));

// let getLocations = _.map(codepens, "where");
// console.log(getLocations);

export function hasPlace(arr) {
  let getArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].hasOwnProperty("where")) {
      //   console.log(arr[i]);
      getArr.push(arr[i]);
    }
  }
  return getArr;
}

// get all pages
// get all component names
export function filterForCondition(array, condition) {
  let getCondition = _.map(array, condition);
  let noFalse = _.compact(getCondition);
  let unique = _.uniq(noFalse);
  return unique;
}
export function getUnique(array) {
  return _.uniq(array, function (item) {
    return item.link;
  });
}

export function getEachPage(array, condition) {
  let getPageComponents = _.filter(codepens, {
    where: condition,
  });
  let ordered = _.orderBy(getPageComponents, {
    sparkJoy: true,
  });

  return ordered;
}
export function buildLibrary(array, type) {
  let getTypeComponents = _.filter(codepens, {
    component: type,
  });
  let ordered = _.orderBy(getTypeComponents, {
    sparkJoy: true,
  });
  return ordered;
}
