

const server = setupServer( ...handlers );

beforeAll(() => server.listen());
afterAll(() => server.close());
// cleanup any runtime handlers
afterEach(() => server.resetHandlers());

describe(() => {
  test("unknown server error displays the error message", async () => {
    // set the intention that the server response will be the same as the text content in the assertion
    const testErrorMessage =
      "Oh no, something bad happened";

    // add runtime handler
    server.use(
      rest.post(
        "https://auth-provider.example.com/api/login",
        async (req, res, ctx) => {
          return res(
            ctx.status(500),
            ctx.json({ message: testErrorMessage })
          );
        }
      )
    );
    render(<Login />);

    userEvent.click(
      screen.getByRole("button", { name: /submit/i })
    );

    await waitForElementToBeRemoved(() =>
      screen.getByLabelText(/loading/i)
    );

    expect(screen.getByRole("alert")).toHaveTextContent(
      testErrorMessage
    );
  });

  test("omitting the password results in an error", async () => {
    render(<Login />);
    const { username } = buildLoginForm();

    userEvent.type(
      screen.getByLabelText(/username/i),
      username
    );
    // not going to fill in the password

    userEvent.click(
      screen.getByRole("button", { name: /submit/i })
    );

    await waitForElementToBeRemoved(() =>
      screen.getByLabelText(/loading/i)
    );

    expect(screen.getByRole("alert")).toHaveTextContent(
      "password required"
    );
  });
});
