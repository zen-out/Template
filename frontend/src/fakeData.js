import produce from "immer";

import { EventsInitialState } from "./redux/projects/states";
/**
 * This is a naive mocked implementation of a service. Imagine it rather
 * being a decent implementation that interacts with a remote service to
 * persist/fetch data  */

export default (() => {
  let userIdx = 3;
  let eventIdx = 2;
  let users = [
    {
      id: 1,
      email: "hello",
      firstName: "first",
    },
    {
      id: 2,
      email: "two",
      firstName: "two",
    },
  ];
  let projects = [
    { id: 1, name: "project1", purpose: "hello" },
    { id: 2, name: "project2", purpose: "hello" },
  ];
  let events = EventsInitialState;
  let tasks = [
    {
      id: 1,
      index: 1,
      name: "Task1",
      projectId: 1,
      userId: 1,
    },
    {
      id: 2,
      index: 2,
      name: "Task2",
      projectId: 2,
      userId: 2,
    },
    {
      id: 3,
      index: 3,
      name: "Task3",
      projectId: 2,
      userId: 2,
    },
  ];

  return {
    getAllUsers: () => Promise.resolve(users),
    getOneUser: (id) => {
      const index = users.findIndex(
        (todo) => todo.id === id
      );
      if (index !== -1) {
        let user = users[index];
        return Promise.resolve(user);
      }
    },
    postUser: (newUser) => {
      userIdx++;
      newUser.id = userIdx;
      users = produce(users, (draft) => {
        draft.push(newUser);
      });

      return Promise.resolve(newUser);
    },
    editUser: (updatedUser) => {
      users = produce(users, (draft) => {
        const index = draft.findIndex(
          (todo) => todo.id === updatedUser.id
        );
        if (index !== -1) {
          draft[index] = updatedUser;
        }
      });

      return Promise.resolve(updatedUser);
    },
    deleteUser: (id) => {
      users = produce(users, (draft) => {
        const index = draft.findIndex(
          (item) => item.id === id
        );
        if (index !== -1) {
          draft.splice(index, 1);
        }
      });

      return Promise.resolve(id);
    },
  };
})();
