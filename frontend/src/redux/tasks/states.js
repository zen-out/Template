import _ from "lodash";

export const getTasks = (userId, state) => {
  let tasks = _.filter(state, {
    user_id: userId,
  });
  console.log("got tasks");
  return tasks;
};

export const INIT_TASKS = [
  {
    id: 1,
    user_id: 1,

    feature_id: 1,
    task: "Finish the signup page",
    done: true,
  },
  {
    id: 2,
    user_id: 2,
    feature_id: 2,
    task: "Finish the calendar page",
    done: true,
  },
  {
    id: 3,
    user_id: 1,
    feature_id: 1,
    task: "Finish the calendar page",
    done: true,
  },
  {
    id: 4,
    user_id: 4,
    feature_id: 4,
    task: "Finish the ongoing projects page",
    done: true,
  },
  {
    id: 5,
    user_id: 1,
    feature_id: 2,
    task: "Finish the signup page",
    done: true,
  },
  {
    id: 6,
    user_id: 1,
    feature_id: 2,
    task: "Finish the calendar page",
    done: true,
  },
  {
    id: 7,
    user_id: 1,
    feature_id: 2,
    task: "Finish the calendar page",
    done: true,
  },
  {
    id: 8,
    user_id: 1,
    feature_id: 2,
    task: "Finish the ongoing projects page",
    done: true,
  },

  {
    id: 9,
    user_id: 1,
    feature_id: 3,
    task: "Finish the calendar page",
    done: true,
  },
  {
    id: 10,
    user_id: 1,
    feature_id: 3,
    task: "Finish the calendar page",
    done: true,
  },
  {
    id: 11,
    user_id: 1,
    feature_id: 3,
    task: "Finish the ongoing projects page",
    done: true,
  },
  {
    id: 12,
    user_id: 1,
    feature_id: 3,
    task: "Finish the signup page",
    done: true,
  },
  {
    id: 13,
    user_id: 1,
    project_id: 1,
    feature_id: 3,
    task: "Finish the signup page",
    done: true,
  },
  {
    id: 14,
    user_id: 1,
    project_id: 1,
    feature_id: 3,
    task: "Finish the calendar page",
    done: true,
  },
  {
    id: 15,
    user_id: 1,
    project_id: 1,
    feature_id: 3,
    task: "Finish the calendar page",
    done: true,
  },
  {
    id: 16,
    user_id: 1,
    project_id: 1,
    feature_id: 3,
    task: "Finish the ongoing projects page",
    done: true,
  },
  {
    id: 17,
    user_id: 1,
    project_id: 1,
    feature_id: 5,
    task: "Finish the signup page",
    done: true,
  },
  {
    id: 18,
    user_id: 1,
    project_id: 1,
    feature_id: 5,
    task: "Finish the calendar page",
    done: true,
  },
  {
    id: 19,
    user_id: 1,
    project_id: 1,
    feature_id: 5,
    task: "Finish the calendar page",
    done: true,
  },
  {
    id: 20,
    user_id: 1,
    project_id: 1,
    feature_id: 5,
    task: "Finish the ongoing projects page",
    done: true,
  },
  {
    id: 21,
    user_id: 1,
    project_id: 1,
    feature_id: 6,
    task: "Finish the signup page",
    done: true,
  },
  {
    id: 22,
    user_id: 1,
    project_id: 1,
    feature_id: 6,
    task: "Finish the calendar page",
    done: true,
  },
  {
    id: 23,
    user_id: 1,
    project_id: 1,
    feature_id: 6,
    task: "Finish the calendar page",
    done: true,
  },
  {
    id: 24,
    user_id: 1,
    project_id: 1,
    feature_id: 6,
    task: "Finish the ongoing projects page",
    done: true,
  },
  {
    id: 25,
    user_id: 1,
    project_id: 1,
    feature_id: 7,
    task: "Finish the signup page",
    done: true,
  },
  {
    id: 26,
    user_id: 1,
    project_id: 1,
    feature_id: 7,
    task: "Finish the calendar page",
    done: true,
  },
  {
    id: 27,
    user_id: 1,
    project_id: 1,
    feature_id: 7,
    task: "Finish the calendar page",
    done: true,
  },
  {
    id: 28,
    user_id: 1,
    project_id: 1,
    feature_id: 7,
    task: "Finish the ongoing projects page",
    done: true,
  },
  {
    id: 29,
    user_id: 1,
    project_id: 1,
    feature_id: 8,
    task: "Finish the signup page",
    done: true,
  },
  {
    id: 30,
    user_id: 1,
    project_id: 1,
    feature_id: 8,
    task: "Finish the calendar page",
    done: true,
  },
  {
    id: 31,
    user_id: 1,
    project_id: 1,
    feature_id: 8,
    task: "Finish the calendar page",
    done: true,
  },
  {
    id: 32,
    user_id: 1,
    project_id: 1,
    feature_id: 8,
    task: "Finish the ongoing projects page",
    done: true,
  },
];
