const codepens = [
  {
    title: "feedback",
    link: "https://codepen.io/aaroniker/pen/mdyYBPP",
    importance: "med",
    sparkJoy: true,
    where: "Dashboard",
    component: "Rating",
    reference: true,
  },
  {
    title: "layout",
    component: "Layout",
    sparkJoy: false,
    subtitle: "materialuilayout",
    link: "https://codesandbox.io/embed/material-ui-layout-7mn9xq3nnj?file:/src/index.js",
    importance: "high",
  },
  {
    title: "layout",
    component: "Layout",
    subtitle: "coolfreelayouts",
    link: "https://react.semantic-ui.com/layouts/",
    importance: "high",
  },
  {
    title: "layout",
    component: "Layout",
    subtitle: "cardlayout",
    link: "https://codepen.io/simeydotme/pen/rNVaOap",
    importance: "high",
  },
  {
    simple: true,
    component: "Transition",
    title: "transitionsAndModals",
    subtitle: "transitions",
    link: "https://codesandbox.io/embed/zsk52",
    importance: "medium",
  },
  {
    component: "Modal",
    simple: true,
    title: "transitionsAndModals",
    subtitle: "withreactrouter",
    link: "https://codesandbox.io/embed/react-page-transitions-1jgim?from-embed",
    importance: "medium",
  },
  {
    title: "texttransitions",
    link: "https://codesandbox.io/embed/react-router-gsap-page-transitions-3ev3k",
    importance: "high",
    simple: true,
    sparkJoy: true,
    component: "Text",
  },
  {
    title: "texttransitions",
    simple: true,
    where: "Tasks",
    component: "Transition",
    subtitle: "colors",
    link: "https://codesandbox.io/embed/github/darbley/react-page-slide-transitions/tree/master/?from-embed",
    importance: "high",
  },
  {
    component: "Text",
    title: "font",
    link: "https://codepen.io/jpamental/pen/VEYzxO",
    importance: "medium",
  },
  {
    title: "font",
    component: "Information",
    subtitle: "bookblog",
    link: "https://codepen.io/MadeByMike/pen/GmBLKo",
    importance: "medium",
  },
  {
    title: "font",
    subtitle: "hover",
    sparkJoy: true,
    where: "Home",
    component: "Information",
    reference: true,
    link: "https://codepen.io/lisilinhart/pen/MoLxxp",
    importance: "med",
  },
  {
    title: "draganddrop",
    sparkJoy: true,
    component: "Layout",
    simple: true,
    where: "All",
    link: "https://codesandbox.io/embed/github/guandjoy/rudl-demo/tree/master/",
    importance: "medium",
  },
  {
    title: "draganddrop",
    simple: true,
    sparkJoy: true,
    component: "Bugs",
    subtitle: "draganddropcircles",
    link: "https://codesandbox.io/embed/framer-motion-dnd-y2wxq",
    importance: "medium",
  },
  {
    title: "draganddrop",
    simple: true,
    sparkJoy: true,
    component: "Drag and Drop",
    where: "Features",
    subtitle: "dragtoreorder",
    link: "https://codesandbox.io/embed/framer-motion-5-drag-to-reorder-lists-uonye",
    importance: "medium",
  },
  {
    title: "clickonprojects",
    subtitle: "",
    component: "Text",
    simple: true,
    link: "https://codesandbox.io/embed/scroll-animation-with-react-spring-forked-ekxlf",
    importance: "low",
  },
  {
    title: "Focus On Features Circle ",
    component: "Transition",
    sparkJoy: true,
    simple: true,
    subtitle: "clicktomovehover",
    link: "https://codesandbox.io/embed/framer-motion-2-animatesharedlayout-animate-between-different-components-dy0bv?file:/src/App.js",
    importance: "low",
  },
  {
    title: "nav",
    sparkJoy: true,
    simple: true,
    component: "Navbar",
    link: "https://codesandbox.io/embed/framer-motion-page-transition-jb7d0",
    importance: "high",
  },
  {
    title: "purecssform",
    where: "Features",
    sparkJoy: true,
    component: "Form",
    link: "https://codepen.io/team/css-tricks/pen/XBmazq",
    importance: "high",
  },
  {
    title: "Navbar Dropdpown",
    sparkJoy: true,
    simple: true,
    component: "Dropdown",
    link: "https://codesandbox.io/embed/framer-motion-radix-menu-forked-02z77",
    importance: "low",
  },
  {
    title: "dropdowns",
    reference: true,
    sparkJoy: true,
    simple: true,
    component: "Select",
    subtitle: "awesomelibrary",
    link: "https://react.semantic-ui.com/modules/dropdown/",
    importance: "low",
  },
  {
    simple: true,
    where: "Timer",
    component: "Card",
    title: "tasksemphasis",
    subtitle: "cardemphasis",
    link: "https://codepen.io/hexagoncircle/pen/jgGxKR",
    importance: "high",
  },
  {
    title: "tasksemphasis",
    sparkJoy: true,
    component: "Cursor",
    subtitle: "hoveronempahsis",
    link: "https://codepen.io/eglenfield/pen/jObJjYR",
    importance: "high",
  },
  {
    title: "dragtoview",
    component: "Drag",
    link: "https://codesandbox.io/embed/framer-motion-apple-watch-app-menu-mq8s8",
    importance: "low",
  },
  {
    title: "Accordian",
    link: "https://codesandbox.io/embed/framer-motion-list-transitions-forked-nqd2r",
    importance: "low",
    component: "List",
  },
  {
    component: "Slide",
    title: "swipetodelete",
    link: "https://codesandbox.io/embed/the-framer-book-example-animations-35-swipe-to-delete-z9hqi?file:/src/index.js",
    importance: "low",
  },
  {
    title: "cards",
    link: "https://codesandbox.io/embed/react-spring-list-tzeze",
    importance: "high",
    component: "List",
  },
  {
    title: "Google Layout",
    component: "Layout",
    subtitle: "",
    link: "https://codesandbox.io/embed/mmut9",
    importance: "high",
  },
  {
    title: "cards",
    subtitle: "shakycards",
    link: "https://codesandbox.io/embed/6jlvz1j5q3",
    importance: "high",
    component: "Card",
    where: "Bugs",
    sparkJoy: true,
    simple: true,
  },
  {
    title: "buttons",
    component: "Button",
    simple: true,
    sparkJoy: true,
    where: "Modal",
    link: "https://codesandbox.io/embed/hamburger-menu-with-framer-motion-iwxtp",
    importance: "high",
  },
  {
    component: "Scroll",
    title: "Click to Scroll, Cool Hover",
    subtitle: "hover",
    link: "https://codepen.io/giannotr/pen/GPgKpK",
    importance: "high",
  },
  {
    title: "Nav Buttons Hover",
    sparkJoy: true,
    simple: false,
    component: "Button",
    subtitle: "fav",
    link: "https://codepen.io/oliviale/pen/gKParr",
    importance: "high",
  },
  {
    title: "buttons",
    link: "socialmedia",
    importance: "high",
  },
  {
    title: "playbutton",
    subtitle: "",
    component: "Button",
    link: "https://codesandbox.io/embed/llvqmkxnkz",
    importance: "",
  },
  {
    component: "Button",
    title: "Play SVG Button",
    subtitle: "changessvgbubtton",
    link: "https://codepen.io/Zaku/pen/YjRqzB",
    importance: "",
  },
  {
    title: "playbutton",
    simple: true,
    sparkJoy: true,
    component: "Button",
    where: "All",
    link: "https://codepen.io/pirrera/pen/bqVeGx",
    subtitle: "THISISITCALM",
    importance: "high",
  },
  {
    title: "loadingcards",
    simple: true,
    sparkJoy: true,
    component: "Cards",
    subtitle: "cutecards",
    link: "https://codepen.io/juliepark/pen/vjMOKQ",
    importance: "medium",
  },
  {
    title: "loadingcards",
    component: "Progress",
    sparkJoy: true,
    subtitle: "dayweekmonth",
    link: "https://codepen.io/lewisvrobinson/pen/WJpzMZ",
    importance: "medium",
  },
  {
    title: "reactsuspense",
    sparkJoy: true,
    reference: true,
    component: "Loader",
    link: "https://codesandbox.io/embed/4wnpo9oy4",
    importance: "high",
  },
  {
    title: "reactsuspense",
    subtitle: "reactrouter",
    sparkJoy: true,
    reference: true,
    component: "Loader",
    link: "https://codesandbox.io/embed/j4wrxnm14v",
    importance: "high",
  },
  {
    title: "reactsuspense",
    subtitle: "reactrouter",
    sparkJoy: true,
    reference: true,
    component: "Loader",
    link: "https://codesandbox.io/s/react-suspense-esc8w",
    importance: "high",
  },
  {
    title: "Loading",
    subtitle: "loaddata",
    reference: true,
    component: "Loader",
    link: "https://codesandbox.io/embed/8nq4w3jj39",
    importance: "high",
  },
  {
    title: "Input Label",
    component: "Input",
    simple: true,
    link: "https://codesandbox.io/embed/r0kzgevzk",
    importance: "",
  },
  {
    sparkJoy: true,
    simple: true,
    component: "Input",
    title: "Editable Text",
    subtitle: "clicktoedit",
    link: "https://codepen.io/mjunaidi/pen/KXKNmv",
    importance: "",
  },
  {
    sparkJoy: true,
    component: "Input",
    title: "Line Slides on Input",
    subtitle: "linechanges",
    link: "https://codepen.io/ainalem/pen/EQXjOR",
    importance: "",
  },
  {
    title: "toggles",
    component: "Checkbox",
    link: "https://codesandbox.io/embed/y0x4k4qjwz",
    importance: "low",
  },
  {
    title: "Toggle Card, Cool How it pops up",
    simple: true,
    where: "EachBug",
    component: "Card",
    sparkJoy: true,
    subtitle: "togglecard",
    link: "https://codepen.io/janeRivas/pen/pZjxoa",
    importance: "low",
  },
  {
    title: "toggles",
    sparkJoy: true,
    component: "Checkbox",
    subtitle: "dayandnight",
    link: "https://codepen.io/borntofrappe/pen/aboPapm",
    importance: "low",
  },
  {
    title: "template",
    component: "Layout",
    simple: true,
    reference: true,
    link: "https://codesandbox.io/embed/hack4impact-website-0kn5m",
    importance: "high",
  },
  {
    title: "template",
    sparkJoy: true,
    simple: true,
    component: "Layout",
    where: "All",
    subtitle: "mui",
    link: "https://mui.com/getting-started/templates/",
    importance: "high",
  },
  {
    title: "template",
    sparkJoy: true,
    where: "Features",
    component: "Layout",
    subtitle: "verysimplelayout",
    link: "https://codepen.io/kathykato/pen/KRQOKY",
    importance: "high",
  },
  {
    title: "template",
    component: "Layout",
    sparkJoy: true,
    where: "Bugs",
    subtitle: "thisisitforbugs",
    link: "https://codepen.io/mxbck/pen/ERNwBy",
    importance: "high",
  },
  {
    title: "tabs",
    component: "Tabs",
    sparkJoy: true,
    simple: true,
    link: "https://codesandbox.io/embed/festive-ramanujan-byw7s",
    importance: "hig",
  },
  {
    title: "tabs",
    subtitle: "tabs",
    link: "https://codesandbox.io/embed/framer-motion-animated-tabs-jkckb",
    importance: "high",
    component: "Tabs",
    simple: true,
  },
  {
    title: "tabs",
    component: "Navbar",
    sparkJoy: true,
    where: "Projects",
    subtitle: "tabsthatmoveupanddown",
    link: "https://codepen.io/ettrics/pen/WRbGRN",
    importance: "hig",
  },
  {
    title: "Template Of Cards",
    component: "Layout",
    link: "https://codesandbox.io/embed/631sl",
    importance: "high",
    sparkJoy: true,
    simple: true,
  },
  {
    title: "scrolltoreveal",
    subtitle: "coolscroll",
    link: "https://codesandbox.io/embed/flexboxyoga-in-webgl-7psew",
    importance: "high",
    sparkJoy: true,
    component: "Layout",
  },
  {
    title: "hover",
    subtitle: "buttonhover",
    link: "https://codepen.io/avstorm/pen/oqKbLq",
    importance: "medium",
    simple: true,
    sparkJoy: true,
    component: "Button",
    where: "Login",
  },
  {
    title: "Hello Button",
    component: "Button",
    simple: false,
    subtitle: "Hello Button",
    link: "https://codepen.io/short/pen/VyNqPa",
    importance: "medium",
  },
  {
    title: "Download Button",
    subtitle: "downloadbutton",
    link: "https://codepen.io/cobra_winfrey/pen/opZgWL",
    importance: "medium",
    sparkJoy: true,
    simple: false,
    where: "Tasks",
    component: "Button",
  },
  {
    title: "graphs",
    component: "Data",
    link: "https://codesandbox.io/embed/z6r7qj8wm",
    importance: "med",
  },
  {
    title: "graphs",
    subtitle: "cool",
    component: "Data",
    link: "https://codepen.io/hougasian/pen/vewKaX",
    importance: "hig",
  },
  {
    sparkJoy: true,
    simple: true,
    component: "Calendar",
    where: "Calendar",
    title: "MUI Calendar",
    link: "https://codesandbox.io/embed/0y4zvoxl8v",
    importance: "",
  },
  {
    title: "calendar",
    component: "Calendar",
    sparkJoy: true,
    subtitle: "timeline",
    link: "https://codepen.io/team/amcharts/pen/ExjbjbJ",
    importance: "",
  },
  {
    title: "codeeditor",
    link: "https://codesandbox.io/embed/r1y0z1mx4",
    importance: "",
    component: "Text",
  },
  {
    title: "purecssstory",
    simple: false,
    component: "Card",
    link: "https://codepen.io/jcoulterdesign/pen/oRRRPY",
    importance: "",
  },
  {
    sparkJoy: true,
    where: "Projects",
    component: "Image",
    title: "images",
    link: "https://codesandbox.io/embed/framer-motion-lazy-load-images-bx1je?file:/src/App.js",
    importance: "high",
  },
  {
    title: "Clock with progress rings",
    component: "Progress",
    link: "https://codesandbox.io/embed/react-progress-rings-clock-69z4j",
    importance: "high",
  },
  {
    sparkJoy: true,
    component: "Navbar",
    where: "Features",
    title: "progress",
    subtitle: "FUCKINGCOOL",
    link: "https://codepen.io/hakimel/pen/BpKNPg",
    importance: "high",
  },
  {
    title: "progress",
    component: "Progress",
    simple: false,
    subtitle: "draggable",
    link: "https://codepen.io/lmgonzalves/pen/NyzKdr",
    importance: "high",
  },
  {
    title: "colors",
    simple: true,
    sparkJoy: true,
    component: "Picker",
    where: "All",
    link: "https://casesandberg.github.io/react-color/",
    importance: "high",
  },
  {
    title: "tables",
    sparkJoy: true,
    where: "All",
    simple: true,
    component: "Table",
    link: "https://codesandbox.io/embed/429yzl5pj7?file:/src/index.js",
    importance: "high",
  },
  {
    title: "tables",
    subtitle: "",
    component: "Table",
    link: "https://codesandbox.io/embed/material-ui-editable-tables-wsp0c",
    importance: "high",
  },
  {
    title: "Framer Animation Reference",
    reference: true,
    component: "Card",
    link: "https://codesandbox.io/embed/framer-motion-basic-usage-90q89",
    importance: "high",
  },
  {
    component: "Data",
    where: "Dashboard",
    simple: true,
    title: "dashboard",
    link: "http://dashboards.webkom.co/react/airframe/dashboards/projects",
    importance: "high",
  },
  {
    component: "Data",
    title: "diagrams",
    link: "https://antonioru.github.io/beautiful-react-diagrams/#/Schema",
    importance: "high",
  },
  {
    title: "checkbox",
    sparkJoy: true,
    component: "Checkbox",
    where: "Settings",
    link: "https://codepen.io/finnhvman/pen/zpygBB",
    importance: "high",
  },
  {
    title: "uploadfile",
    sparkJoy: false,
    where: "Projects",
    component: "Input",
    link: "https://codepen.io/seyedi/pen/KvObJq",
    importance: "high",
  },
  {
    title: "stepper",
    sparkJoy: true,
    where: "Features",
    component: "Stepper",
    reference: false,
    subtitle: "reallycooolstepper",
    link: "https://codepen.io/jcoulterdesign/pen/zdwajv",
    importance: "med",
  },
  {
    title: "search",
    reference: false,
    sparkJoy: false,
    component: "Input",
    where: "Projects",
    subtitle: "animatedsearch",
    link: "https://codepen.io/jkantner/pen/eYmvvqQ",
    importance: "",
  },
  {
    title: "Cursor Tool",
    component: "Cursor",
    reference: true,
    sparkJoy: false,
    where: "",
    link: "https://codepen.io/ethanselzer/pen/ryayLK",
    importance: "",
  },
  {
    component: "Card",
    title: "currenttask",
    link: "https://codepen.io/StephenScaff/pen/egOedp",
    importance: "",
  },
  {
    component: "Cursor",
    title: "currenttask",
    subtitle: "focusonhover",
    link: "https://codepen.io/noeldelgado/pen/PZJGLx",
    importance: "",
  },
  {
    sparkJoy: true,
    component: "All",
    title: "animation keyframes",
    subtitle: "cssanimations",
    reference: true,
    link: "https://codepen.io/prvnbist/pen/zRMaeK",
    importance: "https://codepen.io/du5rte/pen/KrGjEm",
  },
  {
    title: "cursorhighlight",
    link: "https://codepen.io/andrewchmr-the-vuer/pen/GRZjbbB",
    sparkJoy: true,
    reference: true,
    where: "All",
    component: "Cursor",
    importance: "high",
  },
  {
    component: "Cursor",
    title: "cursorhighlight",
    subtitle: "colorchanges",
    link: "https://codesandbox.io/embed/cursor-y71mi",
    importance: "",
  },
  {
    title: "Back and Forth Cursor",
    simple: true,
    sparkJoy: true,
    component: "Cursor",
    where: "All",
    subtitle: "backandforward",
    link: "https://codesandbox.io/embed/react-custom-cursor-2v06n",
    importance: "",
  },
  {
    title: "JS Array instructions",
    link: "https://codepen.io/sdras/pen/gogVRX",
    sparkJoy: true,
    where: "",
    component: "",
    reference: false,
    importance: "",
  },
  {
    title: "list",
    sparkJoy: true,
    where: "Task",
    component: "DoneItem",
    link: "https://codepen.io/aaroniker/pen/WKbzgx",
    importance: "high",
  },
  {
    title: "list",
    sparkJoy: false,
    where: "Task",
    component: "DoneItem",
    subtitle: "coollist",
    link: "https://codepen.io/nerdmanship/pen/veWyKg",
    importance: "high",
  },
  {
    title: "To Do List",
    sparkJoy: true,
    where: "Task",
    component: "DoneItem",
    subtitle: "checkofflist",
    link: "https://codepen.io/shshaw/pen/WXMdwE",
    importance: "high",
  },
  {
    title: "list",
    where: "",
    component: "",
    subtitle: "purecsscheck",
    link: "https://codepen.io/milanraring/pen/QWbqBGo",
    importance: "high",
  },
  {
    title: "404",
    sparkJoy: true,
    where: "Error",
    component: "Page",
    link: "https://codepen.io/dsenneff/pen/mjZgmN",
    importance: "",
  },
  {
    title: "grid organize",
    sparkJoy: true,
    where: "",
    component: "",
    reference: true,
    importance: "",
    link: "https://codepen.io/stacy/pen/YGxoEG",
  },
  {
    title: "gridd",
    reference: true,
    sparkJoy: false,
    component: "Layout",
    subtitle: "flex",
    link: "https://codepen.io/enxaneta/pen/adLPwv",
    importance: "",
  },
  {
    sparkJoy: false,
    organized: true,
    where: "All",
    component: "Loader",
    reference: false,
    title: "Walking Loader",
    link: "https://codepen.io/finnhvman/pen/bmNdNr",
    importance: "Low",
  },
  {
    title: "Walking Loader",
    subtitle: "loadercollection",
    sparkJoy: false,
    organized: true,
    where: "All",
    component: "Loader",
    reference: false,
    link: "https://codepen.io/chrisgannon/pen/VvJjgY",
    importance: "",
  },
  {
    title: "purecssloader",
    sparkJoy: true,
    simple: true,
    component: "Loader",
    subtitle: "https://codepen.io/tomhazledine/pen/BKrXwJ",
    link: "loaders",
    importance: "",
  },
  {
    title: "purecssloader",
    simple: true,
    component: "Loader",
    where: "Page",
    subtitle: "videoloader",
    link: "https://codepen.io/woodwoerk/pen/LpLwRP",
    importance: "",
  },
  {
    title: "navbar",
    link: "https://codesandbox.io/embed/framer-motion-animatesharedlayout-menu-underline-demo-y6tl3",
    simple: true,
    sparkJoy: true,
    where: "All",
    component: "Navbar",
    importance: "",
  },
  {
    title: "navbar",
    sparkJoy: true,
    organized: true,
    where: "Navbar",
    component: "Button",
    subtitle: "buttons",
    link: "https://codepen.io/ainalem/pen/LJYRxz",
    importance: "",
  },
  {
    title: "loaders",
    reference: true,
    component: "Loader",
    subtitle: "",
    link: "https://codepen.io/collection/HtAne?cursor:ZD0xJm89MSZwPTEmdj03MQ::",
    importance: "",
  },
  {
    title: "Grid",
    reference: true,
    component: "Layout",
    subtitle: "gridcollections",
    link: "https://codepen.io/collection/XRRJGq?cursor:ZD0xJm89MSZwPTEmdj0xNQ::",
    importance: "",
  },
  {
    title: "Grid",
    reference: true,
    component: "Layout",
    subtitle: "grid",
    link: "https://codepen.io/collection/DgwjNL?cursor:ZD0xJm89MSZwPTEmdj04",
    importance: "",
  },
  {
    link: "https://codepen.io/suez/embed/AXQaEg",
    title: "Click and Expand Card",
    component: "Card",
    where: "Project",
    importance: "",
    sparkJoy: true,
    simple: false,
  },
  {
    link: "https://react-beautiful-dnd.netlify.app/?path:/story/tables--with-custom-portal",
    title: "Awesome Draggable Library",
    component: "Drag",
    importance: "high",
    sparkJoy: true,
    simple: true,
  },
  {
    link: "https://codesandbox.io/s/react-grid-layout-d9n8q",
    component: "Card",
    title: "Add Card and it'll slowly come out",
    importance: "low",
    sparkJoy: false,
    simple: true,
  },
  {
    title: "Comment Card",
    link: "https://codepen.io/sdras/embed/zYqvJqy",
    where: "All",
    importance: "low",
    component: "Card",
    sparkJoy: true,
    simple: true,
  },
  {
    link: "https://codesandbox.io/s/9onoj",
    title: "Card click will expand",
    importance: "low",
    sparkJoy: false,
    component: "Card",
    simple: false,
  },
  {
    link: "https://codepen.io/himalayasingh/embed/QZKqOX",
    title: "music player",
    component: "Widget",
    importance: "low",
    sparkJoy: true,
    simple: false,
  },
];

function manipulate(codepens) {
  let getArr = [];
  for (let i = 0; i < codepens.length; i++) {
    let important = codepens[i].importance
      ? codepens[i].importance
      : "";
    let sparkJoy = codepens[i].sparkJoy
      ? codepens[i].sparkJoy
      : false;
    let location = codepens[i].where
      ? codepens[i].where
      : "";
    let component = codepens[i].component
      ? codepens[i].component
      : "NotAssigned";
    let simple = codepens[i].simple
      ? codepens[i].simple
      : false;
    let reference = codepens[i].reference
      ? codepens[i].reference
      : false;
    const dirtyData = {
      title: codepens[i].title,
      link: codepens[i].link,
      importance: important,
      sparkJoy: sparkJoy,
      where: location,
      component: component,
      reference: reference,
    };
    getArr.push(dirtyData);
  }
  return getArr;
}

console.log(manipulate(codepens));
