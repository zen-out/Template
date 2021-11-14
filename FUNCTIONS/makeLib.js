const _ = require("lodash");
const data = [
  {
    title: "feedback",
    name: "feedback",
    link: "https://codepen.io/aaroniker/details/mdyYBPP",
  },
  {
    title: "layout",
    name: "layout",
    link: "https://codesandbox.io/s/material-ui-layout-7mn9xq3nnj?from-embed",
    importance: "high",
    link2:
      "https://codesandbox.io/s/material-ui-layout-7mn9xq3nnj?file:/src/index.js",
    name2: "materialuilayout",
    name3: "coolfreelayouts",
    link3: "https://react.semantic-ui.com/layouts/",
    name4: "cardlayout",
    link4: "https://codepen.io/simeydotme/details/rNVaOap",
  },
  {
    name: "transitionsAndModals",
    link: "https://codesandbox.io/s/react-page-transitions-1jgim?from-embed",
    importance: "medium",
    link2: "https://codesandbox.io/s/zsk52",
    name2: "transitions",
    name3: "withreactrouter",
    link3:
      "https://codesandbox.io/s/react-page-transitions-1jgim?from-embed",
  },
  {
    name: "texttransitions",
    link: "https://codesandbox.io/s/react-router-gsap-page-transitions-3ev3k",
    importance: "high",
    link2:
      "https://codesandbox.io/s/github/darbley/react-page-slide-transitions/tree/master/?from-embed",
    name2: "colors",
    link3: "",
    name3: "",
  },
  {
    name: "font",
    link: "https://codepen.io/jpamental/details/VEYzxO",
    name2: "bookblog",
    importance: "medium",
    link2: "https://codepen.io/MadeByMike/details/GmBLKo",
    link3: "https://codepen.io/lisilinhart/embed/MoLxxp",
    name3: "hover",
  },
  {
    name: "draganddrop",
    link: "https://codesandbox.io/s/github/guandjoy/rudl-demo/tree/master/",
    importance: "medium",
    link2:
      "https://codesandbox.io/s/framer-motion-dnd-y2wxq",
    name2: "draganddropcircles",
    link3:
      "https://codesandbox.io/s/framer-motion-5-drag-to-reorder-lists-uonye",
    name3: "dragtoreorder",
  },

  {
    name: "clickonprojects",
    link: "https://codesandbox.io/s/1p7o2",
    importance: "low",
    link2:
      "https://codesandbox.io/s/scroll-animation-with-react-spring-forked-ekxlf",
    name2: "",
    name3: "clicktomovehover",
    link3:
      "https://codesandbox.io/s/framer-motion-2-animatesharedlayout-animate-between-different-components-dy0bv?file:/src/App.js",
  },

  {
    name: "nav",
    link: "https://codesandbox.io/s/framer-motion-page-transition-jb7d0",
    importance: "high",
    link2: "",
    name2: "",
  },

  {
    importance: "high",
    link: "https://codepen.io/team/css-tricks/embed/XBmazq",
    name: "purecssform",
  },

  {
    name: "dropdowns",
    link: "https://codesandbox.io/s/framer-motion-radix-menu-forked-02z77",
    importance: "low",
    link2:
      "https://react.semantic-ui.com/modules/dropdown/",
    name2: "awesomelibrary",
  },

  {
    name: "tasksemphasis",
    link: "https://codesandbox.io/s/framer-motion-shaking-9ovl4",
    importance: "high",
    link2: "https://codepen.io/hexagoncircle/embed/jgGxKR",
    name2: "cardemphasis",
    link3: "https://codepen.io/eglenfield/embed/jObJjYR",
    name3: "hoveronempahsis",
  },

  {
    name: "dragtoview",
    link: "https://codesandbox.io/s/framer-motion-apple-watch-app-menu-mq8s8",
    importance: "low",
    link2: "",
    name2: "",
  },

  {
    name: "Accordian",
    link: "https://codesandbox.io/s/framer-motion-list-transitions-forked-nqd2r",
    importance: "low",
  },
  {
    name: "swipetodelete",
    link: "https://codesandbox.io/s/the-framer-book-example-animations-35-swipe-to-delete-z9hqi?file:/src/index.js",
    importance: "low",
  },
  {
    name: "cards",
    link: "https://codesandbox.io/s/react-spring-list-tzeze",
    importance: "high",
    link2: "https://codesandbox.io/s/mmut9",
    name2: "",
    name3: "shakycards",
    link3: "https://codesandbox.io/s/6jlvz1j5q3",
  },
  {
    name: "buttons",
    link: "https://codesandbox.io/s/hamburger-menu-with-framer-motion-iwxtp",
    importance: "high",
    link2: "https://codepen.io/giannotr/embed/GPgKpK",
    name2: "hover",
    link3: "https://codepen.io/oliviale/embed/gKParr",
    name3: "fav",
    link4: "https://codepen.io/tstoik/details/EjMzRZ",
    link4: "socialmedia",
  },
  {
    name: "playbutton",
    link: "https://codesandbox.io/s/8l667ln690",
    importance: "",
    link2: "https://codesandbox.io/s/llvqmkxnkz",
    name2: "",
    link3: "https://codepen.io/Zaku/embed/YjRqzB",
    name3: "changessvgbubtton",
    link4: "THISISITCALM",
    name4: "https://codepen.io/pirrera/embed/bqVeGx",
  },
  {
    name: "loadingcards",
    link: "https://codesandbox.io/s/create-an-animated-skeleton-loader-in-reactjs-t6hsc?from-embed",
    importance: "medium",
    link2: "https://codepen.io/juliepark/embed/vjMOKQ",
    name2: "cutecards",
    link3: "https://codepen.io/lewisvrobinson/embed/WJpzMZ",
    name3: "dayweekmonth",
  },
  {
    name: "reactsuspense",
    link: "https://codesandbox.io/s/4wnpo9oy4",
    importance: "high",
    link2: "https://codesandbox.io/s/j4wrxnm14v",
    name2: "reactrouter",
    link3: "https://codesandbox.io/s/8nq4w3jj39",
    name3: "loaddata",
  },
  {
    name: "inputs",
    link: "https://codesandbox.io/s/r0kzgevzk",
    importance: "",
    link2: "https://codepen.io/mjunaidi/embed/KXKNmv",
    name2: "clicktoedit",
    link3: "https://codepen.io/ainalem/embed/EQXjOR",
    name3: "linechanges",
  },
  {
    name: "toggles",
    link: "https://codesandbox.io/s/y0x4k4qjwz",
    importance: "low",
    link2: "https://codepen.io/janeRivas/embed/pZjxoa",
    name2: "togglecard",
    link3: "https://codepen.io/borntofrappe/embed/aboPapm",
    name3: "dayandnight",
  },
  {
    name: "template",
    link: "https://codesandbox.io/s/hack4impact-website-0kn5m",
    importance: "high",
    link2: "https://mui.com/getting-started/templates/",
    name2: "mui",
    link3: "https://codepen.io/kathykato/embed/KRQOKY",
    name3: "verysimplelayout",
    name4: "thisisitforbugs",
    link4: "https://codepen.io/mxbck/embed/ERNwBy",
  },
  {
    name: "tabs",
    link: "https://codesandbox.io/s/festive-ramanujan-byw7s",
    importance: "hig",
    link2:
      "https://codesandbox.io/s/framer-motion-animated-tabs-jkckb",
    name2: "tabs",
    link3: "https://codepen.io/ettrics/embed/WRbGRN",
    name3: "tabsthatmoveupanddown",
  },
  {
    name: "scrolltoreveal",
    link: "https://codesandbox.io/s/631sl",
    importance: "hig",
    link2:
      "https://codesandbox.io/s/flexboxyoga-in-webgl-7psew",
    name2: "coolscroll",
    link3: "",
    name3: "",
  },
  {
    name: "hover",
    link: "https://codesandbox.io/s/message-hover-animation-i0op9",
    importance: "medium",
    link2: "https://codepen.io/avstorm/embed/oqKbLq",
    name2: "buttonhover",
    link3: "https://codepen.io/short/embed/VyNqPa",
    name3: "coolbtutonhover",
    link4: "https://codepen.io/cobra_winfrey/embed/opZgWL",
    name4: "downloadbutton",
  },
  {
    name: "graphs",
    link: "https://codesandbox.io/s/z6r7qj8wm",
    importance: "hig",
    link3: "https://codepen.io/hougasian/embed/vewKaX",
    name3: "cool",
  },
  {
    name: "calendar",
    link: "https://codesandbox.io/s/0y4zvoxl8v",
    link2: "https://codepen.io/team/amcharts/embed/ExjbjbJ",
    name2: "timeline",
    link3: "",
    name3: "",
  },
  {
    name: "seedata",
    link: "https://codesandbox.io/s/bsqdo",
    link2: "https://codepen.io/createwithdata/embed/aXZVWX",
    name2: "changedataview",
    link3: "",
    name3: "",
  },
  {
    name: "codeeditor",
    link: "https://codesandbox.io/s/r1y0z1mx4",
    link2: "",
    name2: "",
    link3: "",
    name3: "",
  },
  {
    name: "purecssstory",
    link: "https://codepen.io/jcoulterdesign/embed/oRRRPY",
    link2: "",
    name2: "",
    link3: "",
    name3: "",
  },
  {
    name: "images",
    link: "https://codesandbox.io/s/framer-motion-lazy-load-images-bx1je?file:/src/App.js",
    importance: "high",
    link2: "",
    name2: "",
    link3: "",
    name3: "",
  },
  {
    name: "progress",
    link: "https://codesandbox.io/s/react-progress-rings-clock-69z4j",
    importance: "high",
    link2: "https://codepen.io/hakimel/embed/BpKNPg",
    name2: "FUCKINGCOOL",
    link3: "https://codepen.io/lmgonzalves/embed/NyzKdr",
    name3: "draggable",
    link4: "https://codepen.io/borntofrappe/embed/LwZRON",
    name4: "bomb",
  },
  {
    name: "colors",
    link: "https://casesandberg.github.io/react-color/",
    importance: "high",
    link2: "",
    name2: "",
    link3: "",
    name3: "",
  },
  {
    name: "tables",
    link: "https://codesandbox.io/s/429yzl5pj7?file:/src/index.js",
    importance: "high",
    link2:
      "https://codesandbox.io/s/material-ui-editable-tables-wsp0c",
    name2: "",
    link3: "",
    name3: "",
  },
  {
    name: "animation",
    link: "https://codesandbox.io/s/framer-motion-basic-usage-90q89",
    importance: "high",
    link2: "",
    name2: "",
    link3: "",
    name3: "",
  },
  {
    name: "dashboard",
    link: "http://dashboards.webkom.co/react/airframe/dashboards/projects",
    importance: "high",
    link2: "",
    name2: "",
    link3: "",
    name3: "",
  },
  {
    name: "diarams",
    link: "https://antonioru.github.io/beautiful-react-diagrams/#/Schema",
    importance: "high",
    link2: "",
    name2: "",
    link3: "",
    name3: "",
  },
  {
    name: "checkbox",
    link: "https://codepen.io/finnhvman/embed/zpygBB",
    importance: "high",
    link2: "",
    name2: "",
    link3: "",
    name3: "",
  },
  {
    name: "uploadfile",
    link: "https://codepen.io/seyedi/details/KvObJq",
    importance: "high",
    link2: "",
    name2: "",
    link3: "",
    name3: "",
  },
  {
    name: "stepper",
    link: "https://codesandbox.io/s/react-stepper-o2e30?file:/src/components/Stepper/Stepper.js",
    importance: "high",
    link2: "https://codepen.io/jcoulterdesign/embed/zdwajv",
    name2: "reallycooolstepper",
    link3: "",
    name3: "",
  },
  {
    name: "search",
    link: "https://codesandbox.io/s/searchbar-react-u1sqg?from-embed",
    name2: "animatedsearch",
    importance: "",
    link2: "https://codepen.io/jkantner/details/eYmvvqQ",
    link3: "",
    name3: "",
  },
  {
    name: "maps",
    link: "https://codepen.io/ethanselzer/embed/ryayLK",
    name2: "",
    importance: "",
    link2: "",
    link3: "",
    name3: "",
  },
  {
    name: "currenttask",
    link: "https://codepen.io/StephenScaff/embed/egOedp",
    name2: "focusonhover",
    importance: "",
    link2: "https://codepen.io/noeldelgado/embed/PZJGLx",
    link3: "",
    name3: "",
  },
  {
    name: "cursortool",
    link: "https://codepen.io/ethanselzer/embed/ryayLK",
    name2: "scrolltool",
    importance: "https://codepen.io/du5rte/embed/KrGjEm",
    link2: "",
    link3: "https://codepen.io/prvnbist/embed/zRMaeK",
    name3: "cssanimations",
  },
  {
    name: " cursorhighlight",
    link: "https://codepen.io/andrewchmr-the-vuer/embed/GRZjbbB",
    name2: "colorchanges",
    link2: "https://codesandbox.io/s/cursor-y71mi",
    link3:
      "https://codesandbox.io/s/react-custom-cursor-2v06n",
    importance: "",
    name3: "backandforward",
  },
  {
    name: "coolexampleapps-directions",
    link: "https://codepen.io/sdras/embed/gogVRX",
    name2: "",
    importance: "",
    link2: "",
    link3: "",
    name3: "",
  },
  {
    name: "list",
    link: "https://codepen.io/aaroniker/embed/WKbzgx",
    name2: "coollist",
    link2: "https://codepen.io/nerdmanship/embed/veWyKg",
    importance: "high",
    link3: "https://codepen.io/shshaw/embed/WXMdwE",
    name3: "checkofflist",
    name4: "purecsscheck",
    link4: "https://codepen.io/milanraring/embed/QWbqBGo",
  },
  {
    name: "404",
    link: "https://codepen.io/dsenneff/embed/mjZgmN",
    name2: "",
    importance: "",
    link2: "",
    link3: "",
    name3: "",
  },
  {
    name: "gridd",
    link: "https://codepen.io/stacy/details/YGxoEG",
    name2: "flex",
    link2: "https://codepen.io/enxaneta/embed/adLPwv",
    importance: "",
  },

  {
    name: "purecssloader",
    link: "https://codepen.io/finnhvman/embed/bmNdNr",
    name2: "loadercollection",
    importance: "",
    link2: "https://codepen.io/chrisgannon/details/VvJjgY",
    link3: "loaders",
    name3: "https://codepen.io/tomhazledine/details/BKrXwJ",
    link4: "https://codepen.io/woodwoerk/details/LpLwRP",
    name4: "videoloader",
  },
  {
    link: "https://codesandbox.io/s/framer-motion-animatesharedlayout-menu-underline-demo-y6tl3",
    name: "navbar",
    link2: "https://codepen.io/ainalem/embed/LJYRxz",
    name2: "navbarbuttonshcangeonlick",
  },
  {
    link2:
      "https://codepen.io/collection/HtAne?cursor:ZD0xJm89MSZwPTEmdj03MQ::",
    name: "loaders",
    link3:
      "https://codepen.io/collection/XRRJGq?cursor:ZD0xJm89MSZwPTEmdj0xNQ::",
    name3: "gridcollections",
    name4: "grid",
    link4:
      "https://codepen.io/collection/DgwjNL?cursor:ZD0xJm89MSZwPTEmdj04",
  },
];

let getLinks1 = (arr) => {
  let getArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    let newObj = {
      title: arr[i].name,
    };
    if (arr[i].link) {
      newObj["link"] = arr[i].link;
    }

    if (arr[i].importance) {
      newObj["importance"] = arr[i].importance;
    }
    console.log(newObj);
    getArr.push(newObj);
  }

  return getArr;
  //   console.log(getArr.length);
  //   let obj = { arr: getArr };
  //   return obj;
};

let getLinks2 = (arr) => {
  let getArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].link2) {
      return;
    }
    let newObj = {
      title: arr[i].name,
    };
    if (arr[i].link2) {
      newObj["link"] = arr[i].link2;
    }

    if (arr[i].name2) {
      newObj["subtitle"] = arr[i].link2;
    }
    if (arr[i].importance) {
      newObj["importance"] = arr[i].importance;
    }
    getArr.push(newObj);
  }

  return getArr;
};

let getLinks3 = (arr) => {
  let getArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].link3) {
      return;
    }
    let newObj = {
      title: arr[i].name,
    };
    if (arr[i].link3) {
      newObj["link"] = arr[i].link3;
    }

    if (arr[i].name3) {
      newObj["subtitle"] = arr[i].link3;
    }
    if (arr[i].importance) {
      newObj["importance"] = arr[i].importance;
    }
    getArr.push(newObj);
  }

  return getArr;
};
let getLinks4 = (arr) => {
  let getArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].link) {
      let newObj = {
        title: arr[i].name.trim(),
        link: arr[i].link.trim(),
        importance: arr[i].importance
          ? arr[i].importance
          : "",
      };
      getArr.push(newObj);
    }
    if (arr[i].link2) {
      let newObj = {
        title: arr[i].name.trim(),
        subtitle: arr[i].name2 ? arr[i].name2.trim() : "",
        link: arr[i].link2.trim(),
        importance: arr[i].importance
          ? arr[i].importance
          : "",
      };
      getArr.push(newObj);
    }
    if (arr[i].link3) {
      let newObj = {
        title: arr[i].name.trim(),
        subtitle: arr[i].name3,
        link: arr[i].link3.trim(),
        importance: arr[i].importance
          ? arr[i].importance
          : "",
      };
      getArr.push(newObj);
    }
    if (arr[i].link4) {
      let newObj = {
        title: arr[i].name.trim(),
        subtitle: arr[i].name4,
        link: arr[i].link4.trim(),
        importance: arr[i].importance
          ? arr[i].importance
          : "",
      };
      getArr.push(newObj);
    }
  }

  return getArr;
};
//   console.log(getArr.length);
//   let obj = { arr: getArr };

//   return obj;
// };

//     if (arr[i].link2) {
//       newObj["link2"] = arr[i].link2;
//     }
//     if (arr[i].link3) {
//       newObj["link3"] = arr[i].link3;
//     }

//     if (arr[i].link4) {
//       newObj["link4"] = arr[i].link4;
//     }

//     if (arr[i].name2) {
//       newObj["name2"] = arr[i].name2;
//     }
//     if (arr[i].name3) {
//       newObj["name3"] = arr[i].name3;
//     }
//     if (arr[i].name4) {
//       newObj["name4"] = arr[i].name4;
//     }
//     getArr.push(newObj);
//   }
//   return getArr;
// console.log(getAllLinks(data));

let test = [
  {
    name: " cursorhighlight",
    link: "https://codepen.io/andrewchmr-the-vuer/embed/GRZjbbB",
    name2: "colorchanges",
    link2: "https://codesandbox.io/s/cursor-y71mi",
    link3:
      "https://codesandbox.io/s/react-custom-cursor-2v06n",
    importance: "",
    name3: "backandforward",
  },
  {
    name: "list",
    link: "https://codepen.io/aaroniker/embed/WKbzgx",
    name2: "coollist",
    link2: "https://codepen.io/nerdmanship/embed/veWyKg",
    importance: "high",
    link3: "https://codepen.io/shshaw/embed/WXMdwE",
    name3: "checkofflist",
    name4: "purecsscheck",
    link4: "https://codepen.io/milanraring/embed/QWbqBGo",
  },
];

// let pens = getLinks1(test);
// let pens2 = getLinks2(test);

// let pens3 = getLinks3(test);
let pens4 = getLinks4(data);

console.log(pens4);
// let merged = [...pens, ...pens2, ...pens4, ...pens3];
// console.log("merged", merged);
// console.log(merged.length);

// function destructure(test) {
//     for ( let i = 0; i < test.length; i++ ) {

//   }
// }
// console.log(destructure(test));
let arr = [
  "https://codesandbox.io/s/react-suspense-esc8w",
  "https://codepen.io/finnhvman/embed/bmNdNr",
  "https://codepen.io/suez/embed/AXQaEg",
  "https://react-beautiful-dnd.netlify.app/?path:/story/tables--with-custom-portal",
  "https://codesandbox.io/s/ym97587kxx",
  "https://codesandbox.io/s/react-grid-layout-d9n8q",
  "https://codepen.io/sdras/embed/zYqvJqy",
  "https://codepen.io/sdras/embed/xxZeRyg",
  "https://codesandbox.io/s/9onoj",
  "https://codepen.io/himalayasingh/embed/QZKqOX",
];

function createObjects(arr) {
  let arr = [];
  for (let i = 0; i < arr; i++) {
    let newObj = {
      link: arr[i],
      title: "",
      importance: "",
      sparkJoy: false,
      simple: false,
      component: "",
    };
    arr.push(newObj);
  }
  return arr;
}
