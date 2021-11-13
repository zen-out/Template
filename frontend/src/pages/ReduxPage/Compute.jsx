import React, { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

function eventList(arr) {
  return arr.map((event) => (
    <div key={event.id}>
      Id: {event.id} &nbsp;
      {event.user_id && (
        <span>user_id: {event.user_id}&nbsp;</span>
      )}
      {event.project_id && (
        <span>project_id: {event.project_id}&nbsp;</span>
      )}
      {event.feature_id && (
        <span>feature_id: {event.feature_id}&nbsp;</span>
      )}{" "}
      {event.name && (
        <span>
          Name (either user or project): {event.name} &nbsp;
        </span>
      )}
      {event.title && (
        <span>Feature Title: {event.title} &nbsp;</span>
      )}
      {event.task && <span>Task: {event.task} &nbsp;</span>}
      {event.problem && (
        <span>Bug Problem: {event.problem} &nbsp;</span>
      )}
    </div>
  ));
}
const UsersData = () => {
  const usersStore = useStoreState((state) => state.users);
  const getAllThunk = useStoreActions(
    (actions) => actions.users.getAllThunk
  );
  return (
    <div>
      <h1>Users Data</h1>
      {eventList(usersStore.users)}
    </div>
  );
};

const EventsData = () => {
  const eventsStore = useStoreState(
    (state) => state.events
  );
  const getAllThunk = useStoreActions(
    (actions) => actions.events.getAllThunk
  );
  return (
    <div>
      <h1>Events Data</h1>

      {eventList(eventsStore.events)}
    </div>
  );
};

const FeaturesData = () => {
  const featuresStore = useStoreState(
    (state) => state.features
  );
  const getAllThunk = useStoreActions(
    (actions) => actions.features.getAllThunk
  );
  return (
    <div>
      <h1>Features Data</h1>

      {eventList(featuresStore.features)}
    </div>
  );
};

const ProjectsData = () => {
  const projectsStore = useStoreState(
    (state) => state.projects
  );
  const getAllThunk = useStoreActions(
    (actions) => actions.projects.getAllThunk
  );
  return (
    <div>
      <h1>Projects Data</h1>

      {eventList(projectsStore.projects)}
    </div>
  );
};
const TasksData = () => {
  const tasksStore = useStoreState((state) => state.tasks);
  const getAllThunk = useStoreActions(
    (actions) => actions.tasks.getAllThunk
  );

  return (
    <div>
      <h1>Tasks Data</h1>
      {eventList(tasksStore.tasks)}
      <h1>User Tasks</h1>
    </div>
  );
};

function GetUsersTasks() {
  const tasksStore = useStoreState(
    (state) => state.tasks.displayRepos
  );
  return (
    <div>
      <h1>Users Tasks</h1>
      {eventList(tasksStore)}
      {/* {tasksStore.user_id}
      {tasksStore.task} */}
    </div>
  );
}
const BugsData = () => {
  const bugsStore = useStoreState((state) => state.bugs);
  const getAllThunk = useStoreActions(
    (actions) => actions.bugs.getAllThunk
  );
  return (
    <div>
      <h1>Bugs Data</h1>

      {eventList(bugsStore.bugs)}
    </div>
  );
};
export default function Playground() {
  const [id, setId] = useState(0);
  const [data, setData] = useState([
    { id: 1, name: "hello" },
  ]);
  const store = useStoreState((state) => state);
  console.log(store);
  const getUsersProjects = () => {
    console.log("clicked get users projects");
  };
  const getAllUsersFeatures = () => {
    console.log("getAllUsersFeatures");
  };
  const getAllUsersBugs = () => {
    console.log("getAllUsersBugs");
  };
  const getAllUsersTasks = () => {
    console.log("getAllUsersTasks");
  };
  const getAllProjectsFeatures = () => {
    console.log("getAllProjectsFeatures");
  };
  const getAllProjectsBugs = () => {
    console.log("getAllProjectsBugs");
  };
  const getAllProjectsTasks = () => {
    console.log("getAllProjectsTasks");
  };
  const getAllFeaturesBugs = () => {
    console.log("getAllFeaturesBugs");
  };

  const getAllFeaturesTasks = () => {
    console.log("clicked features tasks");
  };

  const getAllTasksBugs = () => {
    console.log("clicked tasks bugs");
  };

  return (
    <div className="container">
      <h1>Compute</h1>
      <div>
        <input
          value={id}
          placeholder="ID"
          onChange={(event) => setId(event.target.value)}
        />
        <button onClick={getUsersProjects}>
          Get All Users' Projects{" "}
        </button>
        <button onClick={getAllUsersFeatures}>
          getAllUsersFeatures
        </button>
        <button onClick={getAllUsersBugs}>
          getAllUsersBugs
        </button>
        <button onClick={getAllUsersTasks}>
          getAllUsersTasks
        </button>
        <GetUsersTasks />
        <button onClick={getAllProjectsFeatures}>
          getAllProjectsFeatures
        </button>
        <button onClick={getAllProjectsBugs}>
          getAllProjectsBugs
        </button>
        <button onClick={getAllProjectsTasks}>
          getAllProjectsTasks
        </button>
        <button onClick={getAllFeaturesBugs}>
          getAllFeaturesBugs
        </button>
        <button onClick={getAllFeaturesTasks}>
          getAllFeaturesTasks
        </button>
        <button onClick={getAllTasksBugs}>
          getAllTasksBugs
        </button>

        {eventList(data)}
      </div>
      <UsersData />
      <ProjectsData />
      <FeaturesData />
      <TasksData />
      <BugsData />
      <EventsData />
    </div>
  );
}
