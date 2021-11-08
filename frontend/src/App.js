import React from "react";
import "./App.css";
import { useStoreActions, useStoreState } from "easy-peasy";

function AddTodoForm() {
  const addTodo = useStoreActions(
    (actions) => actions.postThing
  );
  console.log(addTodo);
  const [value, setValue] = React.useState("");
  return (
    <>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        onClick={() =>
          addTodo({ id: 2, text: value, done: false })
        }
      >
        Add Todo
      </button>
    </>
  );
}

function Todos() {
  const todos = useStoreState(
    (state) => state.things.things
  );
  const users = useStoreState((state) => state.users.users);
  console.log(todos);
  console.log(users);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
function App() {
  return (
    <div className="App">
      <AddTodoForm />
      <Todos />
    </div>
  );
}

export default App;