// queries
const query = (module.exports = {});

query.getAll = function () {
  console.log("getall ");
};

// in another folder
const query = require("./node/flexible");
query.getAll();

// routes

router.get("/", async (req, res) => {});

router.get("/api/:id", async (req, res) => {});

module.exports = router;

// in another file

const nameRouter = require("./router");

// classes

// functions
// in folder/bunchOfFunctions
module.exports = {
  hello: function (subject) {
    console.log("Jupiter says hello " + subject);
  },
  bye: function (subject) {
    console.log("Jupiter says goodbye " + subject);
  },
};

// in folder/index.js
const { hello, bye } = require("./bunchOfFunctions");

module.exports = { hello, bye };

// in index.js
const { hello, bye } = require("./folder");
hello("yo");

// variables

// import exports node
const name = "lesley";
module.exports = name;
// in another file
const name = require("./node/variable");
