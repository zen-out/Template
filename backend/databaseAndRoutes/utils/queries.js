const TABLE_NAME = "Thing";

// post only if user
function add(note, user) {
  // where is actually a subquery - it first runs the subquery returning an array, then rest of the conditionas are applied
  let query = this.knex
    .select("id")
    .from("users")
    .where("users.username", user);

  return query.then((rows) => {
    console.log(rows[0].id, "<==== this is the id");
    if (rows.length === 1) {
      return this.knex
        .insert({
          content: note,
          user_id: rows[0].id,
        })
        .into("notes");
    } else {
      throw new Error(
        `Cannot add a note to a user that doesn't exist!`
      );
    }
  });
}
// get all
function GetAllThings(username, db) {
  return db("checkins")
    .where({ username: username })
    .then((first) => {
      return first;
    });
}
// get all - and create if doesn't exist
function list(user) {
  if (typeof user !== "undefined") {
    let query = this.knex
      .select("notes.id", "notes.content")
      .from("notes")
      .innerJoin("users", "notes.user_id", "users.id")
      .where("users.username", user)
      .orderBy("notes.id", "asc");

    return query.then((rows) => {
      console.log(rows, "pp");
      return rows.map((row) => ({
        id: row.id,
        content: row.content,
      }));
    });
  } else {
    let query = this.knex
      .select("users.username", "notes.id", "content")
      .from("notes")
      .innerJoin("users", "notes.user_id", "users.id");

    return query.then((rows) => {
      console.log(rows);
      const result = {};
      rows.forEach((row) => {
        if (typeof result[row.username] === "undefined") {
          result[row.username] = [];
        }
        result[row.username].push({
          id: row.id,
          content: row.content,
        });
      });
      return result;
    });
  }
}
// get one
function getOneThing(condition, db) {
  return db(TABLE_NAME)
    .select("*")
    .where({ condition: condition })
    .first()
    .then((first) => {
      return first;
    });
}

// Arrays - knx
function addThing(username, newThing, db) {
  return db(TABLE_NAME)
    .select("things")
    .where({ username: username })
    .then((obj) => {
      let obj0 = obj["0"];
      let values = Object.values(obj0["things"]);
      if (!values.includes(newThing)) {
        values.push(newThing);
      }
      return db(TABLE_NAME)
        .update({ things: values })
        .where({ username: username })
        .then(() => {
          return db(TABLE_NAME)
            .select("*")
            .where({ username: username })
            .then((added) => {
              return added;
            });
        });
    });
}

// Delete from Array
function deleteThing(username, thing, db) {
  return db(TABLE_NAME)
    .select("things")
    .where({ username: username })
    .then((obj) => {
      let obj0 = obj["0"];
      let values = Object.values(obj0["things"]);
      let newArr = values.filter((name) => {
        return name != thing;
      });
      console.log("doesn't include", newArr);
      return db(TABLE_NAME)
        .update({ things: newArr })
        .where({ username: username })
        .then(() => {
          return db(TABLE_NAME)
            .select("*")
            .where({ username: username })
            .then((added) => {
              return added;
            });
        });
    });
}

// Get percentage
app.get("/home/:user_id", (incoming, outgoing, next) => {
  let user_id = incoming.params.user_id;
  knex
    .from(user_friend)
    .select(
      user_friend_col1,
      user_friend_col2,
      user_friend_col3,
      user_friend_col4,
      user_friend_col5,
      user_friend_col6
    )
    .where("user_id", user_id)
    .then((eachFriend) => {
      if (eachFriend.length > 0) {
        for (let i = 0; i < eachFriend.length; i++) {
          let friend_id = eachFriend[i].id;
          let user_id = eachFriend[i].user_id;

          knex("user_friend_all_questions")
            .count("id")
            .first()
            .where({
              user_id: user_id,
              user_friend_id: friend_id,
            })
            .then((total) => {
              let percent = Math.round(
                (total.count / 187) * 100
              );
              eachFriend[i].answered_questions =
                total.count;
              eachFriend[i].url = getUrl(
                eachFriend[i].emoji
              );
              eachFriend[i].percent = percent;
              console.log(getUrl);
              outgoing.render("home", {
                user_id: user_id,
                user_friend: eachFriend,
              });
            });
        }
      } else {
        outgoing.render("home", {
          user_id: user_id,
        });
      }
    })
    .catch(next);
});

function createUser(username, password, db = connection) {
  return userExists(username, db)
    .then((exists) => {
      if (exists) {
        return Promise.reject(new Error("User exists"));
      }
    })
    .then(() => hash.generate(password))
    .then((passwordHash) => {
      return db("users").insert({
        username,
        hash: passwordHash,
      });
    });
}

function getUserByName(username, db = connection) {
  return db("users")
    .select()
    .where("username", username)
    .first();
}

function userExists(username, db = connection) {
  return db("users")
    .count("id as n")
    .where("username", username)
    .then((count) => {
      return count[0].n > 0;
    });
}

function updateUser(
  id,
  username,
  currentPassword,
  newPassword,
  db = connection
) {
  return getUserByName(username, db)
    .then((user) => {
      if (
        !user ||
        !hash.verify(user.hash, currentPassword)
      ) {
        return Promise.reject(
          new Error("Username password match not found")
        );
      }
      return Promise.resolve(user);
    })
    .then((user) => {
      const newPasswordHash = hash.generate(newPassword);
      if (id !== user.id)
        Promise.reject(
          new Error("Username and ID mismatch")
        );
      return db("users")
        .update({ username, hash: newPasswordHash })
        .where("id", user.id);
    });
}

// updating shared table
function createOffering(
  offering,
  eventId,
  db = connection
) {
  const createRegistrationRelations = associate.bind(
    null,
    offering.registrationIds,
    db
  );
  const newOffering = {
    name: offering.name,
    description: offering.description,
    photo_url: offering.photoUrl,
    event_id: eventId,
  };
  return db("offerings")
    .insert(newOffering)
    .then(createRegistrationRelations);

  // The associate function below is partially applied earlier in this function
  // (the first 2 parameters to be specific) and called createRegistrationRelations.
  // The third parameter is supplied by the knex insert function, which is an
  // array of the new IDs created during the insert. There will only be a single
  // ID in the array and this array is called newOfferingIds.
}

function associate(registrationIds, db, newOfferingIds) {
  const newOfferingId = newOfferingIds[0];
  const promises = registrationIds.map((registrationId) => {
    return db("registration_offerings").insert({
      registration_id: registrationId,
      offering_id: newOfferingId,
    });
  });
  return Promise.all(promises).then(() => newOfferingId);
}
