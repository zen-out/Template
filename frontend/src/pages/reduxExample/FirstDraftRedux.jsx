import React, {
  useState,
  Component,
  useEffect,
} from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import debounce from "lodash.debounce";

const ButtonComponent = ({
  handleClick,
  name,
  id,
  label,
  param1,
  param2,
}) => {
  function onButtonClick() {
    handleClick(param1, param2);
  }
  return (
    <button
      name={name}
      id={id}
      onClick={() => onButtonClick()}
    >
      {label}
    </button>
  );
};

const InputComponent = ({
  onChange,
  type,
  value,
  name,
  id,
  placeholder,
}) => {
  const handleInputChange = debounce((event) => {
    onChange(event.target.value);
  }, 100);

  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={(event) => handleInputChange(event)}
    />
  );
};

function Event({ id, event }) {
  const [showEdit, setShowEdit] = useState(false);
  const [name, setName] = useState("");
  const deleteThunk = useStoreActions(
    (actions) => actions.events.deleteThunk
  );
  const editThunk = useStoreActions(
    (actions) => actions.events.editThunk
  );
  const toggleStatusThunk = useStoreActions(
    (actions) => actions.events.toggleStatusThunk
  );
  const showForm = () => {
    setShowEdit(true);
  };
  const handleNameOnChange = (name) => {
    setName(name);
  };
  const handleEdit = (id) => {
    let newObject = {
      id: id,
      name: name,
      status: "not going",
    };
    editThunk(newObject);
    setShowEdit(false);
  };
  const handleToggle = (id, value) => {
    let newObject = {
      id: id,
      status: value,
    };
    toggleStatusThunk(newObject);
  };
  return (
    <div key={event.id}>
      <h2>{event.name}</h2>{" "}
      {showEdit ? (
        <div>
          <InputComponent
            type="text"
            onChange={handleNameOnChange}
            placeholder="name"
          />
          <ButtonComponent
            handleClick={handleEdit}
            param1={event.id}
            label="Update"
          />
        </div>
      ) : (
        <div>
          {" "}
          <ButtonComponent
            handleClick={showForm}
            label="Show Edit Form"
          />
        </div>
      )}
      {event.status}
      <br />
      <ButtonComponent
        handleClick={handleToggle}
        param1={event.id}
        param2={"going"}
        label="Going"
      />
      <ButtonComponent
        handleClick={handleToggle}
        param1={event.id}
        param2={"not going"}
        label="Not Going"
      />
    </div>
  );
}

export default function Redux() {
  const [searchField, setSearchField] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const getAllThunk = useStoreActions(
    (actions) => actions.events.getAllThunk
  );
  const getOneThunk = useStoreActions(
    (actions) => actions.events.getOneThunk
  );
  const postThunk = useStoreActions(
    (actions) => actions.events.postThunk
  );
  const eventsStore = useStoreState(
    (state) => state.events
  );
  //   console.log(eventsStore.events.events);
  useEffect(() => {
    async function getData() {
      const response = await getAllThunk();
      //   console.log(response);
    }
    getData();
  }, []);
  const handleNameOnChange = (event) => {
    console.log("handle name", event.target.value);
    setName(event.target.value);
  };
  function handleSubmit() {
    const newItem = { name: name, status: "not going" };
    console.log(newItem);
    postThunk(newItem);
  }
  function eventList() {
    return eventsStore.events.map((event) => (
      <Event key={event.id} event={event} />
    ));
  }
  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          id="name"
          value={name}
          onChange={handleNameOnChange}
        />
        <ButtonComponent
          handleClick={handleSubmit}
          label="Add"
        />
      </div>
      {eventsStore.events ? (
        <div>{eventList()}</div>
      ) : (
        <div>no data yet</div>
      )}
    </div>
  );
}
