import React from "react";
import CodeSandbox from "./CodeSandbox";
import Codepen from "./Codepen";
export default function CodepenItem({ object, link }) {
  return (
    <div className="App">
      <h2>{object.title}</h2>
      <h4>{object.subtitle}</h4>
      <h5>{object.component}</h5>

      <h5>Reference? {object.reference}</h5>
      <h5>Simple? {object.simple}</h5>
      <h5>Spark Joy? {object.sparkJoy}</h5>

      {link.toLowerCase().includes("codesandbox") ? (
        <div>
          <CodeSandbox link={link} />
        </div>
      ) : (
        <div>
          <Codepen link={link} />
        </div>
      )}
    </div>
  );
}
function ToExplore({
  name,
  link,
  importance,
  link2,
  name2,
  link3,
  name3,
  link4,
  name4,
}) {
  return (
    <li>
      <h2>importance: {importance} </h2>

      <a href={link} target="_blank">
        <h5>{name}</h5>
      </a>

      <a href={link2} target="_blank">
        <h5>{name2}</h5>
      </a>

      <a href={link3} target="_blank">
        <h5>{name3}</h5>
      </a>

      <a href={link4} target="_blank">
        <h5>{name4}</h5>
      </a>
    </li>
  );
}
function ExploreList() {
  return (
    <div>
      <ToExplore
        name="feedback"
        link="https://codepen.io/aaroniker/details/mdyYBPP"
      />
      <ToExplore
        name="layout"
        link="https://codesandbox.io/s/material-ui-layout-7mn9xq3nnj?from-embed"
        importance="high"
        link2="https://codesandbox.io/s/material-ui-layout-7mn9xq3nnj?file=/src/index.js"
        name2="material ui layout"
        name3="cool free layouts"
        link3="https://react.semantic-ui.com/layouts/"
        name4="card layout"
        link4="https://codepen.io/simeydotme/details/rNVaOap"
      />
      <ToExplore
        name="page transitions and modals"
        link="https://codesandbox.io/s/react-page-transitions-1jgim?from-embed"
        importance="medium"
        link2="https://codesandbox.io/s/zsk52"
        name2="transitions"
        name3="with react router"
        link3="https://codesandbox.io/s/react-page-transitions-1jgim?from-embed"
      />
      <ToExplore
        name="text transitions"
        link="https://codesandbox.io/s/react-router-gsap-page-transitions-3ev3k"
        importance="high"
        link2="https://codesandbox.io/s/github/darbley/react-page-slide-transitions/tree/master/?from-embed"
        name2="colors"
        link3=""
        name3=""
      />
      https://codepen.io/suez/pen/AXQaEg
      <ToExplore
        name="font"
        link="https://codepen.io/jpamental/details/VEYzxO"
        name2="book blog"
        importance=""
        link2="https://codepen.io/MadeByMike/details/GmBLKo"
        link3="https://codepen.io/lisilinhart/pen/MoLxxp"
        name3="hover"
      />
      <ToExplore
        name=" drag and drop"
        link="https://codesandbox.io/s/github/guandjoy/rudl-demo/tree/master/"
        importance="medium"
        link2="https://codesandbox.io/s/framer-motion-dnd-y2wxq"
        name2="drag and drop circles"
        link3="https://codesandbox.io/s/framer-motion-5-drag-to-reorder-lists-uonye"
        name3="drag to reorder"
      />
      add and drag:
      https://react-beautiful-dnd.netlify.app/?path=/story/tables--with-custom-portal
      https://codesandbox.io/s/react-grid-layout-d9n8q
      https://codesandbox.io/s/ym97587kxx
      <ToExplore
        name="click on projects"
        link="https://codesandbox.io/s/1p7o2"
        importance="low"
        link2="https://codesandbox.io/s/scroll-animation-with-react-spring-forked-ekxlf"
        name2=""
        name3="click to move hover"
        link3="https://codesandbox.io/s/framer-motion-2-animatesharedlayout-animate-between-different-components-dy0bv?file=/src/App.js"
      />
      <ToExplore
        name="nav"
        link="https://codesandbox.io/s/framer-motion-page-transition-jb7d0"
        importance="high"
        link2=""
        name2=""
      />{" "}
      <ToExplore
        importance="high"
        link2="https://codepen.io/team/css-tricks/pen/XBmazq"
        name2="pure css form"
      />
      <ToExplore
        name="dropdowns"
        link="https://codesandbox.io/s/framer-motion-radix-menu-forked-02z77"
        importance="low"
        link2="https://react.semantic-ui.com/modules/dropdown/"
        name2="awesome library"
      />
      <ToExplore
        name="tasks emphasis"
        link="https://codesandbox.io/s/framer-motion-shaking-9ovl4"
        importance="high"
        link2="https://codepen.io/hexagoncircle/pen/jgGxKR"
        name2="card emphasis"
        link3="https://codepen.io/eglenfield/pen/jObJjYR"
        name3="hover on empahsis"
      />
      <ToExplore
        name="drag to view"
        link="https://codesandbox.io/s/framer-motion-apple-watch-app-menu-mq8s8"
        importance="low"
        link2=""
        name2=""
      />
      <ToExplore
        name="Accordian"
        link="https://codesandbox.io/s/framer-motion-list-transitions-forked-nqd2r"
        importance="low"
        link2=""
        name2=""
      />
      <ToExplore
        name="swipe to delete"
        link="https://codesandbox.io/s/the-framer-book-example-animations-35-swipe-to-delete-z9hqi?file=/src/index.js"
        importance="low"
        link2=""
        name2=""
      />
      <ToExplore
        name="cards"
        link="https://codesandbox.io/s/react-spring-list-tzeze"
        importance="high"
        link2="https://codesandbox.io/s/mmut9"
        name2=""
        name3="shaky cards"
        link3="https://codesandbox.io/s/6jlvz1j5q3"
      />
      problem card: https://codepen.io/sdras/pen/zYqvJqy
      https://codepen.io/sdras/pen/xxZeRyg
      https://codesandbox.io/s/9onoj
      <ToExplore
        name="buttons"
        link="https://codesandbox.io/s/hamburger-menu-with-framer-motion-iwxtp"
        importance="high"
        link2="https://codepen.io/giannotr/pen/GPgKpK"
        name2="hover"
        link3="https://codepen.io/oliviale/pen/gKParr"
        name3="fav "
        link4="https://codepen.io/tstoik/details/EjMzRZ"
        link4="social media"
      />
      <ToExplore
        name="play button"
        link="https://codesandbox.io/s/8l667ln690"
        importance=""
        link2="https://codesandbox.io/s/llvqmkxnkz"
        name2=""
        link3="https://codepen.io/Zaku/pen/YjRqzB"
        name3="changes svg bubtton"
        link4="THIS IS IT CALM"
        name4="https://codepen.io/pirrera/pen/bqVeGx"
      />
      https://codepen.io/himalayasingh/pen/QZKqOX
      <ToExplore
        name="loading cards"
        link="https://codesandbox.io/s/create-an-animated-skeleton-loader-in-reactjs-t6hsc?from-embed"
        importance="medium"
        link2="https://codepen.io/juliepark/pen/vjMOKQ"
        name2="cute cards"
        link3="https://codepen.io/lewisvrobinson/pen/WJpzMZ"
        name3="day week month "
      />
      <ToExplore
        name="react suspense"
        link="https://codesandbox.io/s/4wnpo9oy4"
        importance="high"
        link2="https://codesandbox.io/s/j4wrxnm14v"
        name2="react router"
        link3="https://codesandbox.io/s/8nq4w3jj39"
        name3="load data"
      />
      https://codesandbox.io/s/react-suspense-esc8w
      <ToExplore
        name="inputs"
        link="https://codesandbox.io/s/r0kzgevzk"
        importance=""
        link2="https://codepen.io/mjunaidi/pen/KXKNmv"
        name2="click to edit"
        link3="https://codepen.io/ainalem/pen/EQXjOR"
        name3="line changes"
      />
      <ToExplore
        name="toggles"
        link="https://codesandbox.io/s/y0x4k4qjwz"
        importance="low"
        link2="https://codepen.io/janeRivas/pen/pZjxoa"
        name2="toggle card"
        link3="https://codepen.io/borntofrappe/pen/aboPapm"
        name3="day and night"
      />
      <ToExplore
        name="template"
        link="https://codesandbox.io/s/hack4impact-website-0kn5m"
        importance="high"
        link2="https://mui.com/getting-started/templates/"
        name2="mui"
        link3="https://codepen.io/kathykato/pen/KRQOKY"
        name3="very simple layout "
        name4="this is it for bugs"
        link4="https://codepen.io/mxbck/pen/ERNwBy"
      />
      <ToExplore
        name="tabs"
        link="https://codesandbox.io/s/festive-ramanujan-byw7s"
        importance="hig"
        link2="https://codesandbox.io/s/framer-motion-animated-tabs-jkckb"
        name2="tabs"
        link3="https://codepen.io/ettrics/pen/WRbGRN"
        name3="tabs that move upa nd down "
      />
      <ToExplore
        name="scroll to reveal"
        link="https://codesandbox.io/s/631sl"
        importance="hig"
        link2="https://codesandbox.io/s/flexboxyoga-in-webgl-7psew"
        name2="cool scroll"
        link3=""
        name3=""
      />
      <ToExplore
        name="hover"
        link="https://codesandbox.io/s/message-hover-animation-i0op9"
        importance="medium"
        link2="https://codepen.io/avstorm/pen/oqKbLq"
        name2="button hover"
        link3="https://codepen.io/short/pen/VyNqPa"
        name3="cool btuton hover"
        link4="https://codepen.io/cobra_winfrey/pen/opZgWL"
        name4="download button"
      />
      <ToExplore
        name="graphs"
        link="https://codesandbox.io/s/z6r7qj8wm"
        importance="hig"
        link3="https://codepen.io/hougasian/pen/vewKaX"
        name3="cool "
      />
      <ToExplore
        name="calendar"
        link="https://codesandbox.io/s/0y4zvoxl8v"
        link2="https://codepen.io/team/amcharts/pen/ExjbjbJ"
        name2="timeline"
        link3=""
        name3=""
      />
      <ToExplore
        name="see data "
        link="https://codesandbox.io/s/bsqdo"
        link2="https://codepen.io/createwithdata/pen/aXZVWX"
        name2="change data view"
        link3=""
        name3=""
      />
      <ToExplore
        name="code editor"
        link="https://codesandbox.io/s/r1y0z1mx4"
        link2=""
        name2=""
        link3=""
        name3=""
      />
      <ToExplore
        name="pure css story"
        link="https://codepen.io/jcoulterdesign/pen/oRRRPY"
        link2=""
        name2=""
        link3=""
        name3=""
      />
      <ToExplore
        name="images"
        link="https://codesandbox.io/s/framer-motion-lazy-load-images-bx1je?file=/src/App.js"
        importance="high"
        link2=""
        name2=""
        link3=""
        name3=""
      />
      <ToExplore
        name="progress"
        link="https://codesandbox.io/s/react-progress-rings-clock-69z4j"
        importance="high"
        link2="https://codepen.io/hakimel/pen/BpKNPg"
        name2="FUCKING COOL"
        link3="https://codepen.io/lmgonzalves/pen/NyzKdr"
        name3="draggable "
        link4="https://codepen.io/borntofrappe/pen/LwZRON"
        name4="bomb"
      />{" "}
      <ToExplore
        name="colors"
        link="https://casesandberg.github.io/react-color/"
        importance="high"
        link2=""
        name2=""
        link3=""
        name3=""
      />{" "}
      <ToExplore
        name="tables"
        link="https://codesandbox.io/s/429yzl5pj7?file=/src/index.js"
        importance="high"
        link2="https://codesandbox.io/s/material-ui-editable-tables-wsp0c"
        name2=""
        link3=""
        name3=""
      />{" "}
      <ToExplore
        name="animation"
        link="https://codesandbox.io/s/framer-motion-basic-usage-90q89"
        importance="high"
        link2=""
        name2=""
        link3=""
        name3=""
      />
      <ToExplore
        name="dashboard"
        link="http://dashboards.webkom.co/react/airframe/dashboards/projects"
        importance="high"
        link2=""
        name2=""
        link3=""
        name3=""
      />
      <ToExplore
        name="diarams"
        link="https://antonioru.github.io/beautiful-react-diagrams/#/Schema"
        importance="high"
        link2=""
        name2=""
        link3=""
        name3=""
      />
      <ToExplore
        name="checkbox"
        link="https://codepen.io/finnhvman/pen/zpygBB"
        importance="high"
        link2=""
        name2=""
        link3=""
        name3=""
      />
      <ToExplore
        name="upload file"
        link="https://codepen.io/seyedi/details/KvObJq"
        importance="high"
        link2=""
        name2=""
        link3=""
        name3=""
      />
      <ToExplore
        name="stepper"
        link="https://codesandbox.io/s/react-stepper-o2e30?file=/src/components/Stepper/Stepper.js"
        importance="high"
        link2="https://codepen.io/jcoulterdesign/pen/zdwajv"
        name2="really coool stepper"
        link3=""
        name3=""
      />
      <ToExplore
        name="search"
        link="https://codesandbox.io/s/searchbar-react-u1sqg?from-embed"
        name2="animated search"
        importance=""
        link2="https://codepen.io/jkantner/details/eYmvvqQ"
        link3=""
        name3=""
      />
      <ToExplore
        name="maps"
        link="https://codepen.io/ethanselzer/pen/ryayLK"
        name2=""
        importance=""
        link2=""
        link3=""
        name3=""
      />
      <ToExplore
        name="current task"
        link="https://codepen.io/StephenScaff/pen/egOedp"
        name2="focus on hover"
        importance=""
        link2="https://codepen.io/noeldelgado/pen/PZJGLx"
        link3=""
        name3=""
      />
      <ToExplore
        name="cursor tool"
        link="https://codepen.io/ethanselzer/pen/ryayLK"
        name2="scroll tool"
        importance="https://codepen.io/du5rte/pen/KrGjEm"
        link2=""
        link3="https://codepen.io/prvnbist/pen/zRMaeK"
        name3="css animations"
      />
      <ToExplore
        name="cursor highlight"
        link="https://codepen.io/andrewchmr-the-vuer/pen/GRZjbbB"
        name2="color changes"
        link2="https://codesandbox.io/s/cursor-y71mi"
        link3="https://codesandbox.io/s/react-custom-cursor-2v06n"
        importance=""
        name3="back and forward"
      />
      <ToExplore
        name="cool example apps - directions"
        link="https://codepen.io/sdras/pen/gogVRX"
        name2=""
        importance=""
        link2=""
        link3=""
        name3=""
      />
      <ToExplore
        name="list"
        link="https://codepen.io/aaroniker/pen/WKbzgx"
        name2="cool list"
        link2="https://codepen.io/nerdmanship/pen/veWyKg"
        importance="high"
        link3="https://codepen.io/shshaw/pen/WXMdwE"
        name3="check off list "
        name4="pure css check"
        link4="https://codepen.io/milanraring/pen/QWbqBGo"
      />
      <ToExplore
        name="404"
        link="https://codepen.io/dsenneff/pen/mjZgmN"
        name2=""
        importance=""
        link2=""
        link3=""
        name3=""
      />
      <ToExplore
        name="gridd"
        link="https://codepen.io/stacy/details/YGxoEG"
        name2="flex"
        link2="https://codepen.io/enxaneta/pen/adLPwv"
        importance=""
      />
      <ToExplore
        name="pure css loader"
        link="https://codepen.io/finnhvman/pen/bmNdNr"
        name2="loader collection"
        importance=""
        link2="https://codepen.io/chrisgannon/details/VvJjgY"
        link3="loaders"
        name3="https://codepen.io/tomhazledine/details/BKrXwJ"
        link4="https://codepen.io/woodwoerk/details/LpLwRP"
        name4="video loader"
      />
      <ToExplore
        link3="https://codesandbox.io/s/framer-motion-animatesharedlayout-menu-underline-demo-y6tl3"
        name3="navbar"
        link="https://codepen.io/ainalem/pen/LJYRxz"
        name="navbar buttons hcange on lick"
      />
      <ToExplore
        link2="https://codepen.io/collection/HtAne?cursor=ZD0xJm89MSZwPTEmdj03MQ=="
        name2="loaders"
        link3="https://codepen.io/collection/XRRJGq?cursor=ZD0xJm89MSZwPTEmdj0xNQ=="
        name3="grid collections"
        name4="grid"
        link4="https://codepen.io/collection/DgwjNL?cursor=ZD0xJm89MSZwPTEmdj04"
      />
    </div>
  );
}
