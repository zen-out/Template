const TABLE_NAME = "things";
// this should correspond to redux actions
class ThingsQueries {
  constructor(database) {
    this.database = database;
  }
  getOrderedData(username) {
    return this.knex(TABLE_NAME)
      .select("*")
      .where({ username: username })
      .then((eachRow) => {
        return eachRow;
      })
      .orderBy("condition", "desc")
      .catch((error) => {
        console.log("error", error);
      });
  }
  getByUsername(username) {
    return this.knex(TABLE_NAME)
      .select("*")
      .where({ username: username });
  }
  getAll() {
    return this.knex(TABLE_NAME)
      .select()
      .then((eachRow) => {
        return eachRow;
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  getOneThingById(id) {
    return this.knex(TABLE_NAME)
      .select()
      .where({ id: id })
      .then((eachRow) => {
        console.log(eachRow);
        return eachRow;
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  getOneThingByCondition(query) {
    return this.knex(TABLE_NAME)
      .select()
      .where({ condition: query })
      .then((eachRow) => {
        return eachRow;
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  // with id returning
  postThing(object) {
    return this.knex(TABLE_NAME)
      .returning("id")
      .insert(object)
      .then((id) => {
        console.log(id);
        return id;
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  editThing(id, object) {
    return this.knex(TABLE_NAME)
      .where({ id: id })
      .update(object)
      .then(() => {
        this.get(id).then((bug) => {
          return bug;
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  deleteThing(id) {
    return this.knex(TABLE_NAME)
      .where({ id: id })
      .del()
      .then(() => {
        console.log("deleted");
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
}

module.exports = { ThingsQueries };
