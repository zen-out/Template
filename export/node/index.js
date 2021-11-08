// in folder/bestOne
module.exports = {
  hello: function (subject) {
    console.log("Jupiter says hello " + subject);
  },
  bye: function (subject) {
    console.log("Jupiter says goodbye " + subject);
  },
};

// in folder/index.js 
const { hello, bye } = require("./bestOne");

module.exports = { hello, bye };

// in index.js
// const { hello, bye, hey } = require( "./node" );
// hey()