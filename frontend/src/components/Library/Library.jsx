import React, {
  useState,
  useEffect,
  useCallback,
} from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Routes, Route } from "react-router-dom";
import codepens from "../Codepen/List";
import { CodepenItem } from "../index";
import { debounce, filter } from "lodash";
import {
  hasPlace,
  getUnique,
  filterForCondition,
  joyComponents,
  getEachPage,
  buildLibrary,
} from "./functions";

export function FilterList({ pens }) {
  const [query, setQuery] = useState("");
  let filteredPens = pens;
  if (query !== "") {
    filteredPens = pens.filter((name) => {
      console.log(name.component.toLowerCase());
      return (
        name.component ===
        "button".toLowerCase().includes("button")
      );
    });
  }
  console.log("type of code pen", typeof pens);
  return (
    <div>
      {filteredPens.map((name) => (
        <div key={name.link}>
          {name.title}
          {name.component}
        </div>
      ))}
    </div>
  );
}
let getComponents = filterForCondition(
  codepens,
  "component"
);

// const MapCodepens = (codepens) => (
//   <div>
//     {codepens.map((codepen) => (
//       <div className="codepen" key={codepen.link}>
//         {codepen.sparkJoy && codepen.simple ? (
//           <div>
//             <a href={codepen.link}>
//               {" "}
//               <h3>{codepen.title} </h3>
//             </a>
//             <h3>{codepen.component}</h3>
//           </div>
//         ) : (
//           <div>
//             <p>
//               {codepen.title}
//               {codepen.component}
//             </p>
//           </div>
//         )}
//         {codepen.title}
//         {codepen.component}
//         <h5>{codepen.where}</h5>
//         {codepen.sparkJoy}
//         {/* <Codepen
//             title={codepen.title}
//             link={codepen.link}
//             subtitle={codepen.subtitle}
//           /> */}
//       </div>
//     ))}
//   </div>
// );

function GetLayout() {
  return <div></div>;
}

const GetNavItems = ({ items }) => {
  let count = items.length;
  if (items) {
    return (
      <div>
        <h4>{count}</h4>
        <h1>Nav Items</h1>
        {items.map((item) => {
          <div>1</div>;
        })}
      </div>
    );
  } else {
    return <div>no</div>;
  }
};

const Array = ({ arr }) => {
  return <MapCodepens codepens={arr} />;
};
export default function Library() {
  console.log(codepens.filter((item) => item.component));
  const items = () =>
    codepens
      .filter((item) => {
        return item.component
          .toLowerCase()
          .includes("button");
      })
      .map((item, index) => {
        return (
          <div key={item.link}>
            <CodepenItem object={item} link={item.link} />{" "}
          </div>
        );
      });
  const joy = () =>
    codepens
      .filter((item) => {
        console.log(item.sparkJoy == true);
        return item.sparkJoy == true;
      })
      .map((item, index) => {
        return (
          <CodepenItem
            key={index}
            object={item}
            link={item.link}
          />
        );
      });

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const getAllComponentsNames = () => {
    return codepens
      .map((item) => item.component)
      .filter(onlyUnique)
      .map((item, index) => {
        return (
          <div key={index}>
            <h3>{item}</h3>
            {getComponents(item)}
          </div>
        );
      });
  };
  const getPages = (page) => {
    return codepens
      .filter((item) => {
        return item.where === page;
      })
      .map((item) => {
        return (
          <div key={item.link}>
            <CodepenItem object={item} link={item.link} />{" "}
          </div>
        );
      });
  };
  const getComponents = (component) =>
    codepens
      .filter((item) => {
        // console.log("component", item.component == page);
        // console.log(item.component === page);
        return item.component === component;
      })
      .map((item, index) => {
        return (
          <div key={item.link}>
            <CodepenItem object={item} link={item.link} />{" "}
          </div>
        );
      });

  //   console.log("items", items);
  //   console.log("joy", joy.length);
  //   let joy = joyComponents(codepens);
  //   const getJoy = () => joyComponents(codepens);
  //   console.log(getJoy);
  return (
    <div>
      <h2>Get Happy</h2>
      {getAllComponentsNames()}

      {getComponents("Loader")}
      {getPages("All")}
    </div>
  );
}
