const env = require("./test-environment");
const db = require("../../../server/db/events");

let testDb = null;

beforeEach(() => {
  testDb = env.getTestDb();
  return env.initialise(testDb);
});

afterEach(() => env.cleanup(testDb));

// post

test("createEvent creates a new event", () => {
  const newEvent = {
    host_id: 1,
    offering_type: "chocolate",
    location: "987 Countdown Terrace",
  };
  const validateNewEvent = (newIds) => {
    const id = newIds[0];
    return db.getEvent(id, testDb).then((event) => {
      expect(event.location).toBe(newEvent.location);
    });
  };
  return db
    .createEvent(newEvent, testDb)
    .then(validateNewEvent)
    .catch((err) => expect(err).toBeNull());
});
// get
test("getEvent returns an event given its id", () => {
  return db
    .getEvent(1, testDb)
    .then((event) => {
      expect(event.location).toBe("123 Happy Lane");
    })
    .catch((err) => expect(err).toBeNull());
});
// get all
test("getUpcomingEvents returns all upcoming events", () => {
  const userId = 1;
  return db
    .getUpcomingEvents(userId, testDb)
    .then((events) => {
      expect(events.length).toBe(1);
      expect(events[0].location).toBe("123 Happy Lane");
    })
    .catch((err) => expect(err).toBeNull());
});
// edit

// delete
test("deleteRegistration deletes an event registration", () => {
  const eventId = 3;
  const registrationName = "Julie";
  const validateDeletedRegistration = () => {
    return db
      .getRegistrations(eventId, testDb)
      .then((registrations) => {
        expect(registrations.length).toBe(0);
      });
  };
  return db
    .deleteRegistration(registrationName, eventId, testDb)
    .then(validateDeletedRegistration)
    .catch((err) => expect(err).toBeNull());
});
// if does not exist
test("getEvent returns undefined for a nonexistent event id", () => {
  return db
    .getEvent(9999, testDb)
    .then((event) => {
      expect(event).toBeFalsy();
    })
    .catch((err) => expect(err).toBeNull());
});

// if data already exists

test("createUser fails if username already exists", () => {
  const createNewUser = () => {
    return db.createUser("iamnew", "password", testDb);
  };
  return createNewUser().then(() =>
    expect(createNewUser()).rejects.toBeDefined()
  );
});

// more complex
