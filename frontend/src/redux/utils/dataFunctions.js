function manipulateData(array) {
  for (let i = 0; i < array.length; i++) {
    // console.log(i);
    let num = i + 1;
    delete array[i].username;
    array[i]["user_id"] = 1;
    array[i]["task_id"] = num;
  }
  //   console.log(array);
  return array;
}

// manipulateData(arr, 29, 8);

export const INIT_BUGS = [
  {
    id: 1,
    username: "lezzles",
    problem: "Finish the app",
    whatshouldbe:
      "You should be finished with components with friday",
    whatactuallyis: "getting distracted",
    hypothesis: "no clear roadmap",
    plan: "make a plan - 1. finish components, backend then deploy",
    days: 0,
    hours: 1,
    minutes: 13,
    seconds: 12,
    created: "2021-11-08T03:02:43.366Z",
  },
  {
    id: 2,
    username: "lezzles",
    problem: "What the fuck am I doing ",
    whatshouldbe:
      "I should be actually foucsing on the fucking html css",
    whatactuallyis: "i'm just coding random shit ",
    hypothesis: "okay finish this loool",
    plan: "i know i know i just want to do the timer thing",
    days: 0,
    hours: 0,
    minutes: 19,
    seconds: 27,
    created: "2021-11-08T03:03:02.544Z",
  },
  {
    id: 3,
    username: "lezzles",
    problem:
      "Think I will finalize the reset app and then actually just convert it into react native ",
    whatshouldbe: "Finishing something",
    whatactuallyis:
      "I think the ionic framework is taking too long",
    hypothesis:
      "Maybe utilizing something I'm more comfortable with ",
    plan: "Create react app with regular react  --- wow i'm not crazy i just spend a lot of time thinking about work",
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
    created: "2021-11-08T08:37:21.665Z",
  },
  {
    id: 4,
    username: "lezzles",
    problem:
      "hanging out with people                       ",
    whatshouldbe: "don't hang out with people",
    whatactuallyis: "im' hanging out with too many people",
    hypothesis: "stop eating",
    plan: "stop eatin g",
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
    created: "2021-11-08T14:11:11.162Z",
  },
  {
    id: 5,
    username: "lezzles",
    problem: "how i feel about mustafa, or what i expect ",
    whatshouldbe:
      "i should expect less, or at least be more serious",
    whatactuallyis: "i'm not being serious with hi",
    hypothesis: "i think it's because i'm insecure",
    plan: "just be more serious lol is that bad?",
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
    created: "2021-11-08T14:12:17.703Z",
  },
  {
    id: 12,
    username: "lezzles",
    problem:
      "People can't see my bugs, or see the process ",
    whatshouldbe: "I should also be able to learn",
    whatactuallyis: "I'm kind of repeating my mistakes",
    hypothesis: "tags input",
    plan: "Add tag here, also, can fetch from postgres data base, and then create a readme file in lezzles, push it onto github and then also create a markdown file lOOOOOOl",
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
    created: "2021-11-10T14:14:58.310Z",
  },
  {
    id: 7,
    username: "lezzles",
    problem: "i miss musty                       ",
    whatshouldbe: "i should be happywith him             ",
    whatactuallyis: "he's not happy - am I happy?",
    hypothesis:
      "i think i need to text him more            ",
    plan: "text him more during the day lol",
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
    created: "2021-11-08T15:15:54.840Z",
  },
  {
    id: 13,
    username: "lezzles",
    problem: "People can't see my bugs, or see the process",
    whatshouldbe:
      "tags input - 'I should also be able to learn",
    whatactuallyis:
      "I'm kind of repeating my mistakes - and then just more easily see the problems and solutions from before",
    hypothesis:
      "Add tag here, fetch pg, create readme, push and then also create a markdown file lOOOOOO",
    plan: "Add a problem database to optee",
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
    created: "2021-11-10T14:17:05.357Z",
  },
  {
    id: 14,
    username: "lezzles",
    problem: "Can't test components with thunk",
    whatshouldbe: "I should be able to call a mock service",
    whatactuallyis: "but I can't???",
    hypothesis:
      "combine the two services, see what happens?",
    plan: "",
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
    created: "2021-11-10T18:32:18.891Z",
  },
  {
    id: 6,
    username: "lezzles",
    problem: "not building optee                        ",
    whatshouldbe: "build optee            ",
    whatactuallyis:
      "              not building it            ",
    hypothesis: "okay, make a timeline            ",
    plan: "finish all frontend components",
    days: 0,
    hours: 2,
    minutes: 19,
    seconds: 11,
    created: "2021-11-08T14:20:01.296Z",
  },
  {
    id: 8,
    username: "lezzles",
    problem: "testing is taking forever",
    whatshouldbe: "it should be faster",
    whatactuallyis:
      "its taking forever but i think its worth it okay at ten we'll work on assignment",
    hypothesis: "just chill and enjoy this ",
    plan: "focus on testing the components - it's the fucking selectors - how do we render??",
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
    created: "2021-11-09T22:54:12.622Z",
  },
  {
    id: 9,
    username: "lezzles",
    problem: "long term maintability for portfolio",
    whatshouldbe: "",
    whatactuallyis: "just use html pages",
    hypothesis: "just create a easy to see projects",
    plan: "do this within 30 minutes lol",
    days: 0,
    hours: 1,
    minutes: 0,
    seconds: 0,
    created: "2021-11-10T12:22:24.594Z",
  },
  {
    id: 10,
    username: "lezzles",
    problem: "Not creating optee ",
    whatshouldbe:
      "Focus more on optee, like just focus on doing the ui dude",
    whatactuallyis: "I'm getting distracted",
    hypothesis: "Finish UI",
    plan: "focus on ui",
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
    created: "2021-11-10T14:07:34.736Z",
  },
  {
    id: 11,
    username: "lezzles",
    problem: "Add a todo list on here",
    whatshouldbe: "I think this is like optee loool",
    whatactuallyis:
      "I think that I need to do what I'm good at, which is like, doing things I feel strongly about ",
    hypothesis: "Focus on doing this, add a checklist here",
    plan: "Add a checklist here - how do I add a checklist to each project here? What would actually make sense? How would I connect this to readme.md, and then render it accordingly so it would update with my projects?",
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
    created: "2021-11-10T14:09:06.525Z",
  },
];

console.log(manipulateData(INIT_BUGS));
