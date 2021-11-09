import {
  render,
  getByLabelText,
  fireEvent,
  waitForElementToBeRemoved,
  render,
  logRoles,
} from "@testing-library/react";
import { screen } from "query-extensions";
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
const mockFunctions = {
  getAll: jest.fn(() => Promise.resolve(initialState)),
  getOne: jest.fn(() => Promise.resolve(getOne)),
  post: jest.fn(() => Promise.resolve(newObject)),
  edit: jest.fn(() => Promise.resolve(editedObject)),
  delete: jest.fn(() => Promise.resolve(1)),
  toggle: jest.fn(() => Promise.resolve(afterToggle)),
};
const roles = ["button"];
const mockOnSubmit = jest.fn().mockReturnValue(undefined);
const props = {
  onHandleSubmit: mockOnSubmit,
  buttonText: "add",
};
render(<Form {...props}></Form>);
fireEvent.click(
  screen.getByRole("button", { name: "add" })
);
expect(mockOnSubmit).not.toHaveBeenCalled();

// - add role="role" aria-label="form-title" on all forms
// - role="link" for a tags
// - role="button"
// role="checkbox" aria-checked="false"
// add alt on all images
// role="radiogroup" aria-labeledby="legend25"
// role="radio" aria-checked="false"
// role="navigation" aria-label="Main">
// role="contentinfo">

function action(input, button) {
  // fill out email and click to sign up
  fireEvent.change(emailInput, {
    target: { value: "email@example.com" },
  });
  fireEvent.click(
    screen.getByRole("button", { name: /sign up/i })
  );
  await screen.find(ui.successIcon);
}
function formSubmit(input, buttonText, output) {
  // check for inputs

  const handleClick = jest.fn();
  const buttonProps = {
    function: handleFunction,
    label: "label",
  };

  render(
    // button must have on click handler
    <button
      role="button"
      name={buttonProps.label}
      onClick={mockFunctions.getAll}
    >
      Click Me
    </button>
  );
  fireEvent.click(screen.getByText(/click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
  await waitFor(() =>
    expect(mockAPI).toHaveBeenCalledTimes(1)
  );
  let getInput = getByLabelText(/input/i);
  let getButton = screen.getByLabelText(buttonText);
  // change input
  fireEvent.change(getByLabelText(/username/i), {
    target: { value: "a" },
  });

  // dates
  fireEvent.change(input, {
    target: { value: "2020-05-24" },
  });

  await screen.findByText("Clicked once");
  screen.getByText("llo Worl", { exact: false });
}

function deleteItem(item) {
  waitForElementToBeRemoved(
    document.querySelector("div.getOuttaHere")
  )
    .then(() => console.log("Element no longer in DOM"))
    .catch((error) => {
      console.log(error);
    });

  // or
  function renderWithRedux(
    component: JSX.Element,
    initialState: any
  ) {
    let store;
    if (initialState) {
      store = createStore(
        reducers,
        initialState,
        applyMiddleware(reduxThunk)
      );
    } else {
      store = createStore(
        reducers,
        applyMiddleware(reduxThunk)
      );
    }
    return {
      ...render(
        <Provider store={store}>{component}</Provider>
      ),
    };
  }
  const task = { 1: { id: "1", title: "title1" } };
  renderWithRedux(<Top />, { task });
  fireEvent.click(
    screen.getByRole("button", { name: "delete" })
  );
  await waitFor(() =>
    expect(
      screen.queryByText("title1")
    ).not.toBeInTheDocument()
  );
}

function editedItem(item) {
  const { rerender } = render(<NumberDisplay number={1} />);

  // re-render the same component with different props
  rerender(<NumberDisplay number={2} />);
  expect(getByText("Hello, world!")).toBeInTheDocument();

  describe("Deleting a Role", () => {
    const props = { role: "test", roleId: "123" };
    it("It should render a confirmation modal", async () => {
      const { getByTestId, getAllByText } = RenderWithRedux(
        <DeleteRole
          role={props.role}
          roleId={props.roleId}
        />
      );
      fireEvent.click(getAllByText("Delete")[0]);
      expect(
        getByTestId("confirm-message")
      ).toBeInTheDocument();
    });

    it("it should display a success message on delete", async () => {
      const { getByText } = RenderWithRedux(
        <DeleteRole
          role={props.role}
          roleId={props.roleId}
        />
      );
      fireEvent.click(getByText("Delete"));
      fireEvent.click(getByText("Yes"));
      await waitFor(() => {
        expect(
          getByText("Role deleted successfully")
        ).toBeInTheDocument();
      });
    });
  });
}

function error(event) {
  test("renders error message when user fetch fails", async () => {
    server.use(
      rest.get(
        "http://localhost:8080/api/user",
        (req, res, context) => {
          return res(context.status(400));
        }
      )
    );

    const { getByText } = render(<App />);

    expect(getByText(/Loading.../i)).toBeInTheDocument();

    await waitFor(() =>
      expect(
        getByText(/Error fetching user/i)
      ).toBeInTheDocument()
    );
  });
}
