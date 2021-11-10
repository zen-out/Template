import React, { useState, useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

function CombineChanges({
  object,
  editFlexibleThunk,
  deleteThunk,
  editThunk,
}) {
  const [showEdit, setShowEdit] = useState(false);
  const [name, setName] = useState("");
  const handleDelete = () => {
    deleteThunk(object.id);
  };

  const showForm = () => {
    setShowEdit(true);
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

  useEffect(() => {}, [object]);
  return (
    <div>
      {" "}
      id: {object.id}
      <br />
      {object.name} {object.status}
      {showEdit ? (
        <div>
          <input
            data-testid="editInput"
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Edit"
          />
          <button
            onClick={() => handleEdit(object.id)}
            data-testid="editBtn"
          >
            Update
          </button>
        </div>
      ) : (
        <div>
          {" "}
          <button onClick={showForm} data-testid="showEdit">
            Show Edit
          </button>
        </div>
      )}
      <button
        data-testid="deleteBtn"
        onClick={handleDelete}
        name="Delete"
      >
        Delete
      </button>
      <button
        onClick={() =>
          editFlexibleThunk({
            id: object.id,
            status: "going",
          })
        }
        name="Going"
      >
        Going
      </button>
      <button
        onClick={() =>
          editFlexibleThunk({
            id: object.id,
            status: "not going",
          })
        }
        name="Not Going"
      >
        {" "}
        Not Going
      </button>
    </div>
  );
}

function GetOne({ current, getOneThunk }) {
  const [userId, setUserId] = useState(0);
  useEffect(() => {}, [userId]);
  const handleClick = () => {
    getOneThunk(parseInt(userId));
  };
  return (
    <div>
      {" "}
      <input
        id="event"
        name="event"
        data-testid="event"
        value={userId}
        type="number"
        onChange={(event) => setUserId(event.target.value)}
        placeholder="Get One"
      />
      <button
        onClick={handleClick}
        name="Get Event"
        id="getOneEventBtn"
      >
        Get Event
      </button>
      ;
      {current ? (
        <div>
          {" "}
          <h1>Get User</h1>
          {current.id}
          {current.name}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

function PostOne({ postThunk }) {
  const [name, setName] = useState("");
  const handleSubmit = () => {
    const newItem = { name: name, status: "not going" };
    console.log(newItem);
    postThunk(newItem);
  };
  return (
    <div>
      <input
        data-testid="eventName"
        type="text"
        name="name"
        placeholder="Event Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={handleSubmit} data-testid="addEvent">
        Add
      </button>
    </div>
  );
}
export default function SecondRedux() {
  const eventsStore = useStoreState(
    (state) => state.events
  );
  const current = useStoreState(
    (state) => state.events.current
  );
  const deleteThunk = useStoreActions(
    (actions) => actions.events.deleteThunk
  );

  const editThunk = useStoreActions(
    (actions) => actions.events.editThunk
  );

  const editFlexibleThunk = useStoreActions(
    (actions) => actions.events.editFlexibleThunk
  );
  const getOneThunk = useStoreActions(
    (actions) => actions.events.getOneThunk
  );
  const getAllThunk = useStoreActions(
    (actions) => actions.events.getAllThunk
  );
  const postThunk = useStoreActions(
    (actions) => actions.events.postThunk
  );
  function eventList() {
    return eventsStore.events.map((event) => (
      <div>
        <CombineChanges
          editFlexibleThunk={editFlexibleThunk}
          editThunk={editThunk}
          deleteThunk={deleteThunk}
          object={event}
        />
      </div>
    ));
  }

  useEffect(() => {
    getAllThunk();
  }, []);
  return (
    <div>
      <PostOne postThunk={postThunk} />
      {eventsStore.events ? (
        <div>
          <br />
          {eventList()}
          <GetOne
            getOneThunk={getOneThunk}
            current={current}
          />
        </div>
      ) : (
        <div>no data yet</div>
      )}
    </div>
  );
}
