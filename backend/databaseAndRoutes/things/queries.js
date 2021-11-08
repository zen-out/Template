// this should correspond to redux actions
class ThingsQueries {
  constructor(database) {
    this.database = database;
  }
  getAllThings() {}
  getOneThingById(id) {}
  getOneThingByCondition(condition) {}
  postThing(object) {}
  editThing(id, object) {}
  editThingOneColumn(id, newEntry) {}
  deleteThing(id) {}
}

module.exports = { ThingsQueries };
