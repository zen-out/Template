const express = require("express");
const router = express.Router();
const ThingService = require("./queries");
const session = require("express-session");
const development = require("../../knexfile").development;
const knex = require("knex")(development);
const thingService = new ThingService(knex);

router.get("/api/things", async (request, response) => {
  thingService.getAll().then((allThings) => {
    response.json(allThings);
  });
});

// get by username, ordered by specific condition
router.get(
  "/api/:username/things",
  async (request, response) => {
    console.log("hit route", request.params.username);
    thingService
      .getByUsername(request.params.username)
      .orderBy("created", "desc")
      .then((things) => {
        console.log("should order ", things);
        response.json(things);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
);
// get one
router.get("/api/things/:id", async (request, response) => {
  let id = request.params.id;
  thingService.get(id).then((thing) => {
    response.send(thing);
  });
});
router.post("/api/things", async (request, response) => {
  let thing = request.body;
  console.log("does it have an id", request.body.id);
  console.log(thing);
  thingService.postThing(thing).then((id) => {
    let actualId = id[0];
    console.log(actualId);
    thingService
      .getByUsername(request.body.username)
      .then((result) => {
        return result;
      });
  });
});
router.put("/api/things/:id", async (request, response) => {
  let newThing = request.body;
  let id = request.params.id;
  thingService.edit(id, newThing).then((updatedThing) => {
    thingService
      .getByUsername(request.body.username)
      .then((result) => {
        return result;
      });
  });
});
router.post("/api/things", async (request, response) => {
  let id = request.params.id;
  thingService.get(id).then((thing) => {
    let actualThing = thing[0];
    let username = actualThing.username;
    console.log(username);
    thingService.delete(id).then(() => {
      thingService
        .getByUsername(username)
        .then((result) => {
          return result;
        });
    });
  });
});

module.exports = ThingRouter;
