const _ = require("lodash");

// get all users' projects...

const users = [
  { id: 10, name: "Phil", age: 32 },
  { id: 8, name: "Jason", age: 44 },
  { id: 11, name: "Rye", age: 28 },
  { id: 10, name: "Phil", age: 32 },
];

const uniqueUsers = _.uniqBy(users, "id");
console.log(uniqueUsers);

const apiResponse = {
  id: 33467,
  paymentRefernce: "AEE3356T68",
  // `order` object missing
  processedAt: `2021-10-10 00:00:00`,
};
const zipCode = _.get(
  apiResponse,
  "order.payee.address.zipCode"
);
console.log(
  "The order was sent to the zip code: " + zipCode
);

const zipCode2 = _.get(
  apiResponse,
  "order.payee.address.zipCode",
  "NA"
);
console.log(
  "The order was sent to the zip code: " + zipCode2
);

const allUsers = [
  { id: 1, name: "Phil" },
  { id: 1, name: "Phil" },
  { id: 2, name: "John" },
  { id: 3, name: "Rogg" },
];
const activeUsers = [
  { id: 1, name: "Phil" },
  { id: 2, name: "John" },
];
const inactiveUsers = _.differenceBy(
  allUsers,
  activeUsers,
  "id"
);
console.log(inactiveUsers);

const allUserIds = [1, 3, 4, 2, 10, 22, 11, 8];
const activeUserIds = [1, 4, 22, 11, 8];

const inactiveUserIds = _.difference(
  allUserIds,
  activeUserIds
);
console.log(inactiveUserIds);

const unique = _.uniqBy(allUsers, "id");
console.log(unique);

let links = [
  "https://codesandbox.io/s/react-suspense-esc8w",
  "https://codepen.io/finnhvman/embed/bmNdNr",
  "https://codepen.io/suez/embed/AXQaEg",
  "https://react-beautiful-dnd.netlify.app/?path:/story/tables--with-custom-portal",
  "https://codesandbox.io/s/ym97587kxx",
  "https://codesandbox.io/s/react-grid-layout-d9n8q",
  "https://codepen.io/sdras/embed/zYqvJqy",
  "https://codepen.io/sdras/embed/xxZeRyg",
  "https://codesandbox.io/s/9onoj",
  "https://codepen.io/himalayasingh/embed/QZKqOX",
];

function createObjects(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let newObj = {
      link: arr[i],
      title: "",
      importance: "",
      sparkJoy: false,
      simple: false,
    };
    newArr.push(newObj);
  }
  return newArr;
}

console.log(createObjects(links));


