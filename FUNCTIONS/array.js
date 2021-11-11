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
