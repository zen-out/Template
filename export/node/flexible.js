const query = (module.exports = {});

query.getAll = function () {
  console.log("getall ");
};

// in another folder
const query = require("./node/flexible");
query.getAll();
