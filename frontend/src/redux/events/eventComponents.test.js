import { createStore, StoreProvider } from "easy-peasy";
import React from "react";
import {
  render,
  getByLabelText,
  userEvent,
  fireEvent,
  waitForElementToBeRemoved,
  logRoles,
} from "@testing-library/react";
import { UI } from "../global/testUI";
import { screen } from "query-extensions";
import { EventsStore } from "./events";
import Redux from "../../pages/Redux";
import { rest } from "msw";
import { setupServer } from "msw/node";
import {
  initialState,
  newObject,
  getOne,
  toggleAction,
  afterToggle,
  afterAdd,
  editedObject,
  afterEdit,
  afterDelete,
} from "./states";

const server = setupServer(
  rest.get("/api/events", (req, res, ctx) => {
    return res(ctx.json(initialState));
  })
);
describe("events component", () => {
  let store;
  let component;
  beforeAll(() => {
    server.listen();
  });
  beforeEach(() => {
    store = createStore(EventsStore);
    // component = RenderComponent(store, <Redux />);
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("get all on load", async () => {
    test("Fails", () => {});
    test("Check content before fetch", () => {});
  });

  it("post object", async () => {
    component();
      test( "input text", () => {
        fireEvent.change()
      // expect input to be there
    });
    // Click button
    test("dispatches post thunk", () => {
      // click on
    });

    test("after: shows posted item", () => {
      // document should be in the thing
    });
  });

  it("cannot post", async () => {});
  it("get one object based on id", async () => {
    test("get item", () => {});
    test("dispatches get item", () => {});

    test("after: shows get item", () => {});
  });
  it("delete object", async () => {
    test("delete item", () => {});
    test("dispatches delete item", () => {});

    test("after: deleted item", () => {});
  });
  it("edit object", async () => {
    test("edit item", () => {});
    test("dispatches edit item", () => {});

    test("after: edited item", () => {});
  });
  it("toggle object", async () => {
    test("toggle item", () => {});
    test("after: toggled item", () => {});
  });
});
