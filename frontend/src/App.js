import React, { useState, useEffect } from "react";
import "./App.css";
import { useStoreActions, useStoreState } from "easy-peasy";
import Redux from "./pages/Redux";
function AddTodoForm() {
  const { postThing } = useStoreActions(
    (actions) => actions.things
  );
  console.log(postThing);
  const [value, setValue] = useState("");

  async function handleThingChange() {
    postThing({ text: value, done: false });
    setValue("");
  }
  return (
    <>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={handleThingChange}>Add Todo</button>
    </>
  );
}

function Todos() {
  const [things, setThings] = useState([]);
  const thingsState = useStoreState(
    (state) => state.things.things
  );
  const { deleteThing } = useStoreActions(
    (actions) => actions.things
  );
  useEffect(() => {
    setThings(thingsState);
  }, []);
  function handleCallback(data) {
    console.log(data);
    // setThings(data);
  }
  function handleDelete(id) {
    const payload = {
      id: id,
      callback: handleCallback,
    };
    deleteThing(payload);
  }
  const users = useStoreState((state) => state.users.users);
  console.log(things.length);
  console.log(thingsState.length);
  return (
    <ul>
      {thingsState.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <br />
          <button
            id={todo.id}
            onClick={() => handleDelete(todo.id)}
          >
            delete
          </button>
          <button id={todo.id}>delete</button>
        </li>
      ))}
    </ul>
  );
}
function App() {
  return (
    <div className="App">
      <Redux />
    </div>
  );
}

export default App;
