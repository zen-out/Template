const _ = require("lodash");
// get all users' projects...

const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) =>
  previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));

let items = [
  { id: 1, name: "boots", price: 20 },
  { id: 2, name: "shirt", price: 50 },
];
let reduced = items.reduce(
  (acc, cur) => ({ ...acc, [cur.id]: cur }),
  {}
);
console.log(reduced);

// 1. set item map (essentially, )

var object = { a: [{ b: { c: 3 } }, 4] };
console.log(_.at(object, ["a[0].b.c", "a[1]"]));

// what the compute does
// applies a function to the model
// or ([{localState}, {globalState}], function)

// e.g.,

const db = {
  users: [
    { id: 1, body: "one", published: false },
    { id: 2, body: "two", published: true },
  ],
  projects: [
    { id: 1, user_id: 1 },
    { id: 2, user_id: 1 },
  ],
  features: [
    { id: 1, user_id: 1, project_id: 1 },
    { id: 2, user_id: 1, project_id: 1 },
  ],
  tasks: [
    { id: 1, user_id: 1, feature_id: 1 },
    { id: 2, user_id: 1, feature_id: 1 },
    { id: 3, user_id: 1, feature_id: 2 },
    { id: 4, user_id: 1, feature_id: 2 },
  ],
  bugs: [
    { id: 1, user_id: 1, task_id: 1 },
    { id: 2, user_id: 1, task_id: 1 },
  ],
};

class Manipulate {
  constructor(model) {
    this.model = model;
  }
  getAllUsersProjects(userId) {
    // return all projects where user_id is 1
    let projects = _.filter(this.model.projects, {
      user_id: userId,
    });
    console.log(projects);
  }
  getAllUsersFeatures(userId) {
    // return all projects where user_id is 1
    let features = _.filter(this.model.features, {
      user_id: userId,
    });
    console.log(features);
    return features;
  }
  getAllUsersBugs(userId) {
    let bugs = _.filter(this.model.bugs, {
      user_id: userId,
    });
    console.log(bugs);
    return bugs;
  }
  getAllUsersTasks(userId) {
    let tasks = _.filter(this.model.tasks, {
      user_id: userId,
    });
    console.log(tasks);
    return tasks;
  }
  getAllProjectsFeatures(projectId) {
    let features = _.filter(this.model.features, {
      project_id: projectId,
    });
    return features;
  }
  getAllFeaturesTasks(featureId) {
    let tasks = _.filter(this.model.tasks, {
      feature_id: featureId,
    });
    console.log(tasks);
    return tasks;
  }
  getAllFeaturesBugs(featureId) {
    let tasks = this.getAllFeaturesTasks(featureId);
    let ids = _.map(tasks, "id");
    let bugs = [];
    for (let i of ids) {
      let getBugs = _.filter(this.model.bugs, {
        task_id: i,
      });
      bugs.push(_.flattenDeep(getBugs));
    }
    let flattened = _.flattenDeep(bugs);
    return flattened;
  }
  getAllProjectsBugs(projectId) {
    let features = this.getAllProjectsFeatures(projectId);
    console.log(features);
    let featureIds = _.map(features, "id");
    console.log(featureIds);
    let taskIds = [];
    for (let i of featureIds) {
      let tasks = this.getAllFeaturesTasks(i);
      console.log(tasks);
      let ids = _.map(tasks, "id");
      taskIds.push(ids);
    }
    taskIds = _.flattenDeep(taskIds);
    console.log(taskIds);
    let bugs = [];
    for (let i of taskIds) {
      let arr = this.getAllTasksBugs(i);
      console.log(bugs);
      bugs.push(_.flattenDeep(arr));
    }
    bugs = _.flattenDeep(bugs);
    return bugs;
  }
  getAllProjectsTasks(projectId) {
    let features = this.getAllProjectsFeatures(projectId);
    console.log(features);
    let featureIds = _.map(features, "id");
    let tasks = [];
    for (let i of featureIds) {
      let getTasks = this.getAllFeaturesTasks(i);
      tasks.push(_.flattenDeep(getTasks));
    }
    let flattened = _.flattenDeep(tasks);
    return flattened;
  }

  getAllTasksBugs(taskId) {
    let bugs = _.filter(this.model.bugs, {
      task_id: taskId,
    });
    return bugs;
  }
}

let projectId = 2;
let featuresArr = [
  { id: 1, user_id: 1, project_id: 1 },
  { id: 2, user_id: 1, project_id: 2 },
];
let tasksArr = [
  { id: 1, user_id: 1, feature_id: 1 },
  { id: 2, user_id: 1, feature_id: 2 },
  { id: 3, user_id: 1, feature_id: 2 },
  { id: 4, user_id: 1, feature_id: 2 },
];
let bugsArr =
 [
  { id: 1, user_id: 1, task_id: 1 },
  { id: 2, user_id: 1, task_id: 2 },
];

let features = _.filter(featuresArr, {
  project_id: projectId,
});
console.log(features);
let featureIds = _.map(features, "id");
console.log("features", features);
let taskIds = [];
for (let i of featureIds) {
  let tasks = _.filter(tasksArr, {
    feature_id: i,
  });
  console.log("able to get each tasks", tasks);
  console.log(tasks);
  let ids = _.map(tasks, "id");
  taskIds.push(ids);
}
taskIds = _.flattenDeep(taskIds);
console.log("get all task ids", taskIds);

let finalBugs = bugsArr.map(function (item) {
  return taskIds.includes(item.id) ? item : [];
  // return
});
console.log(finalBugs);
let bugs = [];
var arrayOfObjects = [
  {
    id: 1,
    name: "bob",
  },
  {
    id: 2,
    name: "sue",
  },
];

var keyValuePairs = { 1: "admin", 2: "user" };
var result = arrayOfObjects.map(function (o) {
  return keyValuePairs[o.id]
    ? Object.assign({}, o, { title: keyValuePairs[o.id] })
    : o;
});

console.log(result);

let doThis = new Manipulate(db);
console.log(doThis);
doThis.getAllUsersProjects(1);
doThis.getAllUsersFeatures(1);
doThis.getAllUsersBugs(1);
doThis.getAllUsersTasks(1);
doThis.getAllProjectsFeatures(1);
doThis.getAllProjectsBugs(1);
doThis.getAllProjectsTasks(1);
doThis.getAllFeaturesBugs(1);
doThis.getAllFeaturesTasks(1);
doThis.getAllTasksBugs(1);
