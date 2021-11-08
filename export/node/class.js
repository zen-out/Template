class Twenty {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
    return this.name;
  }
}

module.exports = Twenty;
// in another file
// const classTwenty = require("./node/class");
