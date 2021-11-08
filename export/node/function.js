function getFunction() {
  console.log("w");
}
function secondFunction() {
  console.log("yo");
}
module.exports = { getFunction, secondFunction };
// in another file
const {
  getFunction,
  secondFunction,
} = require("./node/function");

getFunction();
secondFunction();
